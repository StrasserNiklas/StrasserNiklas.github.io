class CgolPitch extends HTMLElement {
    constructor() {
        super();

        this.modalLevelsButtonHandler = this.modalLevelsButtonHandler.bind(this);
        this.cellClickHandler = this.cellClickHandler.bind(this);
        this.startButtonHandler = this.startButtonHandler.bind(this);
        this.pauseButtonHandler = this.pauseButtonHandler.bind(this);
        this.clearButtonHandler = this.clearButtonHandler.bind(this);
        this.randomizeButtonHandler = this.randomizeButtonHandler.bind(this);
        this.setRandomColorForDiscoButton = this.setRandomColorForDiscoButton.bind(this);
        this.discoButtonHandler = this.discoButtonHandler.bind(this);
        this.setSizeButtonHandler = this.setSizeButtonHandler.bind(this);
        this.startPlaying = this.startPlaying.bind(this);
        this.loadLevelButtonHandler = this.loadLevelButtonHandler.bind(this);

        this.$speed = 100;
        this.$countOfGenerations = 0;
        this.$changeInGeneration = false;
        this.$discoModeActive = false;
        this.$gameIsAlive = false;
        this.$grid = new Array(this.$rows);
        this.$nextGrid = new Array(this.$columns);

        this.setGenerationLabel();

        var speedLabel = document.getElementById('speedLabel');
        speedLabel.textContent = this.$speed;

        var speedSlider = document.getElementById('speedSlider');
        speedSlider.addEventListener('input', this.setSpeed.bind(this));
        window.addEventListener('resize', this.recalculateCellWidth.bind(this));

        this.attachShadow({ mode: 'open' }); // manipulate content of dom freely

        this.shadowRoot.innerHTML = `
<style>
p {
    color: blue;
}
.emph{
    font-weight: bolder;
}

table {
    table-layout: fixed;
    height:100%
    border-collapse: separate;
    margin-left:auto; 
    margin-right:auto;
  }

.dead { 
    background-color: lightgray;
    border: 0.5px solid black;
  } 

  .alive { 
    background-color:green;
    border: 0.5px solid black;
  } 

  .wasAlive {
    background-color: #FFC391;
    border: 0.5px solid black;
  }

</style>
`;
    }

    connectedCallback() {
        this.$rows = parseInt(this.getAttribute('height'));
        this.$columns = parseInt(this.getAttribute('width'));

        this.setupGameButtons();
        this.initializeGrids();
        this.resetGrids();
        this.setupGrid();
        this.recalculateCellWidth();
    }

    setSpeed() {
        var speedSlider = document.getElementById('speedSlider');
        this.$speed = parseInt(speedSlider.value);

        var speedLabel = document.getElementById('speedLabel');
        speedLabel.textContent = this.$speed;
    }

    setGenerationLabel() {
        var generationCountLabel = document.getElementById('generationLabel');
        generationCountLabel.textContent = this.$countOfGenerations;
    }

    recalculateCellWidth(e) {
        var windowWidth = window.innerWidth;
        var windowWHeight = window.innerHeight;

        var toolDiv = document.getElementById('toolDiv');
        var realHeight = windowWHeight - toolDiv.offsetHeight;

        var cellHeight = realHeight / this.$rows;
        var cellWidth = windowWidth / this.$columns;

        if (this.$rows >= this.$columns) {
            for (var k = 0; k < this.$rows; k++) {
                for (var l = 0; l < this.$columns; l++) {
                    var cellH = this.shadowRoot.getElementById(k + '_' + l);

                    cellH.height = cellHeight - 9; // cellWidth - 6;
                    cellH.width = cellH.height;
                }
            }

            var table = this.shadowRoot.getElementById('gameTable');
            table.style.width = '1%';
        } else {
            for (var i = 0; i < this.$rows; i++) {
                for (var j = 0; j < this.$columns; j++) {
                    var cell = this.shadowRoot.getElementById(i + '_' + j);

                    cell.width = cellWidth - 6;
                    cell.height = cell.width;
                }
            }

            var table1 = this.shadowRoot.getElementById('gameTable');
            table1.style.width = '100%';
        }
    }

    startPlaying() {
        this.calculateNextGeneration();

        this.$countOfGenerations++;
        this.setGenerationLabel();

        if (this.$gameIsAlive) {
            setTimeout(this.startPlaying, this.$speed);
        }
    }

    countNeighbors(y, x) {
        var sum = 0;
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                var row = (y + j + this.$rows) % this.$rows;
                var col = (x + i + this.$columns) % this.$columns;

                if (this.$grid[row][col] < 2) {
                    sum += this.$grid[row][col];
                }
            }
        }

        if (this.$grid[y][x] < 2) {
            sum -= this.$grid[y][x];
        }

        return sum;
    }

    calculateNextGeneration() {
        this.resetNextGrid();

        this.$changeInGeneration = false;

        for (let i = 0; i < this.$rows; i++) {
            for (let j = 0; j < this.$columns; j++) {
                const cellValue = this.$grid[i][j];
                const neighborSum = this.countNeighbors(i, j);

                if ((cellValue === 0 && neighborSum === 3)) {
                    this.$nextGrid[i][j] = 1;
                    this.$changeInGeneration = true;
                } else if (cellValue === 2 && neighborSum === 3) {
                    this.$nextGrid[i][j] = 1;
                    this.$changeInGeneration = true;
                } else if (cellValue === 1 && (neighborSum < 2 || neighborSum > 3)) {
                    this.$nextGrid[i][j] = 2;
                    this.$changeInGeneration = true;
                } else {
                    this.$nextGrid[i][j] = cellValue;
                }
            }
        }

        if (!this.$changeInGeneration) {
            this.$gameIsAlive = false;
        }

        this.copyAndResetGrid();
        this.updateView();
    }

    updateView() {
        for (var i = 0; i < this.$rows; i++) {
            for (var j = 0; j < this.$columns; j++) {
                var cell = this.shadowRoot.getElementById(i + '_' + j);

                if (this.$grid[i][j] === 0) {
                    cell.setAttribute('class', 'dead');

                    if (this.$discoModeActive) {
                        cell.style.backgroundColor = 'lightgray';
                    }
                } else if (this.$grid[i][j] === 1) {
                    cell.setAttribute('class', 'alive');

                    if (this.$discoModeActive) {
                        cell.style.backgroundColor = this.getRandomColor();
                    }
                } else if (this.$grid[i][j] === 2) {
                    cell.setAttribute('class', 'wasAlive');

                    if (this.$discoModeActive) {
                        cell.style.backgroundColor = 'lightblue';
                    }
                }
            }
        }
    }

    cellClickHandler(e) {
        if (this.$gameIsAlive) {
            return;
        }

        var cell = e.target;
        var rowcol = cell.id.split('_');
        var row = rowcol[0];
        var col = rowcol[1];

        var classes = cell.getAttribute('class');
        if (classes.indexOf('live') > -1) {
            cell.setAttribute('class', 'dead');
            this.$grid[row][col] = 0;
        } else if (classes.indexOf('wasAlive') > -1) {
            cell.setAttribute('class', 'alive');
            this.$grid[row][col] = 2;
        } else {
            cell.setAttribute('class', 'alive');
            this.$grid[row][col] = 1;
        }
    }

    initializeGrids() {
        for (var i = 0; i < this.$rows; i++) {
            this.$grid[i] = new Array(this.$columns);
            this.$nextGrid[i] = new Array(this.$columns);
        }
    }

    setupTableDiv() {
        var tableDiv = document.createElement('div');
        tableDiv.setAttribute('id', 'tableDiv');
    }

    setupGrid() {
        this.$tableDiv = document.createElement('div');

        var table = document.createElement('table');
        table.setAttribute('id', 'gameTable');

        for (var i = 0; i < this.$rows; i++) {
            var tr = document.createElement('tr');

            for (var j = 0; j < this.$columns; j++) {
                var cell = document.createElement('td');
                cell.setAttribute('id', i + '_' + j);
                cell.setAttribute('class', 'dead');
                cell.addEventListener('click', this.cellClickHandler.bind(this));
                tr.appendChild(cell);
            }
            table.appendChild(tr);
        }

        // this.shadowRoot.removeChild(this.$tableDiv);
        this.$tableDiv.appendChild(table);
        this.shadowRoot.appendChild(this.$tableDiv);
    }

    resetGrids() {
        for (var i = 0; i < this.$rows; i++) {
            for (var j = 0; j < this.$columns; j++) {
                this.$grid[i][j] = 0;
                this.$nextGrid[i][j] = 0;
            }
        }
    }

    resetNextGrid() {
        for (var i = 0; i < this.$rows; i++) {
            for (var j = 0; j < this.$columns; j++) {
                this.$nextGrid[i][j] = 0;
            }
        }
    }

    resetCells() {
        for (var i = 0; i < this.$rows; i++) {
            for (var j = 0; j < this.$columns; j++) {
                var cell = this.shadowRoot.getElementById(i + '_' + j);
                cell.setAttribute('class', 'dead');
            }
        }
    }

    copyAndResetGrid() {
        for (var i = 0; i < this.$rows; i++) {
            for (var j = 0; j < this.$columns; j++) {
                this.$grid[i][j] = this.$nextGrid[i][j];
                this.$nextGrid[i][j] = 0;
            }
        }
    }

    setupGameButtons() {
        var startButton = document.getElementById('start');
        startButton.onclick = this.startButtonHandler;

        var pauseButton = document.getElementById('pause');
        pauseButton.onclick = this.pauseButtonHandler;

        var clearButton = document.getElementById('clear');
        clearButton.onclick = this.clearButtonHandler;

        var randomizeButton = document.getElementById('randomize');
        randomizeButton.onclick = this.randomizeButtonHandler;

        var discoButton = document.getElementById('disco');
        discoButton.onclick = this.discoButtonHandler;

        var setSizeButton = document.getElementById('setSize');
        setSizeButton.onclick = this.setSizeButtonHandler;

        var loadlevelsButton = document.getElementById('loadLevels');
        loadlevelsButton.onclick = this.loadLevelButtonHandler;

        var modalLevelsButton = document.getElementById('modalButton');
        modalLevelsButton.onclick = this.modalLevelsButtonHandler;
    }

    modalLevelsButtonHandler() {
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName('close')[0];

        modal.style.display = 'block';

        span.onclick = function () {
            modal.style.display = 'none';
        };
    }

    startButtonHandler() {
        this.$gameIsAlive = true;

        this.startPlaying();
    }

    pauseButtonHandler() {
        this.$gameIsAlive = false;
    }

    clearButtonHandler() {
        if (this.$gameIsAlive) {
            return;
        }

        // this.$grid = new Array(this.$rows);
        // this.$nextGrid = new Array(this.$columns);
        // this.initializeGrids();

        // this.shadowRoot.removeChild(this.$tableDiv);
        // this.$tableDiv = document.createElement('div');
        // this.setupGrid();

        if (this.$discoModeActive) {
            this.discoButtonHandler();
        }

        this.resetGrids();
        this.resetCells();
        this.$countOfGenerations = 0;
        this.setGenerationLabel();
    }

    setSizeButtonHandler() {
        var height = document.getElementById('setHeight');
        var width = document.getElementById('setWidth');

        var color = height.style.backgroundColor;

        if (height.value < 10) {
            height.style.backgroundColor = '#CB4335';
            return;
        }

        height.style.backgroundColor = '#FFFFFF';

        if (width.value < 10) {
            width.style.backgroundColor = '#CB4335';
            return;
        }
        width.style.backgroundColor = color;

        if (height.value > 120 || width.value > 120) {
            width.style.backgroundColor = '#CB4335';
            return;
        }

        this.$rows = parseInt(height.value);
        this.$columns = parseInt(width.value);

        this.$grid = new Array(this.$rows);
        this.$nextGrid = new Array(this.$columns);
        this.initializeGrids();
        this.shadowRoot.removeChild(this.$tableDiv);
        this.$tableDiv = document.createElement('div');
        this.setupGrid();
        this.recalculateCellWidth();
    }

    loadLevelButtonHandler() {
        // validating
        var textArea = document.getElementById('levelArea');
        var arrayOfLines = textArea.value.split('\n');
        for (var i = 0; i < arrayOfLines.length; i++) {
            var value = parseInt(arrayOfLines[i]);

            if (Number.isNaN(value)) {
                textArea.style.backgroundColor = '#CB4335';
                textArea.title = 'Only use 1s and 0s to load a level!';
                return;
            }

            for (var h = 0; h < arrayOfLines[i].length; h++) {
                if (arrayOfLines[i][h] === '0' || arrayOfLines[i][h] === '1') {
                    continue;
                } else {
                    textArea.style.backgroundColor = '#CB4335';
                    textArea.title = 'Only use 1s and 0s to load a level!';
                    return;
                }
            }
        }

        // assigning
        var longest = 0;

        for (var l = 0; l < arrayOfLines.length; l++) {
            var length = parseInt(arrayOfLines[l].length);

            if (length > longest) {
                longest = length;
            }
        }

        if (longest < 10) {
            this.$columns = 10;
        }

        if (arrayOfLines.length < 10) {
            this.$rows = 10;
        }

        textArea.title = '';
        textArea.style.backgroundColor = '#FFFFFF';

        this.initializeGrids();
        this.shadowRoot.removeChild(this.$tableDiv);
        this.setupGrid();

        for (var k = 0; k < this.$rows; k++) {
            for (var j = 0; j < this.$columns; j++) {
                if (k >= arrayOfLines.length) {
                    this.$grid[k][j] = 0;
                    continue;
                }

                if (arrayOfLines[k][j] === '0' || j > arrayOfLines[k].length) {
                    this.$grid[k][j] = 0;
                } else if (arrayOfLines[k][j] === '1') {
                    this.$grid[k][j] = 1;
                }
            }
        }

        this.updateView();
        this.recalculateCellWidth();
    }

    discoButtonHandler() {
        if (this.$discoModeActive) {
            this.$discoModeActive = false;

            var discoButton = document.getElementById('disco');
            discoButton.style.backgroundColor = 'greenyellow';

            var tempTable = document.createElement('table');

            for (var i = 0; i < this.$rows; i++) {
                var tr = document.createElement('tr');

                for (var j = 0; j < this.$columns; j++) {
                    var cell = this.shadowRoot.getElementById(i + '_' + j);
                    var newCell = document.createElement('td');
                    newCell.setAttribute('id', i + '_' + j);

                    if (this.$grid[i][j] === 0) {
                        cell.setAttribute('class', 'dead');
                    } else if (this.$grid[i][j] === 1) {
                        cell.setAttribute('class', 'alive');
                    } else if (this.$grid[i][j] === 2) {
                        cell.setAttribute('class', 'wasAlive');
                    }

                    newCell.addEventListener('click', this.cellClickHandler.bind(this));
                    tr.appendChild(newCell);
                }

                tempTable.appendChild(tr);
            }

            this.shadowRoot.removeChild(this.$tableDiv);
            this.$tableDiv = document.createElement('div');
            this.$tableDiv.appendChild(tempTable);
            this.shadowRoot.appendChild(this.$tableDiv);

            this.updateView();
            this.recalculateCellWidth();
        } else {
            this.$discoModeActive = true;
            this.setRandomColorForDiscoButton();
        }
    }

    randomizeButtonHandler() {
        if (this.$gameIsAlive) {
            return;
        }

        this.clearButtonHandler();

        for (var i = 0; i < this.$rows; i++) {
            for (var j = 0; j < this.$columns; j++) {
                var isLive = Math.round(Math.random());
                if (isLive === 1) {
                    var cell = this.shadowRoot.getElementById(i + '_' + j);
                    cell.setAttribute('class', 'alive');
                    this.$grid[i][j] = 1;
                }
            }
        }

        this.$discoModeActive = false;
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setRandomColorForDiscoButton() {
        if (this.$discoModeActive) {
            var discoButton = document.getElementById('disco');
            discoButton.style.backgroundColor = this.getRandomColor();
            setTimeout(this.setRandomColorForDiscoButton, 500);
        }
    }

    static get observedAttributes() {
        return ['height', 'width'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    disconnectedCallback() {
        console.log('gol disconnected');
    }
}

window.customElements.define('cgol-pitch', CgolPitch);
