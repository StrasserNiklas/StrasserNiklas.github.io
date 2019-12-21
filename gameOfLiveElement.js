class CgolPitch extends HTMLElement {
    constructor() {
        super();

        this.modalLevelsButtonHandler = this.modalLevelsButtonHandler.bind(this);
        this.cellCl = this.cellClickHandler.bind(this);
        this.startButtonHandler = this.startButtonHandler.bind(this);
        this.pauseButtonHandler = this.pauseButtonHandler.bind(this);
        this.clearButtonHandler = this.clearButtonHandler.bind(this);
        this.randomizeButtonHandler = this.randomizeButtonHandler.bind(this);
        this.setRandomColorForDiscoButton = this.setRandomColorForDiscoButton.bind(this);
        this.discoButtonHandler = this.discoButtonHandler.bind(this);
        this.setSizeButtonHandler = this.setSizeButtonHandler.bind(this);
        this.startPlaying = this.startPlaying.bind(this);

        this.$rows = 25;// parseInt(this.getAttribute('height'));
        this.$columns = 60; // parseInt(this.getAttribute('width'));
        this.$countOfGenerations = 0;
        this.$changeInGeneration = false;
        this.$discoModeActive = false;
        this.$gameIsAlive = false;
        this.$grid = new Array(this.$rows);
        this.$nextGrid = new Array(this.$columns);

        this.$tableDiv = document.createElement('div');
        this.setGenerationLabel();

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
    width:100%;
    border-spacing: 1px;
  }

// td {
//     width: 10px;
//     height: 10px;
// }

.dead { 
    // float: left;
    background-color: lightgray;
    border: 0.5px solid black;
  } 

  .alive { 
    background-color:green;
    border: 0.5px solid black;
  } 

  .wasAlive {
    background-color:lightblue;
    border: 0.5px solid black;
  }

</style>
`;
    }

    connectedCallback() {
        this.setupGameButtons();
        this.initializeGrids();
        this.resetGrids();
        this.setupGrid();
        this.recalculateCellWidth();
    }

    setGenerationLabel() {
        var generationCountLabel = document.getElementById('generationLabel');
        generationCountLabel.textContent = this.$countOfGenerations;
    }

    recalculateCellWidth(e) {
        var windowWidth = window.innerWidth;
        var cellWidth = windowWidth / this.$columns;

        for (var i = 0; i < this.$rows; i++) {
            for (var j = 0; j < this.$columns; j++) {
                var cell = this.shadowRoot.getElementById(i + '_' + j);

                cell.width = cellWidth - 6;
                cell.height = cell.width;
            }
        }
    }

    startPlaying() {
        this.calculateNextGeneration();

        this.$countOfGenerations++;
        this.setGenerationLabel();

        if (this.$gameIsAlive) {
            setTimeout(this.startPlaying, 100);
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
        var table = document.createElement('table');

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

    discoMode() {
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

            var span = document.createElement('span');
            span.setAttribute('class', 'tooltiptext');
            span.textContent = 'Test';

            height.appendChild(span);
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

        this.$rows = parseInt(width.value);
        this.$columns = parseInt(height.value);

        this.$grid = new Array(this.$rows);
        this.$nextGrid = new Array(this.$columns);
        this.initializeGrids();

        this.shadowRoot.removeChild(this.$tableDiv);
        this.$tableDiv = document.createElement('div');
        this.setupGrid();
        this.recalculateCellWidth();
    }

    loadLevelButtonHandler() {
        var table = document.createElement('table');

        var textArea = document.getElementById('levelArea');
        var arrayOfLines = textArea.value.split('\n');
        for (var i = 0; i < arrayOfLines.length; i++) {
            var value = parseInt(arrayOfLines[i]);

            if (Number.isNaN(value)) {
                textArea.style.backgroundColor = '#CB4335';
                return;
            }
        }

        textArea.style.backgroundColor = '#FFFFFF';

        for (var k = 0; k < this.$rows; k++) {
            var tr = document.createElement('tr');

            for (var j = 0; j < this.$columns; j++) {
                var cell = document.createElement('td');
                cell.setAttribute('id', k + '_' + j);
                cell.setAttribute('class', 'dead');
                cell.addEventListener('click', this.cellClickHandler.bind(this));
                tr.appendChild(cell);
            }
            table.appendChild(tr);
        }

        this.shadowRoot.removeChild(this.$tableDiv);
        this.$tableDiv = document.createElement('div');
        this.setupGrid();
        this.recalculateCellWidth();

        this.$tableDiv.appendChild(table);

        this.shadowRoot.appendChild(this.$tableDiv);
    }

    discoButtonHandler() {
        if (this.$discoModeActive) {
            this.$discoModeActive = false;

            var discoButton = document.getElementById('disco');
            discoButton.style.backgroundColor = 'greenyellow';

            this.updateView();
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
