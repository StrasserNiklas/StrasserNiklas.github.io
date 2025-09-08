// Directly define the JSON data inside the script
const activities = [
  {
    "date": "Am 7. September 2025 um 06:36",
    "activity": "Kitzbüheler Radmarathon 2025",
    "link": "https://www.strava.com/activities/15729884869",
    "description": "Müllsack Edition, Einweg Lösung für Windweste🤝🥸🤓 - genauso wie das G‘fühl beim Aufs-Horn-Fahren🤝 🗑️ 🚮 \n9h22min offizielle Zeit mit Labestellen🤝🙂",
    "buddies": []
  },
  {
    "date": "Am 6. September 2025 um 17:31",
    "activity": "KRM Fahrerbesprechung🤓",
    "link": "https://www.strava.com/activities/15737055341",
    "description": "",
    "buddies": []
  },
  {
    "date": "6. September 2025",
    "activity": "Aufwärmen fürn KRM 🐐",
    "link": "https://www.strava.com/activities/15717767130",
    "description": "Mit Niggbert🤝🥸👍🏻",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "4. September 2025",
    "activity": "Kroatien🇭🇷: Tag 4 - Hit the Road again🫡",
    "link": "https://www.strava.com/activities/15691226408",
    "description": "Tag 3 - Radfrei🥸🤝🥸\nWieder mit Karen unterwegs, auf den Hinterlandstraßen👍🏻 Küstenhauptstraße immer wieder ein sekündliches Todeserlebnis bei 0 Überholabstand💀🫡",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 2. September 2025 um 06:44",
    "activity": "Kroatien🇭🇷: Tag 2 - Hit the G\\Roads 🪨",
    "link": "https://www.strava.com/activities/15667480099",
    "description": "Rund um den Vrana See. Teilweise grenzwertiger Gravel, eher MTB-like🤝🤓 ansonsten wurde fleißig das Glyphosat auf den Feldern verteilt 💀 🚜\nAbschluss noch mit Grüßen an die Truthahnfamilie 🦃",
    "buddies": []
  },
  {
    "date": "1. September 2025",
    "activity": "Kroatien🇭🇷: Tag 1 - Hit the road with Karen.",
    "link": "https://www.strava.com/activities/15656241134",
    "description": "Road Action mit den Gravels.",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 29. August 2025 um 09:37",
    "activity": "Die Mischung macht‘s🤝🤓",
    "link": "https://www.strava.com/activities/15625323557",
    "description": "Von Straße, Radweg, Trail und Skipiste heut alles dabei🫡🤝\nWind viel zu stark und ab KM50 kein Wasser mehr🙃🙂🙃🙂",
    "buddies": []
  },
  {
    "date": "28. August 2025",
    "activity": "Waschstraße is Pflicht🫡🤓",
    "link": "https://www.strava.com/activities/15618368291",
    "description": "Tandem-Flug mim Kollegen ✈️ \nGrüße gehen raus an:\nDen schnellsten Goldfisch im Glas Max Tretthann 🐟 \nDen Muscle-Man Steven Stefan Krajnik 💪🏻",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "27. August 2025",
    "activity": "Standard bleibt Standard👍🏻🤓",
    "link": "https://www.strava.com/activities/15606098582",
    "description": "Mit Karen✌🏻🫡",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 26. August 2025 um 16:47",
    "activity": "Comeback?!🥸",
    "link": "https://www.strava.com/activities/15594135191",
    "description": "Sommer: ✔️ 👏🏻 \nWinkler: ❌ 🙂",
    "buddies": []
  },
  {
    "date": "23. August 2025",
    "activity": "Telealkies goin‘ around Wilder Kaiser ⛰️",
    "link": "https://www.strava.com/activities/15559451455",
    "description": "Mit de Wachbirn in Tirol fetzen✌🏻",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 21. August 2025 um 09:45",
    "activity": "Ausnüchterung.",
    "link": "https://www.strava.com/activities/15533055179",
    "description": "Auf den Old-Ladies unterwegs.",
    "buddies": []
  },
  {
    "date": "20. August 2025",
    "activity": "Pre-Kitzbüüüühel 🐐",
    "link": "https://www.strava.com/activities/15520689694",
    "description": "Mit Karen und viel Frühverkehr 🚗",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 17. August 2025 um 16:16",
    "activity": "Like in the good old days.",
    "link": "https://www.strava.com/activities/15492672886",
    "description": "Mit‘m Flo aufs Waxeneck - herrlich nostalgisch🤓🤝 Flo mit ordentlich Druck am Pedal🫡",
    "buddies": []
  },
  {
    "date": "Am 16. August 2025 um 08:06",
    "activity": "Asphaltarbeit.",
    "link": "https://www.strava.com/activities/15475283964",
    "description": "Schlagartig in die Hitze gekommen - nicht ganz so wild wie gestern🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 15. August 2025 um 11:32",
    "activity": "Schwitzen statt sitzen💀",
    "link": "https://www.strava.com/activities/15466561018",
    "description": "Dank perfekter Mittagshitze waren wir maximal weit weg von einer strukturierten Fahrt🫡🤓",
    "buddies": []
  },
  {
    "date": "Am 15. August 2025 um 08:34",
    "activity": "Peilstein mit den Buben🤓",
    "link": "https://www.strava.com/activities/15464684270",
    "description": "Mit den Kollegaz auf an Spritzer aufn Peilstein 🍷",
    "buddies": []
  },
  {
    "date": "Am 13. August 2025 um 15:23",
    "activity": "Standard is Standard ✔️",
    "link": "https://www.strava.com/activities/15445880874",
    "description": "Heur Arbeit-Frühschluss um noch die volle Hitze zu erfahren🤝🤓",
    "buddies": []
  },
  {
    "date": "10. August 2025",
    "activity": "Vollzeit Karen🕰️",
    "link": "https://www.strava.com/activities/15406912982",
    "description": "Karin die operierten Füße zerschießen 💥🤝🤓",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 9. August 2025 um 09:25",
    "activity": "Teilzeit Karen 🤓✌🏻",
    "link": "https://www.strava.com/activities/15396554124",
    "description": "Karin heut in Teilzeit 🚲 . Warm am Schluss und viele Idioten auf da Straße🥸\nFitness gefühlt iwie nicht da…",
    "buddies": []
  },
  {
    "date": "Am 8. August 2025 um 17:36",
    "activity": "Paketbote 📦",
    "link": "https://www.strava.com/activities/15390107542",
    "description": "Am Heimweg noch schnell Paket gholt und vorm Automaten Gleichgewicht verloren🤓\nNoch ned ganz fit von der 🦷-Geschichte",
    "buddies": []
  },
  {
    "date": "Am 5. August 2025 um 17:52",
    "activity": "Snake!!!🐍",
    "link": "https://www.strava.com/activities/15355163332",
    "description": "Top Wetter🤝",
    "buddies": []
  },
  {
    "date": "Am 4. August 2025 um 18:50",
    "activity": "MyWhoosh - Z2",
    "link": "https://www.strava.com/activities/15343436478",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 2. August 2025 um 07:12",
    "activity": "Charterflug.",
    "link": "https://www.strava.com/activities/15316866948",
    "description": "Speed-Gravel ✈️. Perfektes Wetter❤️🥰\nViel Matsch allerdings auch am Start🤓",
    "buddies": []
  },
  {
    "date": "Am 30. Juli 2025 um 16:35",
    "activity": "Outdoor?! Was das nochmal?😲",
    "link": "https://www.strava.com/activities/15288818662",
    "description": "Wetter von super zu solala…aber kein Regen🤓👍🏻 3x im Mähdrescher Stau gestanden - Erntezeit wär🫡",
    "buddies": []
  },
  {
    "date": "Am 28. Juli 2025 um 18:32",
    "activity": "MyWhoosh - Endurance 8's",
    "link": "https://www.strava.com/activities/15265669977",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 27. Juli 2025 um 10:28",
    "activity": "MyWhoosh - Long Sprints #1",
    "link": "https://www.strava.com/activities/15250322965",
    "description": "Schweißproduktion reicht heut fürs Auffüllen vom Zicksee👍🏻🤓",
    "buddies": []
  },
  {
    "date": "Am 26. Juli 2025 um 10:34",
    "activity": "MyWhoosh - Depleting Session #1",
    "link": "https://www.strava.com/activities/15239740981",
    "description": "„Endlich wieder indoor“ - no one ever.",
    "buddies": []
  },
  {
    "date": "Am 25. Juli 2025 um 14:49",
    "activity": "Vor dem Regen ist vor dem Regen 🌧️",
    "link": "https://www.strava.com/activities/15232128030",
    "description": "Nass.",
    "buddies": []
  },
  {
    "date": "19. Juli 2025",
    "activity": "Frankreich 🇫🇷 | Tag 4: Alp d‘Huez",
    "link": "https://www.strava.com/activities/15165000128",
    "description": "Fetter Schüttregen - sau kalt bei der Abfahrt 🥶 Regen in Frankreich somit auch abgehakt🤝🤓 alles kapital aufgeweicht nachm Fahrn😂👍🏻\nNiki mit Tubeless Einsatz bei KM5🤝🤓\nLe Karen aka Karin Winkler hat sich schon in Alp d‘Huez einquartiert🤓😂",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "18. Juli 2025",
    "activity": "Frankreich 🇫🇷 | Tag 3: Col du Galibier & Col du Télégraph",
    "link": "https://www.strava.com/activities/15154739898",
    "description": "Wieder gut Höhenmeter gesammelt - der Körper passt sich langsam an die Seehöhe an🤝 Blick auf den Mont Blanc auch geil🥰🏔️\nSchluss mit „take it to the max“ downhill und krankem Geschwindigkeitsschnitt dank Zugpferd Nigglas🤝🫨😁",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "17. Juli 2025",
    "activity": "Frankreich 🇫🇷 | Tag 2: Col d'Izoard & Col Agnel (🇫🇷 - 🇮🇹 Grenze)",
    "link": "https://www.strava.com/activities/15145285362",
    "description": "Harter Tag - für Niklas Strasser eine lockere Fahrt🤝🤓 Höhemetertechnisch auf da unlockeren Seite heute💀\nTop Wetter und verhältnismäßig wenig Autos🤝❤️ \nBeim 2. Climb vom Col d'Izoard kurz nachgedacht, warum ich mir das antue🤝🤓",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "16. Juli 2025",
    "activity": "Frankreich 🇫🇷 | Tag 1: Col du Granon & Les Etieux",
    "link": "https://www.strava.com/activities/15135018600",
    "description": "„Einrollen“ mit paar guade Höhenmeter🤝🤓 Mal schauen was wird die Woche😶💀",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 13. Juli 2025 um 11:11",
    "activity": "Erholung needed.",
    "link": "https://www.strava.com/activities/15099038847",
    "description": "Schwierig heute🥸🤓",
    "buddies": []
  },
  {
    "date": "12. Juli 2025",
    "activity": "Schonwäsche 🧽🧺",
    "link": "https://www.strava.com/activities/15087964763",
    "description": "Kollege Nitsche mit Umfaller in den E-Zaun ⚡️ Mit viel Druck und dann noch nette Wäsche am Schluss 🌧️",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 11. Juli 2025 um 21:48",
    "activity": "Bum zua heim.",
    "link": "https://www.strava.com/activities/15082275496",
    "description": "Flotter Schnitt🤝🥸",
    "buddies": []
  },
  {
    "date": "11. Juli 2025",
    "activity": "Heute drehen wir richtig durch!",
    "link": "https://www.strava.com/activities/15081098663",
    "description": "Unterwegs mit wahnsinns Gruppe🤝🥰",
    "buddies": [
      "Stefan Krajnik",
      "David Reischer",
      "Max Tretthann"
    ]
  },
  {
    "date": "10. Juli 2025",
    "activity": "Zur Sicherheit Gummi drüber🤝🍌🍆👀",
    "link": "https://www.strava.com/activities/15070898476",
    "description": "Mit Nigglas Gravel pressen - am Schluss mit Tubeless Panne, aufgrund keiner Milch im Reifen -> Gummi rein🤝🥸\nSchluss noch mit Regen😶",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "6. Juli 2025",
    "activity": "Karen Comeback Fahrt🤝🥳",
    "link": "https://www.strava.com/activities/15026319229",
    "description": "Dinkels als Begleitfahrzeug 🤝🤓",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 6. Juli 2025 um 07:50",
    "activity": "Paradiesisch ☀️🏝️",
    "link": "https://www.strava.com/activities/15021740517",
    "description": "Perfektes Wetter und kein Wind🤝\nNüchtern Training (auch Alk-nüchtern, man mag es nicht glauben🤝🤓).",
    "buddies": []
  },
  {
    "date": "Am 5. Juli 2025 um 15:43",
    "activity": "Mähdrescher! 🚜",
    "link": "https://www.strava.com/activities/15015872119",
    "description": "Warm.",
    "buddies": []
  },
  {
    "date": "Am 4. Juli 2025 um 16:43",
    "activity": "Ihr Saunameister ist bereit zum Aufguss 🧖",
    "link": "https://www.strava.com/activities/15006287956",
    "description": "Windig heute aus allen Richtungen💀",
    "buddies": []
  },
  {
    "date": "Am 2. Juli 2025 um 18:11",
    "activity": "Remote Office Ritchinger 🧑🏻‍💻",
    "link": "https://www.strava.com/activities/14986786072",
    "description": "Mit‘m Erich durchs Gemüse pressen🤓🤝🤓",
    "buddies": []
  },
  {
    "date": "1. Juli 2025",
    "activity": "Gondelfahrt Nitsche 🚠",
    "link": "https://www.strava.com/activities/14975925837",
    "description": "Alles Gucci bei Prada 💰 \nKollege Nitsche mit neuen weißen Schuhen - supernice🤝\nKollege Winkler 2x mit fast blutigen Schuhen, wegen kapitalen Selbst-Fehleinschätzungen🤓\nAnsonsten noch solidarisch mim Kollegen auf da gleichen Minimal-Übersetzung aufn Berg👍🏻🤝🥸",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 28. Juni 2025 um 07:25",
    "activity": "Rückenwindexperte",
    "link": "https://www.strava.com/activities/14940027338",
    "description": "Gerne erstellen wir ein unverbindliches Angebot für eine Rückenwindfahrt🤝📄🥸\nWecker gestellt, für möglichst wenig Gegenwind und viel Rückenwind ⏰\nGeschenkübergabe Strasser inklusive 🥸",
    "buddies": []
  },
  {
    "date": "Am 27. Juni 2025 um 13:29",
    "activity": "Zeugnisvergabe📄",
    "link": "https://www.strava.com/activities/14931998544",
    "description": "Jahreszeugnis:\nUnfallvorbeugung: -5\nFreundlicher Umgang mit Autofahrern: -5\nLongrides: 2\nZ2-Fahrten: 3\n\nWindige Fahrt heute🤝💀",
    "buddies": []
  },
  {
    "date": "Am 24. Juni 2025 um 17:21",
    "activity": "Badeschluss!",
    "link": "https://www.strava.com/activities/14902496722",
    "description": "Standardrunde - angenehm trotz Wind🤝",
    "buddies": []
  },
  {
    "date": "21. Juni 2025",
    "activity": "Blackout 🆘",
    "link": "https://www.strava.com/activities/14873087920",
    "description": "Viel zu viel Alkohol während der Wanderung 🤓🤝🆘\nAuf die Dürre Wand mit den Kollegaz.",
    "buddies": [
      "Resa Kühmayer",
      "Niklas Strasser",
      "Anna Birbamer"
    ]
  },
  {
    "date": "19. Juni 2025",
    "activity": "Bullenexpress Sniggers 🐄",
    "link": "https://www.strava.com/activities/14849508789",
    "description": "Hoate Runde (für mich zumindest) - Sniggers mit 60km Frontarbeit für Dinkels🤝🤓 kleine Sightseeing Tour in da Arbeitsumgebung 👓\n+gefühlt durch alle Fronleichnamszüge von ganz NÖ gfahrn🤓👍🏻",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 15. Juni 2025 um 09:27",
    "activity": "32mm boys float like a boat 🛥️",
    "link": "https://www.strava.com/activities/14805408751",
    "description": "Mit Karins Rad unterwegs da das TCR-Wartungspause hat ☕️ \nKein Wind mal als geile Überraschung🫶🏻🤓",
    "buddies": []
  },
  {
    "date": "Am 13. Juni 2025 um 08:50",
    "activity": "Mullet is the way to go😎",
    "link": "https://www.strava.com/activities/14787133537",
    "description": "Tag 2 - wieder zurück🫡 Kollege mit neuem Hinterreifen, der ca. so schwer ist wie das Rad, dafür aber wie ein Panzer agiert - Vorne/Hinten Setup somit Profi-Like aufgebaut👍🏻🤓\nAnsonsten harte Hitzeschlacht ohne Patschn, dafür mit harten Steintrails🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 12. Juni 2025 um 10:25",
    "activity": "Auf Schiene 🚂",
    "link": "https://www.strava.com/activities/14778441942",
    "description": "Betriebsausflug mitm Arbeitskollegen Martin - unterwegs aufm harten Gravel der ehemaligen Bahnstrecke Parenzana 🇸🇮 🇮🇹 🇭🇷 \nKollege hat sich 2 Patschen eingfahrn und damit alle Ersatzschläuche an Tag 1 verbraucht🫡💀\nMäntel komplett zerf*ckt und bereit zum Tausch als Draufgabe🤝🤓\nAnsonsten mega geiler Gravel🥰🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 9. Juni 2025 um 11:03",
    "activity": "Ein Fest für Freunde des gatschigen Waldbodens 🌳",
    "link": "https://www.strava.com/activities/14742906212",
    "description": "Gatschig, am Schluss das Rad noch schnell abgeduscht 🚿",
    "buddies": []
  },
  {
    "date": "7. Juni 2025",
    "activity": "Kassasturz 💰",
    "link": "https://www.strava.com/activities/14721734508",
    "description": "Mitm Kollegen Nitsche aufs Waxeneck. ⛰️ Kleine Genusspause inklusive🤓👍🏻",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 6. Juni 2025 um 13:27",
    "activity": "Hot Gravel Aromatherapie 💆‍♂️",
    "link": "https://www.strava.com/activities/14714077472",
    "description": "Therapie eher fürn Kopf als für die Beine - knackige MTB-Anstiege dabei gehabt🤓",
    "buddies": []
  },
  {
    "date": "Am 4. Juni 2025 um 18:53",
    "activity": "Vollgas?!?!",
    "link": "https://www.strava.com/activities/14696673167",
    "description": "Aus Z2 wurde schnell mentale Gesundheitsrunde mit ordentlich Druckablass🤝🤓\nKOM im Lieblingssegment leider knapp verpasst - wir kommen wieder🤝🫡",
    "buddies": []
  },
  {
    "date": "Am 1. Juni 2025 um 09:45",
    "activity": "Unterwegs mit‘m Meister der Kettenabwürfe 🥍",
    "link": "https://www.strava.com/activities/14659629696",
    "description": "Ritchinger auf seinen ersten Trailerfahrungen🤝🤓\nTop Downhill Skills - da gibts Potential🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 31. Mai 2025 um 03:39",
    "activity": "Wieso? Weshalb? Warum? - Wer 300 fährt bleibt trotzdem dumm🤝🤓👍🏻",
    "link": "https://www.strava.com/activities/14652333761",
    "description": "2:50 Uhr Tagwache - dann von kalt bis fettem Nebel und guter Hitze alles dabei🤝💀 viele Hasen und Rehe gesehen - keins wurde verwurstet beim Wildwechsel🤝👍🏻\nZum 2. Mal in Bratislava die Woche 🇸🇰",
    "buddies": []
  },
  {
    "date": "29. Mai 2025",
    "activity": "Dinkels Werkstatt empfiehlt Reifen von Continental 🛞",
    "link": "https://www.strava.com/activities/14631251710",
    "description": "Mit Teilzeit-Sniggers und Vollzeit Juli über die Grenze 🤝🤓 🇸🇰 \nGrenzwertig harter Gegenwind ab Eisenstadt💀👍🏻 Tubeless dank fettem Dorn auch wieder im Einsatz🤓🤝",
    "buddies": [
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 27. Mai 2025 um 17:42",
    "activity": "Error 404. Dieselpartikelfilter not found 🚜",
    "link": "https://www.strava.com/activities/14612070401",
    "description": "Traktor hat mich schön eingerußt🤝🤓\nAnsonsten kommt das Vertrauen ins MTB zurück🤝",
    "buddies": []
  },
  {
    "date": "Am 25. Mai 2025 um 10:41",
    "activity": "Gönnen Sie Ihrem HR-Sensor doch mal Urlaub 🧳",
    "link": "https://www.strava.com/activities/14589682079",
    "description": "HR-Sensor schon bei KM 0,01 in Oasch gangen🤝🤓 restliche Fahrt zügig, Schluss mit Dauergegenwind nur zach 💨",
    "buddies": []
  },
  {
    "date": "24. Mai 2025",
    "activity": "Zone 2 gefährdet Ihre Gesundheit💀",
    "link": "https://www.strava.com/activities/14579528936",
    "description": "Mostly Z2 -> am Anfang resultierte das in einer mittleren Depression 😶😬🙃\nSpäter besseres Wetter🤝🤓\nMit Niki den Hafnerberg auschecken ⛰️",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 22. Mai 2025 um 18:02",
    "activity": "Firmenlauf Neufeld 🌧️",
    "link": "https://www.strava.com/activities/14562142166",
    "description": "Nass is es.",
    "buddies": []
  },
  {
    "date": "Am 20. Mai 2025 um 17:43",
    "activity": "Insektenschutzgitter needed 🐞",
    "link": "https://www.strava.com/activities/14541495110",
    "description": "Viele Insekten unterwegs. Allerdings noch massiv dümmere Leute unterwegs, dass die Insekten schon eine Genugtuung waren🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 19. Mai 2025 um 17:48",
    "activity": "Ich balllllaaallla Löcher in den Wald🤝🌿🌳",
    "link": "https://www.strava.com/activities/14530631087",
    "description": "Mein Beitrag zum ESC 🎤 🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 17. Mai 2025 um 09:00",
    "activity": "Hocheck.",
    "link": "https://www.strava.com/activities/14505813155",
    "description": "Ohne Local Legend Karin, aber mit Legenden-Feuersalamander🦎\nVon Wind, Regen, Sonne und Graupel alles dabei🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 14. Mai 2025 um 17:11",
    "activity": "Aus Frust einfach nur mal drücken🤓🤝",
    "link": "https://www.strava.com/activities/14479451223",
    "description": "Wetter top🤝 auch am Gravel nun Wachs - endlich keine ÖL-Staub-Klumpen mehr🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 11. Mai 2025 um 10:09",
    "activity": "Beware of dog 🐶",
    "link": "https://www.strava.com/activities/14443831216",
    "description": "Beine müde.",
    "buddies": []
  },
  {
    "date": "10. Mai 2025",
    "activity": "In my wax era 🐝",
    "link": "https://www.strava.com/activities/14436764618",
    "description": "Kette clean & schnell mit Wachs - super geil🤝\nMit‘m Kollegen Nitsche guad druckt🤓🫡",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 9. Mai 2025 um 17:13",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/14426693875",
    "description": "Tempospiel.\nGarmin bis zum Schluss kein gutes GPS Signal🫶🏻💀",
    "buddies": []
  },
  {
    "date": "Am 7. Mai 2025 um 16:56",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/14406373482",
    "description": "",
    "buddies": []
  },
  {
    "date": "3. Mai 2025",
    "activity": "Grillstation Strasser&Tretthann 🔥",
    "link": "https://www.strava.com/activities/14363604596",
    "description": "Einmal gegrillt werden bitte bei höchsten Mai-Temperaturen🤝💀🤓\nTempo wieder auf da sportlichen Seite heute👍🏻🫡",
    "buddies": [
      "Max Tretthann",
      "Niklas Strasser"
    ]
  },
  {
    "date": "1. Mai 2025",
    "activity": "Gloryhole 💀",
    "link": "https://www.strava.com/activities/14344241795",
    "description": "Martin & Julian testen das Eisenstädter Natur-Gloryhole🤓🤝\nSonst guade Presserpartie mit da Kollegin Birbamer und den 4 anderen Kollegaz.\nNiki pumpt den Jam 🍓🍇",
    "buddies": [
      "Niklas Strasser",
      "Lukas Pulling",
      "Martin Nitsche",
      "Julian Wenzel",
      "Anna Birbamer"
    ]
  },
  {
    "date": "Am 30. April 2025 um 18:06",
    "activity": "Zehn zahme Ziegen zogen zehn Zentner Zucker zum Zoo.",
    "link": "https://www.strava.com/activities/14334633079",
    "description": "Titel hat nichts mit der Fahrt zu tun und is wohl spannender als die Fahrt selbst 🤓🤓",
    "buddies": []
  },
  {
    "date": "29. April 2025",
    "activity": "In se Maibaum traffic 🚜 🌲 🚜",
    "link": "https://www.strava.com/activities/14325136109",
    "description": "Direkt vor Ort wie’s in Maibaum ausm Wald zaht haben😂 Mit die guaden Kollegen unterwegs👍🏻😁\nWetter top👍🏻🔥",
    "buddies": [
      "Julian Wenzel",
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 27. April 2025 um 09:34",
    "activity": "Zuckerschock.",
    "link": "https://www.strava.com/activities/14299809524",
    "description": "Niklas Strasser seine selfmade-Gels probiert - sind geil, aber Zuckerschock incomming. \nProduktverbesserung auch bei der Verpackung erforderlich - nach dem Aufreißen und verteilen über den Lenker war zumindest ein Abrutschen nimmer möglich👍🏻🤓\nJagasitz climb heut komplett",
    "buddies": []
  },
  {
    "date": "Am 26. April 2025 um 10:10",
    "activity": "UNO Reverse 🃏",
    "link": "https://www.strava.com/activities/14289390132",
    "description": "Muddy hell today - Standardrunde heute verkehrt wegen Wind🤓",
    "buddies": []
  },
  {
    "date": "21. April 2025",
    "activity": "Mit Captain Cook und Captain Blaubär die Donau entlang ⛴️",
    "link": "https://www.strava.com/activities/14242698038",
    "description": "Captain Cook mit 11 Stück Corny Riegel am Start und Captain Blaubär mit bald Diabetes Typ 2, aufgrund der selbst gebastelten Zuckergels 💉🍬\nErich brav druckt auf seinem ersten 200er🫡🫡🫡",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 20. April 2025 um 09:35",
    "activity": "Beat the Osterhase 🐰 🥚",
    "link": "https://www.strava.com/activities/14230041401",
    "description": "Vorm Osterhasen unterwegs -> keine Eier gefunden🤓😶🤝🥚🥚",
    "buddies": []
  },
  {
    "date": "19. April 2025",
    "activity": "Die 4 Ratschn Buam 🔊",
    "link": "https://www.strava.com/activities/14221674442",
    "description": "Martin wieder das Radfahrn beibringen🤓🤝 mit den Kollegen Niki, Erich und Martin im Wind unterwegs😅",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 18. April 2025 um 17:41",
    "activity": "ROUVY - Grundlage 45‘",
    "link": "https://www.strava.com/activities/14214865613",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 13. April 2025 um 11:48",
    "activity": "Schraubenprüfung nach ISO 3800🔩",
    "link": "https://www.strava.com/activities/14164034383",
    "description": "Erstes Mal am MTB seit der OP - Schraube hält, Fahrtechnik noch so lala🤓👍🏻",
    "buddies": []
  },
  {
    "date": "Am 12. April 2025 um 14:29",
    "activity": "KOM Hunter Starter Paket 🤓",
    "link": "https://www.strava.com/activities/14157355271",
    "description": "Mit den beiden Erichs unterwegs. Sehr angenehmes Wetter🤝🥳\nKollegin Einberger wird daweil durch die Gassn geschoben😂👍🏻",
    "buddies": []
  },
  {
    "date": "Am 11. April 2025 um 09:16",
    "activity": "ROUVY - Fat Max | Level Up",
    "link": "https://www.strava.com/activities/14143567041",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. April 2025 um 19:13",
    "activity": "ROUVY - Wellness Workout",
    "link": "https://www.strava.com/activities/14139000214",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 9. April 2025 um 17:38",
    "activity": "ROUVY - Taper Time | Block 3: Half-Distance Triathlon",
    "link": "https://www.strava.com/activities/14128334320",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 8. April 2025 um 19:04",
    "activity": "ROUVY - Matteo's HIIT Lite | Matteo Jorgenson's favourite",
    "link": "https://www.strava.com/activities/14118951463",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 6. April 2025 um 09:33",
    "activity": "Vertretungsspaziergang Karin🤝",
    "link": "https://www.strava.com/activities/14094053555",
    "description": "",
    "buddies": []
  },
  {
    "date": "5. April 2025",
    "activity": "Breaking Bad oder Baking Bread? 🧪 🍞",
    "link": "https://www.strava.com/activities/14086464179",
    "description": "Niki mit Labor-Maurten Gel Selbproduktion 🥼 🧫 \nRobin mit Time-Travel von den 80er nach 2025 mit neuem Rad 🚲.\nAnsonsten windige VeloRun Strecke🤝💀\nNiki mit geliehenem Helm und Brille weil Bumzua🤓🫶🏻",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "4. April 2025",
    "activity": "Julian VCM Vorbereitung🤝",
    "link": "https://www.strava.com/activities/14079324100",
    "description": "Noch schnell in Julian vorm VCM ermüden🤓🤝",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 3. April 2025 um 19:05",
    "activity": "Evening Row",
    "link": "https://www.strava.com/activities/14070674878",
    "description": "",
    "buddies": []
  },
  {
    "date": "30. März 2025",
    "activity": "3h Restfettn abbüßen mit Niiiiigggglas🤓",
    "link": "https://www.strava.com/activities/14030931006",
    "description": "Mit gaaaaanz viiiiel Gegenwind💀🫶🏻\nKarin Winkler danke für die Rennradleihgabe🤝",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 29. März 2025 um 13:06",
    "activity": "ROUVY - Endurance Ramp |Block 1: Half-Distance Triathlon",
    "link": "https://www.strava.com/activities/14019685030",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. März 2025 um 08:40",
    "activity": "ROUVY - Rolling hills | Improve your Endurance with Liv",
    "link": "https://www.strava.com/activities/13960651610",
    "description": "",
    "buddies": []
  },
  {
    "date": "22. März 2025",
    "activity": "📞 Einmal das Standard Seeumrundungsmenü bitte 🙏🏻 🍟",
    "link": "https://www.strava.com/activities/13954910026",
    "description": "Mit extra Portion Karen heute🤝🤓\nWind tw. schirch anstrengend 💨",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 21. März 2025 um 14:15",
    "activity": "50KM. Das „K“ in KM steht für Karen.",
    "link": "https://www.strava.com/activities/13945831468",
    "description": "Karen noch schnell beim Spazieren dawischt - sonst viele riskante Autofahrer🫠",
    "buddies": []
  },
  {
    "date": "Am 18. März 2025 um 18:46",
    "activity": "Evening Row",
    "link": "https://www.strava.com/activities/13919084239",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 16. März 2025 um 08:48",
    "activity": "ROUVY - Mountain Momentum | Block 1: Half-Distance Triathlon",
    "link": "https://www.strava.com/activities/13895204492",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 15. März 2025 um 09:50",
    "activity": "ROUVY - Aufbau",
    "link": "https://www.strava.com/activities/13886538271",
    "description": "Schnell noch Grundlage fetzen vor da Familienfeier.\nKarin Winkler als Muscle Woman",
    "buddies": []
  },
  {
    "date": "Am 14. März 2025 um 16:17",
    "activity": "G\\Roads mit‘m Ritchinger🤝🤓",
    "link": "https://www.strava.com/activities/13882224458",
    "description": "Erste Gravel Ausfahrt vom/mit Erich.\nGleich mal gscheid dahingfetzt👍🏻",
    "buddies": []
  },
  {
    "date": "Am 13. März 2025 um 07:17",
    "activity": "ROUVY - Power Transfer | Fat Burner",
    "link": "https://www.strava.com/activities/13868179574",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 13. März 2025 um 07:04",
    "activity": "Rouvy - am falschen Account gestartet🙃",
    "link": "https://www.strava.com/activities/13868055928",
    "description": "Manueller Übertrag,",
    "buddies": []
  },
  {
    "date": "Am 11. März 2025 um 07:15",
    "activity": "Morning Run",
    "link": "https://www.strava.com/activities/13849145169",
    "description": "Burgenland V2 - heute in die andere Richtung 🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 10. März 2025 um 07:07",
    "activity": "Morning Run",
    "link": "https://www.strava.com/activities/13839942681",
    "description": "Burgenland-Edition",
    "buddies": []
  },
  {
    "date": "8. März 2025",
    "activity": "Road Rage Advanced 🤜🏻",
    "link": "https://www.strava.com/activities/13823077027",
    "description": "In Baden von einem 100-Jährigen fast zamgschoben worden im Kreisverkehr -> Den hamma zamgschrien🤝💀\nSonst mit den Boois und Giiirlz im Gegenwind 💨",
    "buddies": [
      "Niklas Strasser",
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 7. März 2025 um 13:16",
    "activity": "The future is now 💡",
    "link": "https://www.strava.com/activities/13814967155",
    "description": "Erstes Mal am Gravel seitm Sturz - gleich mal Probefahrt vom 1by E-Schaltung Umbau🤝🤓\nEindeutig approved🤝\nSchotter-Kurven sind noch a mentales Problem haha.",
    "buddies": []
  },
  {
    "date": "Am 5. März 2025 um 16:55",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/13797407895",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 4. März 2025 um 17:51",
    "activity": "ROUVY - Fat Max | Level Up",
    "link": "https://www.strava.com/activities/13788519220",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 3. März 2025 um 18:22",
    "activity": "ROUVY - Spin-Ups | Simon Yates's favourite",
    "link": "https://www.strava.com/activities/13779458127",
    "description": "Motivation heut als großes Problem🫠",
    "buddies": []
  },
  {
    "date": "1. März 2025",
    "activity": "Comeback on the road mit den sweeties🥰",
    "link": "https://www.strava.com/activities/13756890511",
    "description": "Erstes mal im echten Leben unterwegs nachm Sturz - in bester Begleitung 🤝🤓",
    "buddies": [
      "Niklas Strasser",
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 28. Februar 2025 um 14:13",
    "activity": "Wiedereinstieg Laufen.",
    "link": "https://www.strava.com/activities/13750368831",
    "description": "Erster km ned gezählt weil Garmin-Trash GPS Signal🙃",
    "buddies": []
  },
  {
    "date": "Am 27. Februar 2025 um 05:47",
    "activity": "ROUVY - Steady Ride 2 | Serious FTP Builder",
    "link": "https://www.strava.com/activities/13738539449",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 26. Februar 2025 um 05:47",
    "activity": "ROUVY - Pace to Perfection Lite | Steven Kruijswijk's favourite",
    "link": "https://www.strava.com/activities/13729367096",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 25. Februar 2025 um 17:40",
    "activity": "Aufbau Oberkörper",
    "link": "https://www.strava.com/activities/13724337391",
    "description": "1. Mal rudern nach bisher leichteren Physio-Übungen👍🏻",
    "buddies": []
  },
  {
    "date": "Am 25. Februar 2025 um 05:45",
    "activity": "ROUVY - Deep Breath Lite | Sepp Kuss's Favourite",
    "link": "https://www.strava.com/activities/13719731437",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 19. Februar 2025 um 18:27",
    "activity": "ROUVY - Fat Be Gone | Fat Burner",
    "link": "https://www.strava.com/activities/13671631370",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 17. Februar 2025 um 19:06",
    "activity": "ROUVY - Lactate Threshold Lite | Mads Pedersen's favourite",
    "link": "https://www.strava.com/activities/13653493478",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 16. Februar 2025 um 09:21",
    "activity": "ROUVY - Steady Ride 3 | Serious FTP Builder",
    "link": "https://www.strava.com/activities/13639663789",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 15. Februar 2025 um 08:51",
    "activity": "ROUVY - Brick Builder l Block 2: Half-Distance Triathlon",
    "link": "https://www.strava.com/activities/13630664289",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 13. Februar 2025 um 19:13",
    "activity": "ROUVY - Strength Meets Speed | Fat Burner",
    "link": "https://www.strava.com/activities/13619163041",
    "description": "",
    "buddies": []
  },
  {
    "date": "9. Februar 2025",
    "activity": "Afternoon Walk",
    "link": "https://www.strava.com/activities/13583603423",
    "description": "",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 9. Februar 2025 um 09:23",
    "activity": "ROUVY - NIT Session | TT's plan",
    "link": "https://www.strava.com/activities/13579167999",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 8. Februar 2025 um 09:14",
    "activity": "ROUVY - Pace to Perfection Lite | Steven Kruijswijk's favourite",
    "link": "https://www.strava.com/activities/13569940712",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 7. Februar 2025 um 12:41",
    "activity": "ROUVY - Short & Sweet Endurance | Fat Burner",
    "link": "https://www.strava.com/activities/13563412847",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 7. Februar 2025 um 12:24",
    "activity": "FTP-Test Ramp",
    "link": "https://www.strava.com/activities/13563228452",
    "description": "240W FTP, -32W nach 5 Monate Verletzungspause.\nSchlimmeres erwartet, besseres erhofft👍🏻😂",
    "buddies": []
  },
  {
    "date": "Am 6. Februar 2025 um 18:49",
    "activity": "ROUVY - Aufbau",
    "link": "https://www.strava.com/activities/13557952266",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 4. Februar 2025 um 18:12",
    "activity": "ROUVY - Aufbau Malle Edition",
    "link": "https://www.strava.com/activities/13539197599",
    "description": "Heut mal virtuell ins militärische Sperrgebiet 🚫 \nMalle2024 Crew remembers.\nStefan Krajnik Max Tretthann Julian Wenzel",
    "buddies": []
  },
  {
    "date": "Am 3. Februar 2025 um 18:44",
    "activity": "ROUVY - Aufbau",
    "link": "https://www.strava.com/activities/13530317785",
    "description": "",
    "buddies": []
  },
  {
    "date": "2. Februar 2025",
    "activity": "Hocheck ⛰️",
    "link": "https://www.strava.com/activities/13516535157",
    "description": "Mit Karen, Eis und Nebel 🤓",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 1. Februar 2025 um 09:29",
    "activity": "ROUVY - Aufbau - Long",
    "link": "https://www.strava.com/activities/13507959970",
    "description": "Z2 it is.",
    "buddies": []
  },
  {
    "date": "Am 28. Januar 2025 um 17:58",
    "activity": "ROUVY - Aufbau",
    "link": "https://www.strava.com/activities/13476185983",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 27. Januar 2025 um 18:48",
    "activity": "ROUVY - Aufbau 2",
    "link": "https://www.strava.com/activities/13467735938",
    "description": "Back in town kids. Ellenbogen schmerzt noch beim Abstützen🫠🤫",
    "buddies": []
  },
  {
    "date": "25. Januar 2025",
    "activity": "Take your dog for a walk 🚶‍♀️",
    "link": "https://www.strava.com/activities/13447382110",
    "description": "Hund hamm‘ma ned, also zah ma die Karin mit🤓👍🏻🤝\nÜbers weiße Kreuz aufn Geyersattel😀",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 19. Januar 2025 um 14:30",
    "activity": "Comeback low level.",
    "link": "https://www.strava.com/activities/13397774946",
    "description": "Mitm Haxntaxi unterwegs.",
    "buddies": []
  },
  {
    "date": "Am 14. Dezember 2024 um 10:08",
    "activity": "Auf ins Krankenhaus.",
    "link": "https://www.strava.com/activities/13113337451",
    "description": "Gröberer Sturz. Details folgen🤓 Sturzgeschehen ist ca. Bild 1 zu entnehmen. Ast:1 - Christoph:0\nNachtrag: die linke Elle ist durch 🦴- OP am 19.12 fixiert🤓👍🏻",
    "buddies": []
  },
  {
    "date": "Am 13. Dezember 2024 um 05:31",
    "activity": "ROUVY - Aufbau „Frühedition“",
    "link": "https://www.strava.com/activities/13104587786",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 11. Dezember 2024 um 19:10",
    "activity": "ROUVY - Aufbau",
    "link": "https://www.strava.com/activities/13095081332",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. Dezember 2024 um 18:05",
    "activity": "ROUVY - Aufbau",
    "link": "https://www.strava.com/activities/13087562555",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 6. Dezember 2024 um 06:13",
    "activity": "ROUVY - Fat burner 1 | Start Easy",
    "link": "https://www.strava.com/activities/13056554210",
    "description": "Bissl steigern.",
    "buddies": []
  },
  {
    "date": "Am 4. Dezember 2024 um 17:12",
    "activity": "ROUVY - Aufbau 2",
    "link": "https://www.strava.com/activities/13046321541",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 3. Dezember 2024 um 18:36",
    "activity": "ROUVY - Aufbau 2",
    "link": "https://www.strava.com/activities/13039394498",
    "description": "Stufensteigerung.",
    "buddies": []
  },
  {
    "date": "1. Dezember 2024",
    "activity": "Drahra mit Karen „Winderedition“ ⛄️",
    "link": "https://www.strava.com/activities/13022224984",
    "description": "Schön kalt, aber windstill🤝",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 30. November 2024 um 09:54",
    "activity": "Back Outside 🥶",
    "link": "https://www.strava.com/activities/13014570109",
    "description": "Mit neuen (Winter-)Schuhen und neuen Mänteln👍🏻\nGegenwindgame auch strong.",
    "buddies": []
  },
  {
    "date": "Am 28. November 2024 um 17:06",
    "activity": "ROUVY - Aufbau 2",
    "link": "https://www.strava.com/activities/13003333308",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 27. November 2024 um 18:58",
    "activity": "ROUVY - Aufbau 2",
    "link": "https://www.strava.com/activities/12996801825",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 25. November 2024 um 18:14",
    "activity": "ROUVY - Aufbau",
    "link": "https://www.strava.com/activities/12981469617",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 24. November 2024 um 10:32",
    "activity": "Aufbautraining.",
    "link": "https://www.strava.com/activities/12970982493",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. November 2024 um 11:23",
    "activity": "It ain't much but it's honest work.",
    "link": "https://www.strava.com/activities/12964007583",
    "description": "Comeback. Physio.",
    "buddies": []
  },
  {
    "date": "Am 11. Oktober 2024 um 11:34",
    "activity": "Freitagsklassiker - Auto holen👍🏻😶",
    "link": "https://www.strava.com/activities/12628038875",
    "description": "Auto aus Baden holen, dass ma es morgen ned restfett holen muss🤝🤓\nNette Gravelausfahrt🤝\nMit Radschuhe Autofahren mal wieder kriminell 👴🏻",
    "buddies": []
  },
  {
    "date": "Am 9. Oktober 2024 um 16:53",
    "activity": "Mit Verlaub! 🍂",
    "link": "https://www.strava.com/activities/12614827508",
    "description": "Kalt/Warm Klassiker🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 7. Oktober 2024 um 19:22",
    "activity": "ROUVY - Attack Mode | Increase your FTP with Lidl-Trek",
    "link": "https://www.strava.com/activities/12599563315",
    "description": "",
    "buddies": []
  },
  {
    "date": "5. Oktober 2024",
    "activity": "Unterwegs mit Richard Mille🤓🤝",
    "link": "https://www.strava.com/activities/12579561982",
    "description": "Unterwegs mit Ritchinger und den beiden Buben🤝🤓 Abschluss mit Bier🙌🏻🙆🏻",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 4. Oktober 2024 um 17:55",
    "activity": "Bernhard Imhof Style 👴🏻",
    "link": "https://www.strava.com/activities/12573999215",
    "description": "Hallo Herr Imhof!\nKann ich so Radfahren gehen in diesem Alter?\nBeste Grüße!\n\nBMW von da Werkstatt geholt🤝",
    "buddies": []
  },
  {
    "date": "Am 1. Oktober 2024 um 19:36",
    "activity": "ROUVY - Stress Release",
    "link": "https://www.strava.com/activities/12550383774",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 29. September 2024 um 12:52",
    "activity": "ROUVY - 15 Minute Cooldown",
    "link": "https://www.strava.com/activities/12531157901",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 29. September 2024 um 11:51",
    "activity": "ROUVY - Active Recovery 1",
    "link": "https://www.strava.com/activities/12530963143",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 28. September 2024 um 07:38",
    "activity": "Sun stopped working ❌☀️❌",
    "link": "https://www.strava.com/activities/12523209781",
    "description": "Ohne Sonne, dafür mit viel Karma 🫶🏻\nGefährliches Überholmanöver wurde durch die wachsame Polizei im Gegenverkehr erkannt und da Kollege is rausgefischt geworden❤️🤝👮🏻‍♂️ \nAnsonsten ab Neunkirchen nur mehr im Gegenwind🤓😬",
    "buddies": []
  },
  {
    "date": "Am 27. September 2024 um 14:45",
    "activity": "ROUVY - Basic Endurance 1h",
    "link": "https://www.strava.com/activities/12515948927",
    "description": "Zu grauslich draußen😶💨",
    "buddies": []
  },
  {
    "date": "Am 26. September 2024 um 18:57",
    "activity": "Indoor #1🤓🤝",
    "link": "https://www.strava.com/activities/12510206985",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 22. September 2024 um 13:08",
    "activity": "Fall season = best MTB season 🍂",
    "link": "https://www.strava.com/activities/12475233629",
    "description": "Standard MTB Strecke - runter gleich wie rauf aufgrund vieler Wanderer🤝🙂🫠",
    "buddies": []
  },
  {
    "date": "Am 21. September 2024 um 10:46",
    "activity": "Wind aus allen Richtungen 💨",
    "link": "https://www.strava.com/activities/12465668581",
    "description": "Konstant, am Schluss mit mehr Druck🤝",
    "buddies": []
  },
  {
    "date": "Am 20. September 2024 um 09:44",
    "activity": "Temperatur-Roulette🃏🎰🎲",
    "link": "https://www.strava.com/activities/12457811466",
    "description": "Von ultra-frisch bis Hochsommer alles dabei🤝🤓",
    "buddies": []
  },
  {
    "date": "19. September 2024",
    "activity": "Y(MCA)🕺🏻",
    "link": "https://www.strava.com/activities/12450762542",
    "description": "Further Y mit Karen der Presserin🔥\nKarin erstes Mal am neuen (gebrauchten) eigenen Rennrad am Start🤝🤓",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 18. September 2024 um 08:56",
    "activity": "Energiesparen 🔋",
    "link": "https://www.strava.com/activities/12439960442",
    "description": "Aufgrund fast leeren Schaltakkus sehr schaltfaul unterwegs gewesen🫶🏻🤓",
    "buddies": []
  },
  {
    "date": "Am 11. September 2024 um 07:00",
    "activity": "Auf ins Hinterland! 🇭🇷",
    "link": "https://www.strava.com/activities/12381099268",
    "description": "Speedgravelstrecke gefunden - dieses mal top🫶🏻 Und noch zu früh für alle Radfahr-Bremser👴🏻👵🏻",
    "buddies": []
  },
  {
    "date": "10. September 2024",
    "activity": "Verschissene Scheiße 🫶🏻",
    "link": "https://www.strava.com/activities/12372420117",
    "description": "Auf offiziellen „Radwegen“ unterwegs, die beschissener in Stand sind als Single-Trails nach Unwettern🤓🤝\nKarin hat brav alles durchzogen, obwohl Schaltauge massiv fremdverformt wurde😶",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "7. September 2024",
    "activity": "Seniorenausgang 👵🏻 👴🏻",
    "link": "https://www.strava.com/activities/12347560676",
    "description": "Senioren überall unterwegs, 2x verwunderlich dass wir ned zamgfahen worden sind🤝🤓\nAufn Mariahilfberg mit Presserin Karen🙃👍🏻",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 6. September 2024 um 15:40",
    "activity": "Weinernte 🍷",
    "link": "https://www.strava.com/activities/12341650749",
    "description": "Fast von einer Traubenerntemaschine 🚜 mit 80 Jahre altem Lenker 👴🏻 zam‘gschnitzt geworden💀😶",
    "buddies": []
  },
  {
    "date": "Am 5. September 2024 um 17:10",
    "activity": "STRG + C \\ STRG + V 💻",
    "link": "https://www.strava.com/activities/12334019936",
    "description": "Aufgrund Ideenlosigkeit das Gleiche wie gestern🤓👍🏻",
    "buddies": []
  },
  {
    "date": "Am 4. September 2024 um 17:54",
    "activity": "Animal(s) crossing 🦌🦌🦌",
    "link": "https://www.strava.com/activities/12325923547",
    "description": "Wenig los und viele Rehe🫶🏻\nGravelspeeeeed is real🙃🔥\nGroßau Gravel Climb 3. Platz leider durch 2 Senioren geblockt🫠🫠🫠",
    "buddies": []
  },
  {
    "date": "1. September 2024",
    "activity": "Unter Volllast🤝😶",
    "link": "https://www.strava.com/activities/12295675020",
    "description": "Unterwegs mit der oiden Volllast-Schalterin Karen und 32mm-Rennradreifen für mehr Speed beim Gravelbike💨",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 31. August 2024 um 08:20",
    "activity": "Für Ihr leibliches Wohl is gesorgt 🥣 🍺",
    "link": "https://www.strava.com/activities/12288449027",
    "description": "Gran Fondo Zahra mim Kollegen👍🏻🤓\nHaselrast in die Ausfahrt der FF Parndorf gekommen 🚒 - gleich mal bei ihrer Pausenstation verköstigt geworden🫶🏻🔥\nAbfahrt Hals komplett comitted - Auto oben überholt und bis Pernitz durchhalten können - HR als Grenzgänger🤓🙃",
    "buddies": []
  },
  {
    "date": "30. August 2024",
    "activity": "Prüftag 👨‍🏫 🚲 ✈️",
    "link": "https://www.strava.com/activities/12282267977",
    "description": "Prüftag der Sturzpiloten ✈️ 👨‍✈️ \nKollege Nitsche mit 1+ bestanden🤝🤓\nApotheke 3min vor Schluss noch gekapert 🏴‍☠️",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 28. August 2024 um 17:46",
    "activity": "Die Presserbua‘m 💨",
    "link": "https://www.strava.com/activities/12266161437",
    "description": "Mitm Kollegen Wenzel auf schneller Fahrt🤓🫡🤝 \nAbschluss wieder mit Bier👍🏻😶",
    "buddies": []
  },
  {
    "date": "25. August 2024",
    "activity": "Tick, Trick und Track 🦆",
    "link": "https://www.strava.com/activities/12237340612",
    "description": "Mit den Buben unterwegs🤝\nUmfaller/Sturz beim Stehenbleiben inklusive 🤓💀\nKleine Donau-Fußbad-Session inklusive🙌🏻 Kebap am Schluss auch am Start🫡",
    "buddies": [
      "Martin Nitsche",
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 25. August 2024 um 06:00",
    "activity": "Mutter der Mann mit dem Gebäck ist da. 🥖",
    "link": "https://www.strava.com/activities/12234987487",
    "description": "Anreise zum Kollegen Nitsche.",
    "buddies": []
  },
  {
    "date": "24. August 2024",
    "activity": "Forscherexpress 👨‍🏫",
    "link": "https://www.strava.com/activities/12227516357",
    "description": "Ausforschen ob die Karin noch zum Roadie wird🤝🤓 hat super geklappt😁👍🏻",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 23. August 2024 um 14:21",
    "activity": "Boiled Egg 🍳 🥚",
    "link": "https://www.strava.com/activities/12223439909",
    "description": "Dank der Hitze ein Gefühl wie im Eierkocher🫶🏻🔥\nKompletter Sandsturm inklusive 🌪️",
    "buddies": []
  },
  {
    "date": "Am 21. August 2024 um 17:09",
    "activity": "MTB - 🍆 🪨",
    "link": "https://www.strava.com/activities/12206276497",
    "description": "Peilstein oder wie ich ihn nenn „Beidl-Stan“🤝🫶🏻🤓",
    "buddies": []
  },
  {
    "date": "20. August 2024",
    "activity": "Panzergrenadiere Nitsche & Winkler zum Dienst🫡",
    "link": "https://www.strava.com/activities/12197729735",
    "description": "Wenig los, dafür mit Panzer-Sichtung🤝🫡 Heute wenig Höhenmeter, dafür schnell🏹 Graveleinlage auch wieder Start 🪨 \nKollege Nitsche mit leerer di2-Batterie am Start🤓",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 18. August 2024 um 11:05",
    "activity": "Flatbar?! - Was das nochmal?😶",
    "link": "https://www.strava.com/activities/12177652273",
    "description": "Nach langer Zeit wiedermal am MTB🤝 \nEntspannungsfahrt ohne Druck mit schweren Beinen🙃",
    "buddies": []
  },
  {
    "date": "17. August 2024",
    "activity": "Bauzugspotting 🚃",
    "link": "https://www.strava.com/activities/12171316405",
    "description": "Part 2 heute: Social Ride 🚲 \nMit da Kollegin Handystopper 📱 und Kollege Bauzug 🚆 🚧 einmal komplett den Regen vermieden🙌🏻🤝",
    "buddies": [
      "Julian Wenzel",
      "Anna Birbamer"
    ]
  },
  {
    "date": "Am 17. August 2024 um 06:34",
    "activity": "Wiedermal Early Bird 🦅",
    "link": "https://www.strava.com/activities/12168789347",
    "description": "Ob ich den Wurm gefangen hab? Bin ma ned sicher…Max Tretthann muss das eigentlich beurteilen🫡🤝\nAnsonsten windstill und verkehrsarm🫶🏻\nServicecar David Reischer mit den motivierenden Worten auf den letzten Metern🙌🏻",
    "buddies": []
  },
  {
    "date": "Am 16. August 2024 um 07:28",
    "activity": "Morgendliches Schweißbad 💦",
    "link": "https://www.strava.com/activities/12160037017",
    "description": "Schon massiv warm🔥",
    "buddies": []
  },
  {
    "date": "Am 15. August 2024 um 07:01",
    "activity": "Wir empfehlen👩🏼‍🍳: Grillteller 🔥",
    "link": "https://www.strava.com/activities/12153212269",
    "description": "Ziemlich heiß ab 09:30 Uhr, danach nur noch Hitzekampf und die verzweifelte Suche nach einer Tankstelle mit Zuckergetränken und Wasser🤓🙃\nStart mit da Kollegin Gravel-Fahrschule 👨‍🏫 \nBremsquietschen dank neuer Scheiben nun auch weg 🤝",
    "buddies": []
  },
  {
    "date": "Am 13. August 2024 um 18:41",
    "activity": "Still Squeaky Brakes 🔊",
    "link": "https://www.strava.com/activities/12138813234",
    "description": "Neue Beläge - selbes Quietschen🫠🫠🤝",
    "buddies": []
  },
  {
    "date": "9. August 2024",
    "activity": "Glocknerstraße 2024",
    "link": "https://www.strava.com/activities/12101801023",
    "description": "Mit Felgenbremsglüher-Martin und Billa-Sackerl-Niklas. Frisch von da Press ab aufn Glockner 🚻 \nBier am Schluss als Standard - und die einzige Motivation raufzufahren🤓🤝",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 8. August 2024 um 18:20",
    "activity": "Kirchberg Bhf nach Hause🤓🤝",
    "link": "https://www.strava.com/activities/12096409846",
    "description": "",
    "buddies": []
  },
  {
    "date": "8. August 2024",
    "activity": "Waschstraße 🧼",
    "link": "https://www.strava.com/activities/12095703225",
    "description": "Einmal dem Regen entflohen, zweites Mal kapitale Durchnässung🤝🤓\nDanach noch gscheid unterkühlt am Zug warten in Kufstein 🚲 🥶 \nErster Patschn beim Kollegen schon vorm Wegfahren🤝",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche"
    ]
  },
  {
    "date": "7. August 2024",
    "activity": "Motorpacing 🚌",
    "link": "https://www.strava.com/activities/12084939432",
    "description": "Auf die Labalm mitm Kollegen Wahoorensohn👍🏻🤓 Beine noch schwer von gestern, dafür Motorpacing von einem dänischen Bus 🫡🙃",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "6. August 2024",
    "activity": "Großer Rettenstein ⛰️",
    "link": "https://www.strava.com/activities/12076347185",
    "description": "Mit Bergziege 🐐 Karin und Landrover 🚗 Niklas🤝🤓\nSonnenbrand von gestern nochmals verstärkt - sonst top Wetter🫶🏻",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "5. August 2024",
    "activity": "Art Attack!",
    "link": "https://www.strava.com/activities/12068179683",
    "description": "Heute zeigen wir euch wie man seine Bremsscheiben beim Bergabfahren violett-schimmernd färbt🤭 dazu brauchen wir einen harten Downhill, einen ultra hoaten Niki der die Pace vorgibt und neue Bremsscheiben🤝🥰\nMim Kollegen auf die Steinplatte und Kitzbühler Horn 🐐 (nur fast bis ganz rauf).",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 4. August 2024 um 06:23",
    "activity": "Box! Box! Box! - Breakfast needed ☕️🥪",
    "link": "https://www.strava.com/activities/12056918385",
    "description": "Sehr wenig los🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 3. August 2024 um 19:22",
    "activity": "Roadbike Fahrschule mit da Kollegin🤝🤓",
    "link": "https://www.strava.com/activities/12054153014",
    "description": "Karin auf Dropbar Bike einschulen😁",
    "buddies": []
  },
  {
    "date": "Am 3. August 2024 um 09:09",
    "activity": "Chamäleon🦎",
    "link": "https://www.strava.com/activities/12049965431",
    "description": "New Bike Day🥰❤️ endlich neues Road-Bike. Fast alles perfekt eingestellt - Sattel hat dafür alles unterum zerlegt - schnell tauschen 🤝🤓\nLena Novacek: war das deine Geschwindigkeitskritik in Berndorf?😂",
    "buddies": []
  },
  {
    "date": "31. Juli 2024",
    "activity": "Same same but different - Karen Edition🫶🏻🤓",
    "link": "https://www.strava.com/activities/12029427072",
    "description": "Mit da oiden Steinschlitzerin 🪨 auf gewohnten Wegen ziagn🤝☀️",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 30. Juli 2024 um 18:31",
    "activity": "Sundowner ☀️",
    "link": "https://www.strava.com/activities/12020976149",
    "description": "Angenehm und nicht viel los🫶🏻⛱️\nDafür Rad-Umfaller beim Waschen🥲\nZum Glück nur minimaler Kratzer, aber Schaltauge is im Oasch🤓🙃\nNachtrag: Schaltauge wieder gerade gepfuscht 🤝",
    "buddies": []
  },
  {
    "date": "Am 27. Juli 2024 um 03:42",
    "activity": "Oh Boy 3AM 🍔",
    "link": "https://www.strava.com/activities/11992736814",
    "description": "3:00 Uhr ⏰ Erster +200km Gravler bei perfektem Wind und Wetter🫶🏻🔥\nSenioren am Radweg gegen Mittag wieder mit exponentiellem Anstieg ↗️\nHighlight: 70 Jährige touchiert mich beim Abbiegen wegen Vorrangveretzung🤓🫶🏻\nIn Summe 8l Wasserverbrauch🥵💧 Tankstelle mit Pepsi ultrawichtig🤝",
    "buddies": []
  },
  {
    "date": "26. Juli 2024",
    "activity": "Gmiadlich mim Auflieger🫡",
    "link": "https://www.strava.com/activities/11987343736",
    "description": "Noch immer am Gravel unterwegs🙃👍🏻 mit die Kollegen Essentherstraße🫡\nAuflieger Test - Bestanden ohne Sturz🤓🤝",
    "buddies": [
      "Julian Wenzel",
      "Anna Birbamer"
    ]
  },
  {
    "date": "23. Juli 2024",
    "activity": "„Mit Tubeless wär das nicht passiert“🤓🤝",
    "link": "https://www.strava.com/activities/11962477455",
    "description": "Mitm Kollegen Nitsche a Presser Runde inklusive Patschn und längerer Flickaktion🤓👍🏻\nWiedermal ungeniert einen abgepumpt🔥🍆\nMartin reißt mit die MTB-Klicks gleich mal a paar PRs🌶️",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "21. Juli 2024",
    "activity": "Stay Dehydrated 🫡",
    "link": "https://www.strava.com/activities/11940413728",
    "description": "Nach 4h Schlaf und kompletter Dehydrierung von gestern, sich von da Karin ziehen lassen. Tagwache 05:00 Uhr - was macht sonst so am Sonntag?🤓",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 20. Juli 2024 um 17:02",
    "activity": "Ultra Rad Challenge | 24h Kaindorf #5",
    "link": "https://www.strava.com/activities/11936604657",
    "description": "28:44min | gezogen und gezogen werden - top Runde 🫶🏻 | gutes Wetter zum Abschluss❤️",
    "buddies": []
  },
  {
    "date": "Am 20. Juli 2024 um 12:04",
    "activity": "Ultra Rad Challenge | 24h Kaindorf #4",
    "link": "https://www.strava.com/activities/11934094624",
    "description": "30:55min | Startnummer 287 beförderte mich bei ca. 65km/h fast in den ⚰️ - Selbsteinsicht gleich null 👴🏻 | Beine werden schwerer | Nässe aber kein Regen mehr 🫡",
    "buddies": []
  },
  {
    "date": "Am 20. Juli 2024 um 07:33",
    "activity": "Ultra Rad Challenge | 24h Kaindorf #3",
    "link": "https://www.strava.com/activities/11932261896",
    "description": "30:31min | Wiedermal solo | noch mehr Regen | aber dafür beste Runde | Startproblem weil da Kollege Julian Wenzel  leere Batterien in den STIs hatte🤓🤝 -> Resa Kühmayer perfekt eingesprungen🤝🫡",
    "buddies": []
  },
  {
    "date": "Am 20. Juli 2024 um 01:39",
    "activity": "Ultra Rad Challenge | 24h Kaindorf #2",
    "link": "https://www.strava.com/activities/11931162693",
    "description": "31:24 min | komplett nass und finster | zum Glück eine Gruppe für 13km gezogen🫠",
    "buddies": []
  },
  {
    "date": "Am 19. Juli 2024 um 21:07",
    "activity": "Ultra Rad Challenge | 24h Kaindorf #1",
    "link": "https://www.strava.com/activities/11929979227",
    "description": "30:38min | schon finster | leider alles solo🤓",
    "buddies": []
  },
  {
    "date": "Am 17. Juli 2024 um 17:09",
    "activity": "Getreideernte 🚜",
    "link": "https://www.strava.com/activities/11911796016",
    "description": "Nun haben‘s die Mähdrescher auch ins letzte Winkerl geschafft und ernten am Arsch der Welt Getreide🤝🚜\nEinmal ein Tag ohne Gluthitze⛔️🔥⛔️",
    "buddies": []
  },
  {
    "date": "16. Juli 2024",
    "activity": "Bitte warten…please hold the line 📞",
    "link": "https://www.strava.com/activities/11903833267",
    "description": "Aufgrund Wartezeit bis zum neuen Rennrad -> Gravelbike mit Roadlaufräuder👍🏻🤓 \nUnterwegs mitm Kollegen N.Strasser im Zick-Zack👍🏻🚗\nBier am Schluss als Draufgabe🤝🍻",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "14. Juli 2024",
    "activity": "Schuhband-Schnitt-Service by  ✂️ 👟",
    "link": "https://www.strava.com/activities/11885662253",
    "description": "Mehrmals durchs Fahrverbot ⛔️\nDieses Mal keine Förster🤝👍🏻\nAuch einmal gscheid komooted👍🏻🤓\nTubeless-Setup wurde auch gscheid getestet 💦\nPiesting mit geiler Musik-Begleitung 🎶",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "13. Juli 2024",
    "activity": "Gran Fondo - Special Edition „Karen“🤝",
    "link": "https://www.strava.com/activities/11877040262",
    "description": "Mit da Karin ihren ersten 100er Fetzen🎉🫡 Premiere auch die Klickpedale bei Karin - alles sturzfrei überstanden😁👍🏻\nBier am Schluss wieder als Klassiker🍻",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 12. Juli 2024 um 14:15",
    "activity": "Ooooh noooo! Cringeee! 🧦",
    "link": "https://www.strava.com/activities/11870090001",
    "description": "Aufgrund Sockenmangel heute mit den cringen kurzen Socken unterwegs 🫡🫠\nVon heiß-schwül bis Gewitter mit Regen alles am Start gewesen🤝",
    "buddies": []
  },
  {
    "date": "Am 11. Juli 2024 um 18:08",
    "activity": "Ihre Bestellung bitte! 🍕",
    "link": "https://www.strava.com/activities/11864565808",
    "description": "Mitm Kollegen Nitsche durchn tropischen Wald. Nach dem Regen ist vor dem Schwitzen🤝🫡\nDie Pizza im Anschluss gabs nur als Lieferservice 🚗",
    "buddies": []
  },
  {
    "date": "Am 10. Juli 2024 um 19:07",
    "activity": "Insektenbeförderungsbefugnis🐜🪳🪲",
    "link": "https://www.strava.com/activities/11856523343",
    "description": "Nach den Ameisen gestern waren heute andere Großinsekten am Start🫡\nZiemlich warm🔥",
    "buddies": []
  },
  {
    "date": "Am 9. Juli 2024 um 19:14",
    "activity": "Tour de fourmi 🐜",
    "link": "https://www.strava.com/activities/11848825350",
    "description": "Nachdem die Ameisen den Keller erobert haben, ist das Gravel Bike zum Ameisenhaufen degradiert worden🤝🫡🐜 3-5 Ameisen hatten somit das Glück einer Mitfahrt🤗\nSolo-Ride weil Aggressionsstau von den letzten beiden Tagen (sorry Niklas Strasser fürs Versetzen🫠😢)💥",
    "buddies": []
  },
  {
    "date": "7. Juli 2024",
    "activity": "Mit‘m Bus unterwegs zwischen den Sportwagen🤝🤓 🚌 🏎️",
    "link": "https://www.strava.com/activities/11829162988",
    "description": "Aufgrund verborgtem Rennrad heute mitm dem Gravel unterwegs🫡 Wetter zum Glück noch gut geworden🔥",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 6. Juli 2024 um 10:09",
    "activity": "Ambitionslos mit Ambitionen🤝",
    "link": "https://www.strava.com/activities/11820237977",
    "description": "Zuerst Chill-Ride, der dann in Druck machen übergegangen is🤓\nAnfang mit Karen und ihrer neuen Komplett-Montur👍🏻🫡",
    "buddies": []
  },
  {
    "date": "30. Juni 2024",
    "activity": "Gravelspeed by Karen🤝🫡",
    "link": "https://www.strava.com/activities/11772449813",
    "description": "Karin fit machen fürs Unbound Gravel 2025🤝😂 schön schwül🔥🙃",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "29. Juni 2024",
    "activity": "Pump up the jam 🫙🍇🍓🫐",
    "link": "https://www.strava.com/activities/11765782365",
    "description": "Mit‘m Kollegen Kurvenschnitzer eine Hitzerunde gedreht 🔥🤓\nNoch ned fit - HR als Grenzgänger 🤝🙃",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 22. Juni 2024 um 10:44",
    "activity": "Quick an dirty🫢😇",
    "link": "https://www.strava.com/activities/11710492829",
    "description": "Alles nass und gatschig🤓\nIch starte auch eine Volksabstimmung gegen alten Leute auf Schotterwegen am Wochenende ⛔️ Schlimm die 👴🏻 und 👵🏻",
    "buddies": []
  },
  {
    "date": "21. Juni 2024",
    "activity": "Big Gravel mit Karen🤝🔝🤓",
    "link": "https://www.strava.com/activities/11703604212",
    "description": "Mit da Karen wiedermal shredden🔥😂\nSchmerzen bei den rechten Außenbändern🥲🙃",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 19. Juni 2024 um 16:10",
    "activity": "Mähdrescher-Speed-Gravel 🚜",
    "link": "https://www.strava.com/activities/11691572667",
    "description": "Einen Haufen Mähdrescher gespottet - alle Fahrer sehr rücksichtsvoll 🔝 🎉\nFlugwetter schon mal für Karins Businesstrip auschecken ✈️",
    "buddies": []
  },
  {
    "date": "Am 18. Juni 2024 um 18:19",
    "activity": "Airfryer🔥",
    "link": "https://www.strava.com/activities/11683332531",
    "description": "Heiß gegrillt - aber endlich gutes Wetter❤️",
    "buddies": []
  },
  {
    "date": "16. Juni 2024",
    "activity": "🪫🪫🪫",
    "link": "https://www.strava.com/activities/11664157643",
    "description": "Energielos aufn Rohrer Sattel - Planänderung aufgrund beschissenem Wetter🥸 Bier danach wieder als Fixpunkt🤝🤓🍻",
    "buddies": [
      "David Reischer",
      "Niklas Strasser"
    ]
  },
  {
    "date": "15. Juni 2024",
    "activity": "Kieneck mim Birthdayboy Flo🎉🕺🏻",
    "link": "https://www.strava.com/activities/11658858632",
    "description": "Mit die Guaden aufs Kieneck. Alkoholmissbrauch inklusive🫡🍻",
    "buddies": [
      "Niklas Strasser",
      "Karin Winkler"
    ]
  },
  {
    "date": "14. Juni 2024",
    "activity": "KOM Support Team 🤝🤓",
    "link": "https://www.strava.com/activities/11650767536",
    "description": "Fürn Kollegen die Sechshauserstraße absperren, damit da KOM zogen werden kann🤝🫡🎉🕺🏻 sonst mal tatsächlich gemütlich unterwegs🫡",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 13. Juni 2024 um 19:32",
    "activity": "Firmenlauf Wr. Neustadt 🏃🏻‍♂️",
    "link": "https://www.strava.com/activities/11645143692",
    "description": "Team ZFG-Altherm | Start ziemlich verblockt von Schleichern🥸 danach gutes Tempo & Flybe vom Usain Bolt aus Berndorf Max Tretthann",
    "buddies": []
  },
  {
    "date": "Am 12. Juni 2024 um 16:05",
    "activity": "Suppentopf 🥣",
    "link": "https://www.strava.com/activities/11636017013",
    "description": "Tagessuppe: Allerlei vom Gatsch🤝🤓",
    "buddies": []
  },
  {
    "date": "Am 11. Juni 2024 um 17:12",
    "activity": "Wachablöse 💂‍♂️ 💂‍♂️💂‍♂️",
    "link": "https://www.strava.com/activities/11628077041",
    "description": "Wind löst Regen ab🤝🙃 mehr als frisch heute | Wege so gatschig, dass es am Kremesberg kein Weiterkommen gab🫠",
    "buddies": []
  },
  {
    "date": "Am 9. Juni 2024 um 08:43",
    "activity": "Morgendusche 🚿 🧼",
    "link": "https://www.strava.com/activities/11609026740",
    "description": "Wiedermal in den Regen gekommen…Klassiker🤝\nBeine noch schwer von gestern 🪨",
    "buddies": []
  },
  {
    "date": "Am 8. Juni 2024 um 18:56",
    "activity": "Neufelder See Bike/Run #2",
    "link": "https://www.strava.com/activities/11606435497",
    "description": "Ziemlich langsam🤝🤓 aber hilft nix.",
    "buddies": []
  },
  {
    "date": "Am 8. Juni 2024 um 18:55",
    "activity": "Wechselzone🤓",
    "link": "https://www.strava.com/activities/11606435468",
    "description": "Viel zu langsam🤝🥸",
    "buddies": []
  },
  {
    "date": "Am 8. Juni 2024 um 18:22",
    "activity": "Neufelder See Bike/Run #1",
    "link": "https://www.strava.com/activities/11606417116",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 8. Juni 2024 um 09:09",
    "activity": "Zahnarzt Gang 🦷",
    "link": "https://www.strava.com/activities/11601351543",
    "description": "Aufwärmen für Raceday…ist dann eskaliert, als es bergauf ums Zahnarzt-Pinarello-Gang überholen ging🤓🥸🦷\nMassive PR-Verbesserung Hart-Climb Reverse…ob‘s klug war lass ma so stehen🥸",
    "buddies": []
  },
  {
    "date": "7. Juni 2024",
    "activity": "Tante Annie Time🤝🥸",
    "link": "https://www.strava.com/activities/11595972107",
    "description": "Mit da Kollegin Kurvenschnitzerin 🔪 übern Hart ziagn. Gewitter immer in Sichtweite💀⚡️\nTrotz härterer Schwüle Hart-PR zogen🕺🏻🍻",
    "buddies": [
      "Anna Birbamer"
    ]
  },
  {
    "date": "Am 6. Juni 2024 um 18:30",
    "activity": "Potz Blitz! ⚡️",
    "link": "https://www.strava.com/activities/11589707935",
    "description": "Geladener Christoph 💥 🤝 Gewitter⚡️\nWiedermal Gewitterdate🤓",
    "buddies": []
  },
  {
    "date": "Am 5. Juni 2024 um 16:44",
    "activity": "Hocheck - Olé olé 🤝🎉",
    "link": "https://www.strava.com/activities/11581472576",
    "description": "Beim 3. Anlauf innerhalb einer Woche hat‘s dann doch noch geklappt🤓🕺🏻\nFly-By beim Usain Bolt von Berndorf: Max Tretthann",
    "buddies": []
  },
  {
    "date": "Am 4. Juni 2024 um 16:24",
    "activity": "Gatschfest🕺🏻🌧️🍂🌾🪨",
    "link": "https://www.strava.com/activities/11572077589",
    "description": "Klassiker: Wiedermal in eine Forstsperre ⛔️🪚🪓⛔️ gekommen🤝🙃🥸\nRandom-Schraubenbruch am Vario-Sattelstützenhebel inklusive 🤓",
    "buddies": []
  },
  {
    "date": "Am 2. Juni 2024 um 10:01",
    "activity": "Schrödingers (🐈) Wetterbericht 🌧️ 🌩️ ⚡️",
    "link": "https://www.strava.com/activities/11554655930",
    "description": "Schrödingers Gedankenexperiment auch heut beim Wetter anzuwenden - so lange man nicht am Hocheck war, weiß man ned ob man ned doch vom Blitz erschlagen wird🤓⚡️🤝\n2. Versuch Hocheck auch wieder durch Gewitter gescheitert…restlichen Runde reiner Regentanz 💃 🕺🏻",
    "buddies": []
  },
  {
    "date": "Am 1. Juni 2024 um 09:12",
    "activity": "Chuckles - I‘m in danger 🤓⚡️",
    "link": "https://www.strava.com/activities/11545729660",
    "description": "Nach zwei Blitzeinschlägen im näheren Umfeld dann Hocheck doch noch abgebrochen🤓🤝 Kapitale Dusche kurz vor Berndorf - immerhin sind die neuen Laufräder gleich mal getauft ⛪️ 💦",
    "buddies": []
  },
  {
    "date": "Am 31. Mai 2024 um 08:41",
    "activity": "Einstellfahrt neue Gravel-Laufräder🤝",
    "link": "https://www.strava.com/activities/11538143662",
    "description": "Noch bissl unrund, Tubeless noch ned ganz dicht🥲🤓\nEssentherstraße noch von einem Schleicher 👴🏻 geblockt worden🔝",
    "buddies": []
  },
  {
    "date": "30. Mai 2024",
    "activity": "Blumenexport 🌷 🌼 🌸",
    "link": "https://www.strava.com/activities/11532028161",
    "description": "Schnelle Runde übern Flughafen, um zu schauen, wieviele Blumen in einem Airbus A380 ✈️ exportiert werden können.\nMit den Presserbuam Niklas und Nitsche beim Flughafen eine kleine Spotting-Session eingelegt 📸.",
    "buddies": [
      "Martin Nitsche",
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 27. Mai 2024 um 18:59",
    "activity": "Evening Run",
    "link": "https://www.strava.com/activities/11511112524",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 25. Mai 2024 um 11:22",
    "activity": "Neue Schuhe 👟 👟",
    "link": "https://www.strava.com/activities/11492163210",
    "description": "Dieser Lauf wurde gesponsert von Red Bull & Kopfwehtabletten 🤝🙂🍻\nDafür neue Laufschuhe getestet🔝",
    "buddies": []
  },
  {
    "date": "22. Mai 2024",
    "activity": "MTB: Service Car Edition 🚨🛺",
    "link": "https://www.strava.com/activities/11472684559",
    "description": "Eisernes Tor mim Kollegen - Schluss noch Flüssigkeitencheck am neuen Fiat Panda von Martins Oma🤝🤓🤝\nScheibenflüssigkeit is a Zirberl worden 🌲🪵",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "20. Mai 2024",
    "activity": "Ungeniert einen Abpumpen 🤓✊🏻✊🏻✊🏻💨",
    "link": "https://www.strava.com/activities/11455467384",
    "description": "Mit‘m Kollegen Timemachine von Marchegg via Bratislava nach Berndorf.\nErster Rennrad-Patschen nach 10.000km - dafür gleich mit vollem Programm🔝\nSchlammpackung in da 🇸🇰 war gratis🤝\nSchluss dieses mal mit Orangensaft von die Nachbarskinder um 5€ - top Preis💰🤙🏻",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "20. Mai 2024",
    "activity": "Thank you for goin‘ ÖBB 🚃",
    "link": "https://www.strava.com/activities/11452229114",
    "description": "",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 19. Mai 2024 um 10:05",
    "activity": "Anton Dreher-Tribute Ride🤝🍺",
    "link": "https://www.strava.com/activities/11448191765",
    "description": "Die Dreher Straße in Schwechat komplett ausgenützt und Schwechater Brauerei von außen besichtigt🔝\nAnsonsten teilweise windig und die Donauinsel wird wiedermal zum Großraumgriller 🥓🌭🍔 umgebaut 💨 \nSnack-Attack in Kaisermühlen als Klassiker🫢",
    "buddies": []
  },
  {
    "date": "Am 18. Mai 2024 um 09:54",
    "activity": "Saunalandschaft🥵🛖",
    "link": "https://www.strava.com/activities/11437631680",
    "description": "Petrus hat gestern den Saunaaufguss perfekt vorbereitet 🌧️ ☀️ - heute somit gratis Eintrittskarte in die Waldsauna🤝🤓💰🎫\nDafür gutes Tempo bei gutem Wind🔝",
    "buddies": []
  },
  {
    "date": "Am 15. Mai 2024 um 17:50",
    "activity": "Longrun 🏃🏻‍♂️",
    "link": "https://www.strava.com/activities/11418097881",
    "description": "Mittleres Tempo, Anfang unrund.\nWir bekommen die HF 🫀 beim Laufen besser in den Griff🤓🤝",
    "buddies": []
  },
  {
    "date": "12. Mai 2024",
    "activity": "Der Schrei 😱",
    "link": "https://www.strava.com/activities/11391774085",
    "description": "Christophs Lunge nach 2 Lungensemmerl gestern 🚬 : Der Schrei.\nChristophs Carbonfelgen bei der Abfahrt vom Hocheck: Der Schrei 🔊📣\nMit Niki-Boy aufs Hocheck🤓🔝",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "11. Mai 2024",
    "activity": "Wienerwaldexpress 🚂 🌲",
    "link": "https://www.strava.com/activities/11383283483",
    "description": "Mit 🚂-🐎-Maxi🤝🤓🫡\nLungenöffnung dank Oldtimer-Moped-Rundfahrt inklusive 🏍️ 💨",
    "buddies": [
      "Max Tretthann"
    ]
  },
  {
    "date": "Am 10. Mai 2024 um 15:14",
    "activity": "Gravel Today 🤓🙃🪨🪵🌲",
    "link": "https://www.strava.com/activities/11377614382",
    "description": "Nach MTB & Rennrad gestern wurde es Zeit fürs Gravelbike✔️🔝🙂",
    "buddies": []
  },
  {
    "date": "9. Mai 2024",
    "activity": "Klassenfahrt deluxe 👩🏻‍🏫 🚌",
    "link": "https://www.strava.com/activities/11369512311",
    "description": "Mit den 9 Klassenkollegen am Start🔝🫡\nPressapartie im Gegenwind all time classics💨\nDank Kollege Wahooligan Niklas paar PR‘s zogen🦵🏻🦵🏻🫡",
    "buddies": [
      "Niklas Strasser",
      "Felix Brandstetter",
      "Stefan Krajnik",
      "Mathias Ganneshofer",
      "David Reischer",
      "Lena Novacek"
    ]
  },
  {
    "date": "Am 9. Mai 2024 um 07:11",
    "activity": "MTB Klassiker am Feiertag🤙🏻",
    "link": "https://www.strava.com/activities/11366303172",
    "description": "Pre-Gran Fondo🤓👌🏻\nDer Sub-40min Climb aufs Waxi steht kurz bevor 🦵🏻 🦵🏻\nSchnell am Anfang - dann unkonstant🤔",
    "buddies": []
  },
  {
    "date": "Am 8. Mai 2024 um 17:29",
    "activity": "Zwift - Devedeset Lite in Watopia",
    "link": "https://www.strava.com/activities/11361997022",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 7. Mai 2024 um 18:41",
    "activity": "Zwift - Recovery Spin in Watopia",
    "link": "https://www.strava.com/activities/11354573689",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 6. Mai 2024 um 16:20",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/11346163841",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 4. Mai 2024 um 10:09",
    "activity": "Loving the Headwind-Game 🌬️🎪🤹🏻‍♂️🪁",
    "link": "https://www.strava.com/activities/11328488214",
    "description": "Wärmer als gedacht 🔥🤓\nRad-Genusstag im Triestingtal größtmöglich umfahren🤝🤙🏻",
    "buddies": []
  },
  {
    "date": "1. Mai 2024",
    "activity": "NikiJET XPRESS 🚆",
    "link": "https://www.strava.com/activities/11306674739",
    "description": "Mit Niki dem oiden Ziaga nach Graz und mit dem Railjet wieder heim🤝🤓 🚃 \nWiedermal alle Klimazonen durchlebt und teilweise zu wenig zum Anziehen dabei ghabt 🥶",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "30. April 2024",
    "activity": "Wirbelwind 🌬️",
    "link": "https://www.strava.com/activities/11297210476",
    "description": "Wiedermal mit Wind unterwegs👌🏻🙂\nUnd Karen🤙🏻🤝🫡",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 27. April 2024 um 08:48",
    "activity": "Brillen-Suchfahrt 👓",
    "link": "https://www.strava.com/activities/11272823003",
    "description": "Leider ohne Erfolg. Brille bleibt verschollen.",
    "buddies": []
  },
  {
    "date": "26. April 2024",
    "activity": "Wow. What a gwup. 🚲",
    "link": "https://www.strava.com/activities/11268676715",
    "description": "Neue Konstellation - keine halben Sachen.\nMit gutem Zug und viel 💨",
    "buddies": [
      "Martin Nitsche",
      "Lena Novacek",
      "Stefan Krajnik",
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 24. April 2024 um 17:55",
    "activity": "Zwift - Potpourri in Watopia",
    "link": "https://www.strava.com/activities/11255021147",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. April 2024 um 18:35",
    "activity": "Zwift - Pre-Race in Yorkshire",
    "link": "https://www.strava.com/activities/11247764348",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 21. April 2024 um 10:47",
    "activity": "Kalt\\Oasch 🥶",
    "link": "https://www.strava.com/activities/11229855593",
    "description": "Standard MTB Runde mit grauslichem Wetter🙂👍🏻",
    "buddies": []
  },
  {
    "date": "Am 20. April 2024 um 11:21",
    "activity": "Zwift - Hang Ten in Watopia",
    "link": "https://www.strava.com/activities/11222423221",
    "description": "",
    "buddies": []
  },
  {
    "date": "19. April 2024",
    "activity": "Schlagregen-Kur 🤜🏻 ☔️",
    "link": "https://www.strava.com/activities/11217727617",
    "description": "Kleine Abkühlung mit‘m Kollegen Wenzel eingeholt. Bier obligatorisch auch am Start🤝🍻",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 18. April 2024 um 18:07",
    "activity": "Zwift - Garmin UNBOUND Gravel Training Plan | Texaco Hill Tempo in Watopia",
    "link": "https://www.strava.com/activities/11211179245",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 16. April 2024 um 18:51",
    "activity": "Zwift - 135/5 - 190/20 - 150/20 in Watopia",
    "link": "https://www.strava.com/activities/11196561847",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 14. April 2024 um 09:39",
    "activity": "Verkleinertes Starterfeld❗️❕❗️",
    "link": "https://www.strava.com/activities/11178900743",
    "description": "Von 3 Starter auf Solo reduziert worden.\nKollege Nitsche: Gesundheitliche Disqualifikation aufgrund gestern🍻🍷🥂🤝😂\nKollege Wenzel: Disziplinäre Disqualifikation von da Kollegin Essentherstraße👩🏻‍🏫\nAngenehmes Wetter und sehr wenig Verkehr 🔝",
    "buddies": []
  },
  {
    "date": "13. April 2024",
    "activity": "Further-Kurven-Schwaßa💯⛔️",
    "link": "https://www.strava.com/activities/11170191789",
    "description": "Mit die Kollegen Birbamer & Wenzel nach Furth. Heut mal am Gravel Bike zur Abwechslung🤙🏻🥸",
    "buddies": [
      "Anna Birbamer"
    ]
  },
  {
    "date": "Am 13. April 2024 um 09:07",
    "activity": "Morning Run",
    "link": "https://www.strava.com/activities/11169199452",
    "description": "",
    "buddies": []
  },
  {
    "date": "12. April 2024",
    "activity": "„Chilliger Z2-Ride“ auf die Hohe Wand ⛰️",
    "link": "https://www.strava.com/activities/11165593230",
    "description": "Sie glauben diese Beschreibung ist wahr? Dann muss ich Sie leider enttäuschen…\nPR auf die Hohe Wand zerlegt, downhill heute kranker als auf Malle - in die Jahres Top10 hätt ma uns somit auch gschossen🤙🏻🤙🏻🤙🏻🙂🙃\nMit Niklas dem oiden Presser💨🥰🤝",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 11. April 2024 um 18:37",
    "activity": "Zwift - Taper Steady in Watopia",
    "link": "https://www.strava.com/activities/11158672233",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. April 2024 um 19:06",
    "activity": "Zwift - Tempo into VO2 Max #1 in Watopia",
    "link": "https://www.strava.com/activities/11151516479",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 9. April 2024 um 17:25",
    "activity": "Back to Homebase.",
    "link": "https://www.strava.com/activities/11142865676",
    "description": "Fliegenfänger deluxe heute. Aero Trikot erstes Mal auch am Start🤙🏻\nNachtrag: Anscheinend Copycat von da Birbamer Runde🤓",
    "buddies": []
  },
  {
    "date": "8. April 2024",
    "activity": "Evening Walk",
    "link": "https://www.strava.com/activities/11135928268",
    "description": "Recovery.",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "5. April 2024",
    "activity": "Malle Trainingscamp | Day 6 🇪🇸 | Mallorcas finest Gravelroads",
    "link": "https://www.strava.com/activities/11110864948",
    "description": "Tagesstart mit guter Portion Gravel🤝🫡\nEindringen ins militärische Sperrgebiet ⛔️🚁 inklusive🚔 Julians Cleats: Seiten auf Null 💇",
    "buddies": [
      "Niklas Strasser",
      "Max Tretthann",
      "Julian Wenzel"
    ]
  },
  {
    "date": "4. April 2024",
    "activity": "Malle Trainingscamp | Day 5 🇪🇸 | Sa Calobra",
    "link": "https://www.strava.com/activities/11105575246",
    "description": "Mit Muscle-Man Steven 💪🏻 , Bier-Sommelier Julian🍺 und Wahoorensohn Niklas 📟 Sa Calobra erkunden - Downhill wieder krank grenzwertig🤝🫡",
    "buddies": [
      "Stefan Krajnik",
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "3. April 2024",
    "activity": "Malle Trainingscamp | Day 4 🇪🇸 | Und hat Spaß gemacht Jungs?🤓 | Zerlegung der Woche 🤙🏻",
    "link": "https://www.strava.com/activities/11099141072",
    "description": "Mit Garmin-Boy Maxi & Wahoorensohn Niklas 📟 Niklas mit kleiner Ordnungswidrigkeit und Polizeikontrolle 🚔",
    "buddies": [
      "Niklas Strasser",
      "Max Tretthann"
    ]
  },
  {
    "date": "2. April 2024",
    "activity": "Malle Trainingscamp | Day 3 🇪🇸 | Beach & Beer",
    "link": "https://www.strava.com/activities/11090699967",
    "description": "5/5 Anwesend🤙🏻 Kleiner Recovery Ride mit Bier & Sandwich 🍻 🥪\nAbschluss wieder klassisch mit 2. Fuhre Bier.",
    "buddies": [
      "Stefan Krajnik",
      "Max Tretthann",
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "1. April 2024",
    "activity": "Malle Trainingscamp | Day 2 🇪🇸 | Sóller",
    "link": "https://www.strava.com/activities/11084604764",
    "description": "4/5 Personen anwesend🤓🫡 alle Wetterzonen durchlebt 💨 ☀️ 🌧️⛄️\nZugspotting 🚃 auch auf Malle ein Muss. Eselspotting auch 🫏",
    "buddies": [
      "Max Tretthann",
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "31. März 2024",
    "activity": "Malle Trainingscamp | Day 1 🇪🇸 | Cap Formentor",
    "link": "https://www.strava.com/activities/11076515477",
    "description": "Alle am Start, erstes Einrollen inklusive Sandstrahlen am Schluss 🏝️ \nPaar Ziegen 🐐 hamma auch troffen🤓",
    "buddies": [
      "Stefan Krajnik",
      "Max Tretthann",
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 28. März 2024 um 18:42",
    "activity": "Zwift - 145/30 in Watopia",
    "link": "https://www.strava.com/activities/11056742669",
    "description": "Reco-Week",
    "buddies": []
  },
  {
    "date": "Am 27. März 2024 um 18:31",
    "activity": "Zwift - 135/5 - 190/20 - 135/20 in Watopia",
    "link": "https://www.strava.com/activities/11050313413",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 24. März 2024 um 07:50",
    "activity": "Zwift - Free Ride Sandwich in Yorkshire",
    "link": "https://www.strava.com/activities/11025493933",
    "description": "",
    "buddies": []
  },
  {
    "date": "23. März 2024",
    "activity": "265 Watt Climbers Club ⛰️",
    "link": "https://www.strava.com/activities/11020547251",
    "description": "„Gmiadliche GA1 Fahrt“ mit den Gämsen 🐐\nJeder Anstieg mit min. 265 Watt ⚡️ \nNeuen Freund hama auch gfunden, den ma fast gleich umgebracht hätten ☠️",
    "buddies": [
      "Max Tretthann",
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 22. März 2024 um 14:30",
    "activity": "G\\Roads 🤝 Wind",
    "link": "https://www.strava.com/activities/11014756612",
    "description": "Schön warm, aber viel Wind 💨",
    "buddies": []
  },
  {
    "date": "Am 20. März 2024 um 18:45",
    "activity": "Zwift - Zwift Pro Training Camp: Movistar | Men's Team Workout in Watopia",
    "link": "https://www.strava.com/activities/11002399869",
    "description": "",
    "buddies": []
  },
  {
    "date": "17. März 2024",
    "activity": "Donaudampfschiffahrtsgesellschaftskapitän Niklas 🚢",
    "link": "https://www.strava.com/activities/10979852833",
    "description": "In Linz beginnt’s🤓🤙🏻 \n03:50 Uhr Tagwache ⏰ \nMit‘m Kollegen Schiffskapitän von Linz nach Wien🫡🙂\nFettes Lunchpaket mit am Start 🍱 \nBier am Schluss wieder als Klassiker 🍺",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "16. März 2024",
    "activity": "Schabe. Schabe keinen Bock mehr🪳🪳",
    "link": "https://www.strava.com/activities/10970822089",
    "description": "Anfänglicher Wind und trübes Wetter = gute Demotivation. Ende wieder alles gut - wiedermal Huhn gesichtet 🐓 🤙🏻😶🫡\nMitm Kollegen Kurvenpresser.",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "15. März 2024",
    "activity": "Mit dem Schiff aufs Waxeneck 🚢",
    "link": "https://www.strava.com/activities/10965805140",
    "description": "Neue Bekanntschaft fährt angeblich mitm Schiff aufs Waxeneck. Man kennts.\nMit Julian und dem alten KTM Bock als Leihgabe🚲",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 13. März 2024 um 19:03",
    "activity": "Zwift - Big Gear SST - 3x5 in Watopia",
    "link": "https://www.strava.com/activities/10952602668",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 12. März 2024 um 18:41",
    "activity": "Zwift - 130% of FTP Hangers in France",
    "link": "https://www.strava.com/activities/10945009445",
    "description": "",
    "buddies": []
  },
  {
    "date": "10. März 2024",
    "activity": "Who else but Quarkmüller?!?",
    "link": "https://www.strava.com/activities/10930031746",
    "description": "Kleine Fachdiskussion über Julians Quarq-Powermeter-soon-Investment🤙🏻🤓\nSonst leiwande Segelbootfahrt ⛵️ Klassiker am Schluss 🍻 Flughafen Spotting wieder inklusive ✈️",
    "buddies": [
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "9. März 2024",
    "activity": "Gefangen im Wind 💯",
    "link": "https://www.strava.com/activities/10921957071",
    "description": "CO-Operation mit Kollege Wenzel am alten KTM-Bock 🚲.",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 7. März 2024 um 18:33",
    "activity": "Zwift - Strength Endurance + REV for :15 seconds in Scotland",
    "link": "https://www.strava.com/activities/10911370301",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 6. März 2024 um 18:50",
    "activity": "Zwift - Foundation in Scotland",
    "link": "https://www.strava.com/activities/10904662337",
    "description": "",
    "buddies": []
  },
  {
    "date": "3. März 2024",
    "activity": "Hotel Room Service.",
    "link": "https://www.strava.com/activities/10881447262",
    "description": "We got the Hotel-Motel…eine Hommage an Pitbull. Dank Kollege Nitsche kleinen Ohrwurm.\nKleines Meetup mit Kollegen Essentherstraße in Leobersdorf🤙🏻",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 3. März 2024 um 09:05",
    "activity": "Auf zum Kollegen Nitsche.",
    "link": "https://www.strava.com/activities/10878733573",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 2. März 2024 um 09:09",
    "activity": "Airport Driver 🚕",
    "link": "https://www.strava.com/activities/10873626122",
    "description": "Wir bringen auch Sie verlässlich und leicht restfett 🍻 zum Flughafen.\nAnfänglicher Blindflug dank Nebel und Sprühregen 🌧️ 👓\nDafür mit Highspeedgravel🤙🏻🔝",
    "buddies": []
  },
  {
    "date": "Am 29. Februar 2024 um 18:18",
    "activity": "Zwift - Pacing #1 in London",
    "link": "https://www.strava.com/activities/10862808806",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 28. Februar 2024 um 19:03",
    "activity": "Zwift - HIIT 80% FTP #2 in Paris",
    "link": "https://www.strava.com/activities/10856510786",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 27. Februar 2024 um 18:44",
    "activity": "Zwift - Extensive Anaerobic x 6 in Watopia",
    "link": "https://www.strava.com/activities/10849337447",
    "description": "Tagesaggression als gratis Beifahrer🤙🏻",
    "buddies": []
  },
  {
    "date": "Am 26. Februar 2024 um 17:12",
    "activity": "Zwift - Active Recovery in Watopia",
    "link": "https://www.strava.com/activities/10841608889",
    "description": "",
    "buddies": []
  },
  {
    "date": "24. Februar 2024",
    "activity": "Eierschneider 🥚 🔪",
    "link": "https://www.strava.com/activities/10827022007",
    "description": "Julians „nice to have“ heute auch erledigt.\nMit die Presser Buam🤙🏻\nTrainspotting inklusive…was sonst 🚃",
    "buddies": [
      "Martin Nitsche",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 22. Februar 2024 um 17:43",
    "activity": "Zwift - 09. Stayin' Alive in London",
    "link": "https://www.strava.com/activities/10815136697",
    "description": "Mit Kollege Nitsche.",
    "buddies": []
  },
  {
    "date": "Am 19. Februar 2024 um 18:39",
    "activity": "Zwift - Back to Basics in Scotland",
    "link": "https://www.strava.com/activities/10795293025",
    "description": "Mit Kollege Nitsche again.",
    "buddies": []
  },
  {
    "date": "Am 18. Februar 2024 um 10:56",
    "activity": "It‘s chicken Sunday 🐓",
    "link": "https://www.strava.com/activities/10786743767",
    "description": "Fast eine ganze Hühnerfarm überfahren…🤓",
    "buddies": []
  },
  {
    "date": "Am 17. Februar 2024 um 15:33",
    "activity": "Abholdienst.",
    "link": "https://www.strava.com/activities/10780639396",
    "description": "Wer saufen geht muss auch irgendwann sein Auto holen 🍻 \nAutofahrt mit Radschuhen auch spannend 👞",
    "buddies": []
  },
  {
    "date": "Am 16. Februar 2024 um 12:10",
    "activity": "Willkommen bei einer neuen Runde „Forstarbeiten-Roulette 🚜 🌳 🪓“",
    "link": "https://www.strava.com/activities/10772972612",
    "description": "3x beim Roulette 🎰 verloren - 1x eingeschlossen. Glück wiedermal nicht auf meiner Seite🤓🫠💯\nWetter dafür 🔝",
    "buddies": []
  },
  {
    "date": "Am 15. Februar 2024 um 17:07",
    "activity": "Zwift - Zwift Pro Training Camp: Jumbo-Visma | Men's Team in Paris",
    "link": "https://www.strava.com/activities/10767822130",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 14. Februar 2024 um 18:40",
    "activity": "Zwift - 08. Build and Release in Paris",
    "link": "https://www.strava.com/activities/10762033909",
    "description": "Mit Kollege Nitsche.",
    "buddies": []
  },
  {
    "date": "Am 12. Februar 2024 um 19:02",
    "activity": "Zwift - Active Recovery in Watopia",
    "link": "https://www.strava.com/activities/10748731368",
    "description": "Recovery before rest day - Keinen Bock, hilft nix🤓",
    "buddies": []
  },
  {
    "date": "Am 11. Februar 2024 um 10:05",
    "activity": "Foa ned fuat - bleib in Furth🤓",
    "link": "https://www.strava.com/activities/10739099795",
    "description": "Gravel bike in (wet 🚿) road use🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 10. Februar 2024 um 08:50",
    "activity": "Look Ma, no gloves ❌🧤❌",
    "link": "https://www.strava.com/activities/10733147222",
    "description": "Ziemlich warm - außer am Schluss.\nHeimfahrt mit den ÖBB ▶️ Headwind? Ain‘t Nobody Got Time Fo‘ Dat🤙🏻\nÜber die HR red ma lieber ned…🫀",
    "buddies": []
  },
  {
    "date": "Am 9. Februar 2024 um 16:10",
    "activity": "Zwift - EF Pro Cycling's Red Day Workout in Watopia",
    "link": "https://www.strava.com/activities/10727990489",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 8. Februar 2024 um 17:31",
    "activity": "Zwift - 07. Hustle and Flow in Scotland",
    "link": "https://www.strava.com/activities/10722274376",
    "description": "Again mit Kollege Nitsche.",
    "buddies": []
  },
  {
    "date": "Am 7. Februar 2024 um 19:30",
    "activity": "Zwift - Paceline Work in Watopia",
    "link": "https://www.strava.com/activities/10716640421",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 6. Februar 2024 um 16:44",
    "activity": "Zwift - Aerobic Sustainability in Innsbruck",
    "link": "https://www.strava.com/activities/10708617786",
    "description": "Mit Kollege Nitsche🤙🏻",
    "buddies": []
  },
  {
    "date": "Am 4. Februar 2024 um 11:12",
    "activity": "Zwift - Garmin UNBOUND Gravel Training Plan | Chase the Chaise in Watopia",
    "link": "https://www.strava.com/activities/10693390727",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 3. Februar 2024 um 12:26",
    "activity": "Zwift - 45min Riders Choice in Watopia",
    "link": "https://www.strava.com/activities/10686716964",
    "description": "Restfettn Tortur 🫠",
    "buddies": []
  },
  {
    "date": "Am 2. Februar 2024 um 16:33",
    "activity": "Zwift - Big Gear SST - 3x5 in Watopia",
    "link": "https://www.strava.com/activities/10681509616",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 1. Februar 2024 um 18:57",
    "activity": "Zwift - Zwift Pro Training Camp: Movistar | Sara Martin in London",
    "link": "https://www.strava.com/activities/10675997142",
    "description": "1. Training nach da Impfung.\nMeet-up mit Kollege Nitsche🤙🏻🤙🏻🤙🏻",
    "buddies": []
  },
  {
    "date": "Am 28. Januar 2024 um 12:43",
    "activity": "Sunny side up ☀️🍳",
    "link": "https://www.strava.com/activities/10646802266",
    "description": "Schönes Wetter = viele dumme Leute unterwegs🫠🫡\nSichtkontakt mit dem roten Blitz von Kollege Wenzel🔥🏗️",
    "buddies": []
  },
  {
    "date": "Am 27. Januar 2024 um 09:59",
    "activity": "Zwift - FTP Test (20 min) in Watopia",
    "link": "https://www.strava.com/activities/10637846563",
    "description": "FTP: 271 Watt (+18 Watt 🔼)",
    "buddies": []
  },
  {
    "date": "Am 25. Januar 2024 um 16:35",
    "activity": "Zwift - Active Recovery in Watopia",
    "link": "https://www.strava.com/activities/10627583379",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 24. Januar 2024 um 18:48",
    "activity": "Zwift - It's all about the Foundation in Watopia",
    "link": "https://www.strava.com/activities/10621899265",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. Januar 2024 um 19:12",
    "activity": "Zwift - 40/20's #1 in Watopia",
    "link": "https://www.strava.com/activities/10615471573",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 22. Januar 2024 um 18:45",
    "activity": "Zwift - Garmin UNBOUND Gravel Training Plan | Recipe for Grit in Watopia",
    "link": "https://www.strava.com/activities/10608766512",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 21. Januar 2024 um 11:41",
    "activity": "Waschtag🥸🫡",
    "link": "https://www.strava.com/activities/10599931209",
    "description": "Dreck von gestern beseitigen…every km counts🤙🏻😂",
    "buddies": []
  },
  {
    "date": "Am 21. Januar 2024 um 10:09",
    "activity": "Zwift - Lionel Sanders' Yellow Day Workout in Scotland",
    "link": "https://www.strava.com/activities/10599413988",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 20. Januar 2024 um 09:47",
    "activity": "Cabin Crew - please prepare for landing 🛬",
    "link": "https://www.strava.com/activities/10594678155",
    "description": "Holprige Landung mit viel Gegenwind 💨 \nBordservive Air Winkler: bescheiden - am Schluss noch in die Hungerast gekommen🫠🤓\nImmerhin gratis Spray-Tan vom Acker ☀️",
    "buddies": []
  },
  {
    "date": "Am 18. Januar 2024 um 18:36",
    "activity": "Zwift - Aerobic Sustainability in Watopia",
    "link": "https://www.strava.com/activities/10583700254",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 17. Januar 2024 um 18:31",
    "activity": "Zwift - Short Sweet Spot Tune Up in Richmond",
    "link": "https://www.strava.com/activities/10577415112",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 14. Januar 2024 um 10:10",
    "activity": "Keine Kapriolen!",
    "link": "https://www.strava.com/activities/10555859612",
    "description": "Bei starkem Wind und Eis lieber gewohnte Strecken👀🫡🧊",
    "buddies": []
  },
  {
    "date": "Am 13. Januar 2024 um 10:12",
    "activity": "Frozen ground and some bridges 🧊 🌁",
    "link": "https://www.strava.com/activities/10549365159",
    "description": "Getting komooted again🤓 paar nette Rüttelpassagen und Brückenunterquerungen dabei gewesen 🤙🏻🫠",
    "buddies": []
  },
  {
    "date": "Am 11. Januar 2024 um 18:36",
    "activity": "Zwift - Recovery Spin in France",
    "link": "https://www.strava.com/activities/10538885571",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. Januar 2024 um 19:00",
    "activity": "Zwift - Zwift Academy Tri: Bike Workout 1 | Endurance Strength Development in Watopia",
    "link": "https://www.strava.com/activities/10532820102",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 9. Januar 2024 um 05:41",
    "activity": "Zwift - Hairpin Wizard in Watopia",
    "link": "https://www.strava.com/activities/10522119188",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 7. Januar 2024 um 10:44",
    "activity": "Hochdruck-Gatsch-Wind-Wäsche 🧼",
    "link": "https://www.strava.com/activities/10510854649",
    "description": "Viiiiiiiel Wind und kalt ⛄️",
    "buddies": []
  },
  {
    "date": "Am 6. Januar 2024 um 10:58",
    "activity": "Zwift - Garmin UNBOUND Gravel Training Plan | Time To Get Dirty! in Watopia",
    "link": "https://www.strava.com/activities/10503837563",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 5. Januar 2024 um 10:10",
    "activity": "Zwift - Sneaky in Watopia",
    "link": "https://www.strava.com/activities/10497477042",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 4. Januar 2024 um 10:10",
    "activity": "Zwift - Sweet Spot Builds in Watopia",
    "link": "https://www.strava.com/activities/10490987230",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 3. Januar 2024 um 10:18",
    "activity": "Zwift - Anaerobic Capacity 1min & 2min in Innsbruck",
    "link": "https://www.strava.com/activities/10484431463",
    "description": "",
    "buddies": []
  },
  {
    "date": "31. Dezember 2023",
    "activity": "Mr. Worldwide 🇭🇺 🇦🇹",
    "link": "https://www.strava.com/activities/10468217361",
    "description": "From Hungary - to Austria - to the World 🌍 \nDale!\nMitm Presser von Ungarn über Pottendorf (Kebapstopp/Vergiftung) nach Berndorf.",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 29. Dezember 2023 um 11:26",
    "activity": "New Crankset - who dis? ⚙️",
    "link": "https://www.strava.com/activities/10455595070",
    "description": "Neue Kurbel zügig einfahren🫡🪩🫶🏻",
    "buddies": []
  },
  {
    "date": "28. Dezember 2023",
    "activity": "Steckachsenroulette 🪩 🎰",
    "link": "https://www.strava.com/activities/10449684961",
    "description": "Croupier: Julian 🤓\nTisch: Hinterachse 🛞 \nJulian mit lockerer Steckachse, kurz vorm Selbstausbau.\nKurze Kaffeepause bei Günni P.🫶🏻☕️",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "27. Dezember 2023",
    "activity": "After-Feiertagsdrahra🎄",
    "link": "https://www.strava.com/activities/10445501830",
    "description": "Mit Kollegin Birbamer & Kollege Wenzel in die Dunkelheit 🌚\nKleines Trainspotten inklusive 🚃",
    "buddies": [
      "Julian Wenzel",
      "Anna Birbamer"
    ]
  },
  {
    "date": "Am 26. Dezember 2023 um 11:56",
    "activity": "Wasserspaß💧 🚣",
    "link": "https://www.strava.com/activities/10439271505",
    "description": "Immer wieder durch überschwemmte Wege & mehr Wind als geglaubt🤙🏻🥸",
    "buddies": []
  },
  {
    "date": "Am 24. Dezember 2023 um 09:41",
    "activity": "Zwift - Endurance #1 in London",
    "link": "https://www.strava.com/activities/10428517009",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. Dezember 2023 um 12:00",
    "activity": "Zwift - Taper Intervals in London",
    "link": "https://www.strava.com/activities/10424077692",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 17. Dezember 2023 um 10:42",
    "activity": "Back in the game kids🤙🏻",
    "link": "https://www.strava.com/activities/10393817691",
    "description": "Mit ordentlich Minus-Fitness wieder am Rad🫡\nNachtrag: Comeback war fürs hintere Tubeless-Ventil zu viel, sodass es sich vertschüsst hat🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 7. Dezember 2023 um 01:42",
    "activity": "Indoor Trainer 🇲🇻",
    "link": "https://www.strava.com/activities/10340640723",
    "description": "GA1 noch kurz vorm Heimflug🙃",
    "buddies": []
  },
  {
    "date": "Am 2. Dezember 2023 um 03:13",
    "activity": "Indoor Trainer 🇲🇻",
    "link": "https://www.strava.com/activities/10313905540",
    "description": "GA2",
    "buddies": []
  },
  {
    "date": "Am 1. Dezember 2023 um 03:33",
    "activity": "Laufband #2 🇲🇻",
    "link": "https://www.strava.com/activities/10309299914",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 28. November 2023 um 03:09",
    "activity": "Indoor Trainer",
    "link": "https://www.strava.com/activities/10292956334",
    "description": "Again GA1",
    "buddies": []
  },
  {
    "date": "Am 27. November 2023 um 03:54",
    "activity": "Laufband 🇲🇻",
    "link": "https://www.strava.com/activities/10288004652",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 26. November 2023 um 03:35",
    "activity": "Indoor Trainer",
    "link": "https://www.strava.com/activities/10282085892",
    "description": "GA1",
    "buddies": []
  },
  {
    "date": "Am 24. November 2023 um 10:43",
    "activity": "Zwift - Zone 2 #1 in Paris",
    "link": "https://www.strava.com/activities/10272838616",
    "description": "Letztes Training vor da Urlaubsverfettung 🫃🏻",
    "buddies": []
  },
  {
    "date": "19. November 2023",
    "activity": "Teambuilding Essenther-Straße 🤓📝🧮",
    "link": "https://www.strava.com/activities/10246629502",
    "description": "3/4 des Teams anwesend 👨‍🏫 \nMit de Presser unterwegs 🚲 klassisch wieder fett in den Regen gekommen🫶🏻🧼",
    "buddies": [
      "Julian Wenzel",
      "Anna Birbamer"
    ]
  },
  {
    "date": "Am 15. November 2023 um 17:11",
    "activity": "Zwift - INEOS Grenadiers Virtual Training Camp | The Cafe Ride in Watopia",
    "link": "https://www.strava.com/activities/10223799322",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 14. November 2023 um 17:42",
    "activity": "Zwift - Strength Endurance + REV for :15 seconds in Innsbruck",
    "link": "https://www.strava.com/activities/10217872421",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 11. November 2023 um 09:11",
    "activity": "Schusswechsel 🐗🦌🧨",
    "link": "https://www.strava.com/activities/10197836796",
    "description": "Mitten in einer Jagd gelandet🤓🫶🏻☠️\nAnsonsten ziemlich windig 💨",
    "buddies": []
  },
  {
    "date": "Am 10. November 2023 um 15:17",
    "activity": "Same same but different☁️",
    "link": "https://www.strava.com/activities/10194316940",
    "description": "Auf Birbamer‘s Standard-Wegen unterwegs🤓\nSchön finster am Schluss…das Mottenlicht brachte nicht den großen Erfolg 💡🪰",
    "buddies": []
  },
  {
    "date": "Am 4. November 2023 um 10:31",
    "activity": "Hot 🔥 n‘ Cold 🥶",
    "link": "https://www.strava.com/activities/10158148740",
    "description": "In today‘s episode: Getting komooted twice and chased by a dog 🐕",
    "buddies": []
  },
  {
    "date": "Am 27. Oktober 2023 um 10:27",
    "activity": "Zwift -  Tabata in Richmond",
    "link": "https://www.strava.com/activities/10112070705",
    "description": "Sünden vom Vorabend abgebüßt🆘",
    "buddies": []
  },
  {
    "date": "26. Oktober 2023",
    "activity": "Feiertagsfahrt mit Kollegin Essentherstraße🕺🏻",
    "link": "https://www.strava.com/activities/10106695508",
    "description": "Mit da Druckerin aufs Waxeneck 🖨️ \nFahrtechnik Skills on Point bei da Kollegin, mehrmals ins Laub geslidet/gedroppt ohne Sturz🔝🍂\nRunter mit vielen Senioren und wüsten Beschimpfungen 🤷🏻‍♂️🙆🏻",
    "buddies": [
      "Anna Birbamer"
    ]
  },
  {
    "date": "Am 24. Oktober 2023 um 16:49",
    "activity": "Zwift - 2 by 2 in London",
    "link": "https://www.strava.com/activities/10096522287",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. Oktober 2023 um 16:43",
    "activity": "Zwift - Foundation in London",
    "link": "https://www.strava.com/activities/10090584296",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 14. Oktober 2023 um 15:27",
    "activity": "This isn‘t every day windy…This is advanced windy 💨",
    "link": "https://www.strava.com/activities/10037503326",
    "description": "Viel Wind, wenig Rückenwind🆘🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 11. Oktober 2023 um 15:42",
    "activity": "Tropenhaus 🏝️",
    "link": "https://www.strava.com/activities/10019431751",
    "description": "Ärger wie im Hochsommer💧",
    "buddies": []
  },
  {
    "date": "Am 8. Oktober 2023 um 10:05",
    "activity": "Waxeneck Classics is still a thing🫶🏻",
    "link": "https://www.strava.com/activities/9998345297",
    "description": "Mit viiiiiiiel Wind 💨",
    "buddies": []
  },
  {
    "date": "Am 7. Oktober 2023 um 09:48",
    "activity": "Kansas is calling 📞 🇺🇸",
    "link": "https://www.strava.com/activities/9992792371",
    "description": "Schöne Gravel-Highways erwischt 🫶🏻 leider viel Gegenwind und eine Forstsperre erwischt🤓🆘",
    "buddies": []
  },
  {
    "date": "3. Oktober 2023",
    "activity": "Bruchpiloten Vol. 2 alias Beidlpracker 🍆",
    "link": "https://www.strava.com/activities/9969754279",
    "description": "Julian mit Totalschaden auf der Anti-Ideallinie 🚳🆘 Kleine Sanitätshilfesession inklusive🚑\nKollege Niklas mit Wheelie Fail🦽\nHeimfahrt Kollege Wenzel im Sprinter🚚",
    "buddies": [
      "Martin Nitsche",
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 2. Oktober 2023 um 16:06",
    "activity": "Graveln die Zweite - Sturzfrei🫡🙋🏻‍♂️",
    "link": "https://www.strava.com/activities/9962610208",
    "description": "Dieses mal ohne Sturz🫶🏻 Schaltauge dank Pfusch wieder passgenau zuwedraht👏🏻",
    "buddies": []
  },
  {
    "date": "Am 29. September 2023 um 14:55",
    "activity": "New (Gravel-)Bike … 1st Crash 💥",
    "link": "https://www.strava.com/activities/9943868031",
    "description": "Testfahrt neues Gravelbike. Ist hald doch kein MTB und Spurrillen sind jz mein Feind.\nHeimfahrt dafür linksseitig aero-optimierter Lenker👌🏻🤓",
    "buddies": []
  },
  {
    "date": "17. September 2023",
    "activity": "Grav‘ler mit Karin 🪨",
    "link": "https://www.strava.com/activities/9865802471",
    "description": "Auf den Peilstein mit Karin und einer Menge Senioren 👴🏻 👵🏻",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 16. September 2023 um 10:32",
    "activity": "No-Brainer 🚫🧠🚫",
    "link": "https://www.strava.com/activities/9859226544",
    "description": "Back to Hochprofillaufräder🫶🏻 guter Einstand mit Wind 💨",
    "buddies": []
  },
  {
    "date": "Am 12. September 2023 um 16:02",
    "activity": "Tuesday Club👌🏻🚲",
    "link": "https://www.strava.com/activities/9834996011",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. September 2023 um 11:01",
    "activity": "Grenzgänger 🇸🇰 🇦🇹 🍺",
    "link": "https://www.strava.com/activities/9822427346",
    "description": "Von Bratislava via Wien nach Berndorf, again mit den Boys🤓🥰\nGrenzwertige Restfettn mit paar Reparatur-Krügerl gekontert🫶🏻🍺",
    "buddies": []
  },
  {
    "date": "Am 9. September 2023 um 10:01",
    "activity": "Bratan-Lover ♥️ 🇸🇰",
    "link": "https://www.strava.com/activities/9815385190",
    "description": "Mit den FH-Boyz nach Bratislava.\nBis Wien: Trainingsfahrt 🚲 \nAb Wien: Leberdehnung 🍺",
    "buddies": []
  },
  {
    "date": "Am 8. September 2023 um 14:09",
    "activity": "Climber‘s Choice ⛰️",
    "link": "https://www.strava.com/activities/9808526548",
    "description": "Heftige Teilstrecken mit 20%-Steigung🥵 Allerdings perfektes Wetter👌🏻👏🏻",
    "buddies": []
  },
  {
    "date": "Am 7. September 2023 um 17:05",
    "activity": "Lernkurve 📚",
    "link": "https://www.strava.com/activities/9802824767",
    "description": "Dieses mal ohne Verfahren👌🏻",
    "buddies": []
  },
  {
    "date": "Am 5. September 2023 um 16:56",
    "activity": "Back in the (MTB) Game 🚵🏼‍♂️",
    "link": "https://www.strava.com/activities/9789130619",
    "description": "Tubeless Setup testen🔥👌🏻",
    "buddies": []
  },
  {
    "date": "Am 22. August 2023 um 18:32",
    "activity": "Evening Ride",
    "link": "https://www.strava.com/activities/9700034191",
    "description": "Gemütliches Dahinrollen.",
    "buddies": []
  },
  {
    "date": "Am 20. August 2023 um 05:59",
    "activity": "Early 🐦 Gran Fondo",
    "link": "https://www.strava.com/activities/9683170160",
    "description": "Super ruhig und angenehme Temperaturen🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 19. August 2023 um 10:20",
    "activity": "Hoher Lindkogel über Zobelhof",
    "link": "https://www.strava.com/activities/9677915902",
    "description": "Angenehm wenig los, nicht zu heiß👌🏻🫶🏻",
    "buddies": []
  },
  {
    "date": "16. August 2023",
    "activity": "Blitzschlag statt Hitzschlag ⚡️",
    "link": "https://www.strava.com/activities/9661181399",
    "description": "Mit Kollege Nitsche und fettem Gewitter🫣\nLängere Regen-Wartepausen inklusive ☔️\nKleines Meet&Greet mit Kollege Amazon Fahrer der fett im Schlamm stecken blieben is 🚗",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 15. August 2023 um 10:47",
    "activity": "No limit 💥",
    "link": "https://www.strava.com/activities/9651306875",
    "description": "Sehr heiß, aber guter flow🛥️🚂",
    "buddies": []
  },
  {
    "date": "Am 14. August 2023 um 13:35",
    "activity": "Kitzschwitz 💦",
    "link": "https://www.strava.com/activities/9645263949",
    "description": "Die letzten Alkreste aus dem Körper befördern.\nErste Probefahrt mit MTB-Klickpedalen 🔥",
    "buddies": []
  },
  {
    "date": "11. August 2023",
    "activity": "Wurzndrahra 2023",
    "link": "https://www.strava.com/activities/9625845726",
    "description": "Leicht holpriger Start 🚽 beim Kollegen Winkler. Danach guade Presspartie mit den Boyz und dem Gurl.",
    "buddies": [
      "Martin Nitsche",
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "8. August 2023",
    "activity": "Pizza-Pressfahrt 🍕",
    "link": "https://www.strava.com/activities/9606056673",
    "description": "Again mit Boys. Dubiose Pizzeria inklusive🫡\nAber mit gratis Schnaps.",
    "buddies": [
      "Max Tretthann",
      "Martin Nitsche"
    ]
  },
  {
    "date": "7. August 2023",
    "activity": "Kitzbüheler Horn 🐐",
    "link": "https://www.strava.com/activities/9599593041",
    "description": "Mit den Boyz. Gerade dem Regen entkommen, der Restfettn leider nicht 🤷🏻‍♂️🍻\nObligatorische Graveleinlage inklusive🫶🏻",
    "buddies": [
      "Max Tretthann"
    ]
  },
  {
    "date": "Am 29. Juli 2023 um 15:09",
    "activity": "Afternoon Mountain Bike Ride",
    "link": "https://www.strava.com/activities/9543717559",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 28. Juli 2023 um 15:01",
    "activity": "MTB Klassiker",
    "link": "https://www.strava.com/activities/9537491988",
    "description": "Auf Zeiten Jagd ⏰\nEndlich wieder am MTB🎉",
    "buddies": []
  },
  {
    "date": "Am 22. Juli 2023 um 17:36",
    "activity": "Kaindorf 24h Ultraradchallenge #5",
    "link": "https://www.strava.com/activities/9501029463",
    "description": "Fette Regendusche als Letzter🫶🏻",
    "buddies": []
  },
  {
    "date": "Am 22. Juli 2023 um 13:41",
    "activity": "Kaindorf 24h Ultraradchallenge #4",
    "link": "https://www.strava.com/activities/9499448940",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 22. Juli 2023 um 09:38",
    "activity": "Kaindorf 24h Ultraradchallenge #3",
    "link": "https://www.strava.com/activities/9497942742",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 22. Juli 2023 um 05:39",
    "activity": "Kaindorf 24h Ultraradchallenge #2",
    "link": "https://www.strava.com/activities/9497270750",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 21. Juli 2023 um 19:46",
    "activity": "Kaindorf 24h Ultraradchallenge #1",
    "link": "https://www.strava.com/activities/9495425979",
    "description": "",
    "buddies": []
  },
  {
    "date": "19. Juli 2023",
    "activity": "Pensionistenfahrt.",
    "link": "https://www.strava.com/activities/9482502992",
    "description": "",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 16. Juli 2023 um 05:44",
    "activity": "Im Puszta Kochtopf 💨 👨‍🍳 🇭🇺",
    "link": "https://www.strava.com/activities/9462127811",
    "description": "Weichgekocht wie Puszta-Würstel dank ordentlicher Hitze 🔥 Dazu als Beilage noch härterer Nordwind zur Abrundung der Sache🫶🏻🤓",
    "buddies": []
  },
  {
    "date": "15. Juli 2023",
    "activity": "Schwitzkasten im 3er Pack.",
    "link": "https://www.strava.com/activities/9457923239",
    "description": "Mit den Boys. Julian wieder ohne aufgeladene Akkus 🔋.",
    "buddies": [
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 11. Juli 2023 um 17:35",
    "activity": "Hasenjagd 🐰 🔪",
    "link": "https://www.strava.com/activities/9431837616",
    "description": "Fast einen Hasen beim Hart-Downhill erwischt 🐰 💥.\nFlyby von Kollege Julian Wenzel mit seinem Roten Blitz ⚡️ und kurzes unfreiwilliges Trainspotting🤓 🚃",
    "buddies": []
  },
  {
    "date": "Am 10. Juli 2023 um 17:42",
    "activity": "Abendrunde ☀️",
    "link": "https://www.strava.com/activities/9425646778",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 9. Juli 2023 um 18:55",
    "activity": "Restfettn Boost ⚡️",
    "link": "https://www.strava.com/activities/9420180119",
    "description": "Klassiker.",
    "buddies": []
  },
  {
    "date": "Am 8. Juli 2023 um 05:29",
    "activity": "Hocheck Kooperation ⛰️",
    "link": "https://www.strava.com/activities/9409419771",
    "description": "Kollegin Winkler mit‘m Haxen-Taxi aufs Hocheck 🦶 🦶 \nKollege Winkler per MTB 🚲 \nGemeinsamer Treffpunkt 07:00 am Hocheck🫶🏻🥸",
    "buddies": []
  },
  {
    "date": "Am 7. Juli 2023 um 15:57",
    "activity": "Geräuschkulisse 📢",
    "link": "https://www.strava.com/activities/9406481876",
    "description": "Kürzere Aufahrt als geplant…Pulley Wheels komplett trocken gelaufen = Geräuschkulisse wie ein Waffenrad🫶🏻🥸",
    "buddies": []
  },
  {
    "date": "Am 1. Juli 2023 um 10:15",
    "activity": "Hohe Wand ⛰️",
    "link": "https://www.strava.com/activities/9367416116",
    "description": "Durch 2 Klimazonen gependelt - Tropen & Arktis 🏝️ 🐻‍❄️ \nZum Abschluss noch gscheid Gegenwind.",
    "buddies": []
  },
  {
    "date": "30. Juni 2023",
    "activity": "Drahra mit Karen 🚲",
    "link": "https://www.strava.com/activities/9362862200",
    "description": "Angenehm wenig los🥸🫶🏻",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "29. Juni 2023",
    "activity": "Concierge service 🎩",
    "link": "https://www.strava.com/activities/9357979528",
    "description": "Abholdienst Nitsche & Strasser.\nKleine Hopfenpause in Leobersdorf 🥸🍻",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "21. Juni 2023",
    "activity": "Morgensport by Karin.",
    "link": "https://www.strava.com/activities/9305173383",
    "description": "Mit da Presserin noch ein Pre-Work Workout eingelegt🥸",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 20. Juni 2023 um 17:04",
    "activity": "Drop it like it‘s hot🔥☀️",
    "link": "https://www.strava.com/activities/9302705287",
    "description": "Mit kleiner Gravel-Einlage 🪨",
    "buddies": []
  },
  {
    "date": "18. Juni 2023",
    "activity": "Raxplateau Teil 2",
    "link": "https://www.strava.com/activities/9287027345",
    "description": "Mit die Ziaga schnell owe🤓",
    "buddies": [
      "Niklas Strasser",
      "Karin Winkler",
      "Julian Wenzel",
      "Martin Nitsche"
    ]
  },
  {
    "date": "17. Juni 2023",
    "activity": "Raxplateau Teil 1",
    "link": "https://www.strava.com/activities/9285272618",
    "description": "Mit de Guadn auf da Rax.",
    "buddies": [
      "Martin Nitsche",
      "Niklas Strasser",
      "Karin Winkler",
      "Julian Wenzel"
    ]
  },
  {
    "date": "16. Juni 2023",
    "activity": "Leitha-Huad 🎩",
    "link": "https://www.strava.com/activities/9277237796",
    "description": "Mit Kollege Nitsche einen kleinen Gegenwindpresser eingelegt🥰💨",
    "buddies": [
      "Martin Nitsche"
    ]
  },
  {
    "date": "Am 14. Juni 2023 um 17:06",
    "activity": "Back on Carbon ⚫️⚫️",
    "link": "https://www.strava.com/activities/9264966715",
    "description": "Endlich wieder Carbon-Laufräder🥰",
    "buddies": []
  },
  {
    "date": "Am 12. Juni 2023 um 17:30",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/9252279265",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 9. Juni 2023 um 12:27",
    "activity": "Wolkentanz ⛈️",
    "link": "https://www.strava.com/activities/9231948927",
    "description": "Immer zwischen den Gewitterzellen unterwegs👌🏻🤓\nBeine mit high-cadence vorm Sprint-Triathlon ausspülen 🌊",
    "buddies": []
  },
  {
    "date": "Am 8. Juni 2023 um 11:08",
    "activity": "Tropenlauf 🏝️",
    "link": "https://www.strava.com/activities/9225086378",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 8. Juni 2023 um 09:05",
    "activity": "Feiertagsfahrt.",
    "link": "https://www.strava.com/activities/9224816616",
    "description": "Komplett schwül und drückend💧☀️\nNeue max.-HR hätt ma auch gschafft🌚🫀",
    "buddies": []
  },
  {
    "date": "Am 7. Juni 2023 um 18:54",
    "activity": "Triathlon Training",
    "link": "https://www.strava.com/activities/9221515494",
    "description": "Kurz noch 1x schwimmen, um sicher zu sein, dass ma langsam is🙃👌🏻",
    "buddies": []
  },
  {
    "date": "Am 3. Juni 2023 um 08:56",
    "activity": "Iss ‘n Snickers 🍫🍬",
    "link": "https://www.strava.com/activities/9193407074",
    "description": "Auf halber Höhe Unterberg gestoppt von den Forstarbeitern🙃 ob sie mein Snickers wohl umgestimmt hätte?🤔🤓",
    "buddies": []
  },
  {
    "date": "Am 2. Juni 2023 um 16:57",
    "activity": "Friyaayy ☀️",
    "link": "https://www.strava.com/activities/9189108052",
    "description": "",
    "buddies": []
  },
  {
    "date": "27. Mai 2023",
    "activity": "Mille grazie Giro d‘Italia 🇮🇹",
    "link": "https://www.strava.com/activities/9151866722",
    "description": "Mit der Ziagerin und den 2 Ziagern nach Italien zum Giro d‘Italia 🚲 \nPerfekter Abschluss mit Umfaller auf da Tankstelle ⛽️",
    "buddies": [
      "Resa Kühmayer",
      "Niklas Strasser",
      "Max Tretthann"
    ]
  },
  {
    "date": "26. Mai 2023",
    "activity": "3-Länder Tour 🇦🇹 🇮🇹 🇸🇮",
    "link": "https://www.strava.com/activities/9143886726",
    "description": "Ziel: Mangart in Slowenien mit geilem Schnee am Schluss 🏔️ ❄️ \nMit Niki und späterem Dazustoßen der Teilzeit-Unterstützung Resa & Maxi 🚲",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "21. Mai 2023",
    "activity": "Ein Eis bitte! 🍦",
    "link": "https://www.strava.com/activities/9112293943",
    "description": "Kleines Blatt - Nein Danke. Julian mit Schaltakku Fail und großem Blatt als Tagesaufgabe🫡",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 20. Mai 2023 um 10:44",
    "activity": "MTB Hoher Lindkogel / Zobelhof",
    "link": "https://www.strava.com/activities/9105406609",
    "description": "Schön warm und windig👌🏻",
    "buddies": []
  },
  {
    "date": "Am 19. Mai 2023 um 09:34",
    "activity": "Slippery Gatsch.",
    "link": "https://www.strava.com/activities/9098856518",
    "description": "Wegführung über die Bierwiese, leider kein Bier gefunden🍻🙃",
    "buddies": []
  },
  {
    "date": "Am 18. Mai 2023 um 10:11",
    "activity": "Morning Ride",
    "link": "https://www.strava.com/activities/9092656029",
    "description": "Wiedermal mit Wind zur Abwechslung 🙃",
    "buddies": []
  },
  {
    "date": "Am 13. Mai 2023 um 10:22",
    "activity": "Empfehlung der Küche: Nebelsuppe 🍜",
    "link": "https://www.strava.com/activities/9062482943",
    "description": "Erstes mal Hocheck ⛰️ das Jahr. Wiedermal komplett nass und nebelig, dafür wenig los👌🏻🙂",
    "buddies": []
  },
  {
    "date": "Am 7. Mai 2023 um 10:41",
    "activity": "Senioren Rambo 🔪",
    "link": "https://www.strava.com/activities/9026491476",
    "description": "Viele desorientierte Senioren unterwegs 👵🏻👴🏻",
    "buddies": []
  },
  {
    "date": "1. Mai 2023",
    "activity": "Feiertagsfahrt mit Kollegin Winkler⛵️",
    "link": "https://www.strava.com/activities/8990499903",
    "description": "Viel Wind und viel zu wenig zum Essen dabei gehabt🙃",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 23. April 2023 um 09:50",
    "activity": "Sonntagsfahrt☀️",
    "link": "https://www.strava.com/activities/8941379932",
    "description": "Wiedermal ein Klassiker am Sonntag🫡",
    "buddies": []
  },
  {
    "date": "Am 22. April 2023 um 09:25",
    "activity": "Longride ☀️",
    "link": "https://www.strava.com/activities/8936430816",
    "description": "Mal den Wasserstand vom Neusiedlersee abchecken🤓 Pflichtbewusst mit Sonnencreme, dieses mal kein Brandfiasko 🦀🦀🦀",
    "buddies": []
  },
  {
    "date": "16. April 2023",
    "activity": "Duschfahrt 🚿 2023 #1",
    "link": "https://www.strava.com/activities/8900329092",
    "description": "Mit Maxi & Niki🤓",
    "buddies": [
      "Niklas Strasser",
      "Max Tretthann"
    ]
  },
  {
    "date": "Am 15. April 2023 um 11:14",
    "activity": "Lunch Run",
    "link": "https://www.strava.com/activities/8893493573",
    "description": "Heute mit gratis Schwimmeinheit. 🌧️",
    "buddies": []
  },
  {
    "date": "Am 10. April 2023 um 07:00",
    "activity": "Wachauer Wachbirn 🍐",
    "link": "https://www.strava.com/activities/8866249257",
    "description": "Leider noch keine Birnen, dafür schöne Marillenblüte 🌸 \nEndlich mal gutes Wetter und Wind aus der richtigen Richtung👌🏻🤌🏻\nViele Hasen und Biber unterwegs 🐰 🦫 \nTestfahrt vom Long-Run/Mehrtages Setup🧳",
    "buddies": []
  },
  {
    "date": "Am 10. April 2023 um 04:35",
    "activity": "Bahnhof 🚃",
    "link": "https://www.strava.com/activities/8863263376",
    "description": "Thank you for goin‘ ÖBB🤓",
    "buddies": []
  },
  {
    "date": "Am 8. April 2023 um 10:12",
    "activity": "Zwift - Zwift Pro Training Camp: INEOS Grenadiers | Cameron Wurf in London",
    "link": "https://www.strava.com/activities/8852191338",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 7. April 2023 um 16:04",
    "activity": "Zwift - Power + Endurance in France",
    "link": "https://www.strava.com/activities/8848404471",
    "description": "Neue Schuhe einfahren 👟",
    "buddies": []
  },
  {
    "date": "Am 6. April 2023 um 18:44",
    "activity": "Zwift - Coryn Labecki: Sprint workout in France",
    "link": "https://www.strava.com/activities/8843614288",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 5. April 2023 um 19:17",
    "activity": "Zwift - Cadence Into Over-Unders in London",
    "link": "https://www.strava.com/activities/8838337551",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 2. April 2023 um 12:20",
    "activity": "Zwift - Zwift Pro Training Camp: Team BikeExchange-Jayco | Lawson Craddock on Gotham Grind Reverse in New York",
    "link": "https://www.strava.com/activities/8818285346",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 31. März 2023 um 14:16",
    "activity": "☀️💧🐌",
    "link": "https://www.strava.com/activities/8808030771",
    "description": "Wo Bier?🍻",
    "buddies": []
  },
  {
    "date": "Am 26. März 2023 um 08:16",
    "activity": "☀️☀️☀️",
    "link": "https://www.strava.com/activities/8778425717",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 25. März 2023 um 15:18",
    "activity": "Wiederholungstäter🕵🏻‍♂️",
    "link": "https://www.strava.com/activities/8775358070",
    "description": "Bestes Aprilwetter ☀️ 🌧️ 💨",
    "buddies": []
  },
  {
    "date": "Am 24. März 2023 um 13:53",
    "activity": "Fast Track 🎢",
    "link": "https://www.strava.com/activities/8769267243",
    "description": "Mit ordentlicher Wochenaggression paar PR zerstören 💥 \nErste kurz/kurz Ausfahrt das Jahr 👕🩳",
    "buddies": []
  },
  {
    "date": "Am 23. März 2023 um 05:11",
    "activity": "Zwift - Zwift Pro Training Camp: INEOS Grenadiers | Team Workout 2 in London",
    "link": "https://www.strava.com/activities/8761916214",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 19. März 2023 um 08:46",
    "activity": "Klassiker 🚲",
    "link": "https://www.strava.com/activities/8739136078",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 18. März 2023 um 13:45",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/8734907385",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 17. März 2023 um 14:47",
    "activity": "Zwift - Wave Rider in Scotland",
    "link": "https://www.strava.com/activities/8729561946",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 15. März 2023 um 17:26",
    "activity": "Zwift - Zwift Pro Training Camp: Jumbo-Visma | Women's Team in Paris",
    "link": "https://www.strava.com/activities/8719409429",
    "description": "HR Gurt sagt leise Tschüss 🫡",
    "buddies": []
  },
  {
    "date": "Am 14. März 2023 um 18:34",
    "activity": "Zwift - Roule Ma Poule in France",
    "link": "https://www.strava.com/activities/8714251475",
    "description": "",
    "buddies": []
  },
  {
    "date": "11. März 2023",
    "activity": "Bum zua aufn Berg.",
    "link": "https://www.strava.com/activities/8696345497",
    "description": "Mit 1 Flasche Sekt intus bum zua aufn Berg🦀🔥",
    "buddies": [
      "Martin Nitsche",
      "Julian Wenzel",
      "Philipp Fließenschuh"
    ]
  },
  {
    "date": "Am 10. März 2023 um 09:09",
    "activity": "MTB-Freitagstour",
    "link": "https://www.strava.com/activities/8690211131",
    "description": "Hitzekampf🔥🦀",
    "buddies": []
  },
  {
    "date": "Am 4. März 2023 um 09:44",
    "activity": "Wind-Rollercoaster 💨🎢",
    "link": "https://www.strava.com/activities/8658177240",
    "description": "60km Ultra-Boost nach Rust🛰️ 56km reinste Windarbeit zurück nach Berndorf👷🏻\nEine Fahrt ohne Wind wär mal wieder geil🫡🫠",
    "buddies": []
  },
  {
    "date": "Am 3. März 2023 um 14:31",
    "activity": "Klassiker am Freitag🫡",
    "link": "https://www.strava.com/activities/8652982491",
    "description": "Back on track after 🤧",
    "buddies": []
  },
  {
    "date": "25. Februar 2023",
    "activity": "Windkanal 💨",
    "link": "https://www.strava.com/activities/8618877329",
    "description": "Dumb ways to die. Mit Schnupfen und fettem Wind radln gehen🌚🦀\nMit Julian noch eine kleine Mödlinger Sightseeingtour eingelegt 🏙️",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 18. Februar 2023 um 10:10",
    "activity": "Mandling-Geyersattel-Berndorf",
    "link": "https://www.strava.com/activities/8580520920",
    "description": "Windig und Matsch bis zur Reifenblockade😵‍💫🙃",
    "buddies": []
  },
  {
    "date": "Am 17. Februar 2023 um 15:57",
    "activity": "Abholfahrt🚗",
    "link": "https://www.strava.com/activities/8576616627",
    "description": "Auto von da Werkstatt abholen🫡👌🏻",
    "buddies": []
  },
  {
    "date": "12. Februar 2023",
    "activity": "Wien-Tulln-Wien",
    "link": "https://www.strava.com/activities/8549186983",
    "description": "Mit Niki und 2 Bier🫡🍻",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 11. Februar 2023 um 11:02",
    "activity": "Sommer-Klassiker im Winter ❄️",
    "link": "https://www.strava.com/activities/8541844929",
    "description": "Erste Testfahrt mit neuen Aero-Laufrädern🫡🔥",
    "buddies": []
  },
  {
    "date": "Am 10. Februar 2023 um 15:48",
    "activity": "Zwift - Zwift Pro Training Camp: INEOS Grenadiers | Tom Pidcock in France",
    "link": "https://www.strava.com/activities/8537754825",
    "description": "",
    "buddies": []
  },
  {
    "date": "5. Februar 2023",
    "activity": "Bier-Wanderung Team Essentherstraße 🍻",
    "link": "https://www.strava.com/activities/8510707611",
    "description": "",
    "buddies": [
      "Julian Wenzel",
      "Anna Birbamer",
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 5. Februar 2023 um 08:41",
    "activity": "Zwift - Coryn Labecki: Sprint workout in New York",
    "link": "https://www.strava.com/activities/8507401465",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 4. Februar 2023 um 10:34",
    "activity": "Zwift - Zwift Pro Training Camp: Jumbo-Visma | Marianne Vos: TT Workout in London",
    "link": "https://www.strava.com/activities/8502235725",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 3. Februar 2023 um 14:58",
    "activity": "Zwift - Devedeset in Yorkshire",
    "link": "https://www.strava.com/activities/8498466974",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 2. Februar 2023 um 19:05",
    "activity": "Zwift - Zwift Pro Training Camp: Team BikeExchange-Jayco | Jesse Allen in France",
    "link": "https://www.strava.com/activities/8494408907",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 31. Januar 2023 um 17:43",
    "activity": "Zwift - SST (Short) in France",
    "link": "https://www.strava.com/activities/8482981081",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 28. Januar 2023 um 10:57",
    "activity": "Zwift - Hill Pyramid At Threshold in France",
    "link": "https://www.strava.com/activities/8464437293",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 27. Januar 2023 um 14:50",
    "activity": "Zwift - Zwift Pro Training Camp: INEOS Grenadiers | Team Workout 1 on R.G.V. in Yorkshire",
    "link": "https://www.strava.com/activities/8460312860",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 25. Januar 2023 um 17:26",
    "activity": "Zwift - R.G.V. in France",
    "link": "https://www.strava.com/activities/8450536517",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 24. Januar 2023 um 18:07",
    "activity": "Zwift - Zwift Pro Training Camp: Team BikeExchange-Jayco | Lawson Craddock in London",
    "link": "https://www.strava.com/activities/8445150361",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 22. Januar 2023 um 10:26",
    "activity": "Zwift - The Mega Pretzel in Watopia",
    "link": "https://www.strava.com/activities/8433510219",
    "description": "Dumme Ideen am Sonntag🫡 Jänner-Alfonso",
    "buddies": []
  },
  {
    "date": "Am 21. Januar 2023 um 12:04",
    "activity": "Zwift - FTP Test in France",
    "link": "https://www.strava.com/activities/8427152986",
    "description": "FTP: 254W 😬🤦🏻",
    "buddies": []
  },
  {
    "date": "Am 19. Januar 2023 um 18:48",
    "activity": "Zwift - Sarah Storey - Individual Pursuit in Innsbruck",
    "link": "https://www.strava.com/activities/8418615084",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 18. Januar 2023 um 19:06",
    "activity": "Zwift - Zwift Pro Training Camp: Team BikeExchange-Jayco | Lawson Craddock in Innsbruck",
    "link": "https://www.strava.com/activities/8413485338",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 17. Januar 2023 um 17:44",
    "activity": "Zwift - Zwift Pro Training Camp: INEOS Grenadiers | Team Workout 2 in France",
    "link": "https://www.strava.com/activities/8407443287",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 16. Januar 2023 um 19:14",
    "activity": "Zwift - Jon's Mix in France",
    "link": "https://www.strava.com/activities/8402584064",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 14. Januar 2023 um 10:38",
    "activity": "Eisernes Tor 🏰",
    "link": "https://www.strava.com/activities/8390340033",
    "description": "Mit Julian & gutem Wetter. \nInklusive Abstieg übern Lenker🫡🍻",
    "buddies": []
  },
  {
    "date": "Am 11. Januar 2023 um 19:06",
    "activity": "Zwift - Watopia's Waistband in Watopia",
    "link": "https://www.strava.com/activities/8376072127",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. Januar 2023 um 19:15",
    "activity": "Zwift - Grin And Bear It in France",
    "link": "https://www.strava.com/activities/8370439009",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 7. Januar 2023 um 13:09",
    "activity": "Waxeneck Classics☀️",
    "link": "https://www.strava.com/activities/8352422270",
    "description": "Ziemlich rutschig und zu viele Ausflügler unterwegs, Downhill kaum Tempo🥸",
    "buddies": []
  },
  {
    "date": "Am 6. Januar 2023 um 12:18",
    "activity": "Anninger runter ⬇️",
    "link": "https://www.strava.com/activities/8346863107",
    "description": "Owa vom Andinger, kleiner Ausflug in Kurpark Baden🦽",
    "buddies": []
  },
  {
    "date": "Am 6. Januar 2023 um 09:44",
    "activity": "Anninger rauf ⛰️",
    "link": "https://www.strava.com/activities/8346862907",
    "description": "Mit den Boys auf‘n Andinger, gleich mal bum zua gspeichert🥸",
    "buddies": []
  },
  {
    "date": "4. Januar 2023",
    "activity": "Unterberg zum Sonnenaufgang ☀️",
    "link": "https://www.strava.com/activities/8335468294",
    "description": "Mit Team Essentherstraße🫡 Alkoholkonsum wiedermal höher als Wasseraufnahme🍻🥸\nPistenraupe Karin nimmt die Dorfmeisterpiste senkrecht in Rekordzeit🚀",
    "buddies": [
      "Julian Wenzel",
      "Anna Birbamer",
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 3. Januar 2023 um 10:25",
    "activity": "Zwift - Big Loop in Watopia",
    "link": "https://www.strava.com/activities/8330522115",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 2. Januar 2023 um 13:38",
    "activity": "Zwift - Three Little Sisters in Watopia",
    "link": "https://www.strava.com/activities/8325568299",
    "description": "1st try / 1st ride 2023",
    "buddies": []
  },
  {
    "date": "31. Dezember 2022",
    "activity": "Tagessuppe mit den Guadn🥊🍲",
    "link": "https://www.strava.com/activities/8316645472",
    "description": "Silvestertrip inkl. Bierstopp🍻🐻",
    "buddies": [
      "Niklas Strasser",
      "Resa Kühmayer",
      "Julian Wenzel"
    ]
  },
  {
    "date": "28. Dezember 2022",
    "activity": "Beidlpracker-Runde reloaded🎄",
    "link": "https://www.strava.com/activities/8302346898",
    "description": "Mit Julian und dieses Jahr ohne Sturz🫡 mit kleiner Bierpause in Liesing 🍻",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 27. Dezember 2022 um 14:10",
    "activity": "Vollgas aufs Waxeneck🦝",
    "link": "https://www.strava.com/activities/8297952152",
    "description": "Schön sonnig, aber kalt ⛄️",
    "buddies": []
  },
  {
    "date": "26. Dezember 2022",
    "activity": "Radtour mit Karin🎄",
    "link": "https://www.strava.com/activities/8293241505",
    "description": "Endlich mal kein Wind💁🏻‍♂️",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 24. Dezember 2022 um 10:28",
    "activity": "Weihnachts-MTB-Tour 🎄",
    "link": "https://www.strava.com/activities/8285782570",
    "description": "Schön unangenehm windig, dafür mit etwas Sonne🌞",
    "buddies": []
  },
  {
    "date": "Am 11. Dezember 2022 um 11:25",
    "activity": "Hills of Flanders",
    "link": "https://www.strava.com/activities/8235427469",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. Dezember 2022 um 11:49",
    "activity": "Waxeneck Classics",
    "link": "https://www.strava.com/activities/8231122350",
    "description": "Windig und Kalt, aber freie Bahn🫡",
    "buddies": []
  },
  {
    "date": "Am 8. Dezember 2022 um 12:10",
    "activity": "Golfplatz Ausflug 🏌🏻",
    "link": "https://www.strava.com/activities/8223375960",
    "description": "Kleiner Ausflug übern Golfplatz inkl. Platzverweis🫡\nLag sicher an den Schuhen oder Kleidung🤔👕",
    "buddies": []
  },
  {
    "date": "Am 20. November 2022 um 17:03",
    "activity": "Tour of Slovenia | Ljubljana",
    "link": "https://www.strava.com/activities/8145566354",
    "description": "Irgendwas machen, nach nur saufen das Wochenende🫡",
    "buddies": []
  },
  {
    "date": "13. November 2022",
    "activity": "Zache Partie 💨",
    "link": "https://www.strava.com/activities/8111234857",
    "description": "Mit Niki und viel Gegenwind🙃🫠 großes Ziel das Bier daheim🍻",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "12. November 2022",
    "activity": "MTB Ausfahrt mit de Guadn🤿",
    "link": "https://www.strava.com/activities/8106791959",
    "description": "Mit Anna, Resa, Julian & Niki aufs Waxeneck🔥👌🏻",
    "buddies": [
      "Niklas Strasser",
      "Resa Kühmayer",
      "Anna Birbamer",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 8. November 2022 um 18:45",
    "activity": "Lake Pukaki | New Zealand",
    "link": "https://www.strava.com/activities/8088513708",
    "description": "Virtuell Ride mit Niki🫡🚲",
    "buddies": []
  },
  {
    "date": "Am 7. November 2022 um 16:12",
    "activity": "Valpiana - Tuscany",
    "link": "https://www.strava.com/activities/8082663910",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 5. November 2022 um 12:08",
    "activity": "Challenge Peguera Mallorca | Spain 40 km",
    "link": "https://www.strava.com/activities/8071535738",
    "description": "Noch leicht restfett🫡",
    "buddies": []
  },
  {
    "date": "Am 3. November 2022 um 18:37",
    "activity": "Stage 8 (Vaduz) - Tour de Suisse 2022",
    "link": "https://www.strava.com/activities/8063665120",
    "description": "Rouvy Testfahrt Indoor auf Elite Direto X",
    "buddies": []
  },
  {
    "date": "30. Oktober 2022",
    "activity": "Sonntagsausfahrt",
    "link": "https://www.strava.com/activities/8041712275",
    "description": "Mit Maxi und no chill für die Herzfrequenz🫡\nKurzer Kaffeestopp in Puchberg bei Traumwetter☀️",
    "buddies": [
      "Max Tretthann"
    ]
  },
  {
    "date": "29. Oktober 2022",
    "activity": "Fahrt am Morgen",
    "link": "https://www.strava.com/activities/8035366280",
    "description": "Mit Karin, Nebel und Sonne☀️",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "28. Oktober 2022",
    "activity": "Nebelsuppe 🥣",
    "link": "https://www.strava.com/activities/8032813909",
    "description": "Mit Niki und viel Nebel 🌫️",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "23. Oktober 2022",
    "activity": "MTB Fahrschule Winkler",
    "link": "https://www.strava.com/activities/8006441060",
    "description": "Fahrschule Winkler: Karin das Shredden beibringen 🚵🏼‍♂️ \nTop Fahrstunde bei geilem Wetter ☀️",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 18. Oktober 2022 um 16:58",
    "activity": "Afterwork 🍁",
    "link": "https://www.strava.com/activities/7982912537",
    "description": "",
    "buddies": []
  },
  {
    "date": "15. Oktober 2022",
    "activity": "Bum zua in Bratislava",
    "link": "https://www.strava.com/activities/7967772715",
    "description": "Kleiner Tagesausflug mit Niki & Julian 🚲 \nNach 3 Bier bumzua wieder heim im strömenden Regen 🌧️🫡",
    "buddies": [
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "8. Oktober 2022",
    "activity": "Seniorenausfahrt",
    "link": "https://www.strava.com/activities/7930973567",
    "description": "Mit Karen und schönem Wetter🔥",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "Am 4. Oktober 2022 um 17:31",
    "activity": "Auf ins Gemüse!🥗",
    "link": "https://www.strava.com/activities/7911181964",
    "description": "Paar nette Gravel-Highways gefunden👌🏻 Unterwegs mit dem alten KTM-Hu*nbock🐏, trotzdem flott die Kistn😅",
    "buddies": []
  },
  {
    "date": "Am 30. September 2022 um 15:45",
    "activity": "🎂-Ride",
    "link": "https://www.strava.com/activities/7890091816",
    "description": "Mit Niki & Maxi. Dank Maxi wiedermal „gmiadlich“🫡",
    "buddies": []
  },
  {
    "date": "24. September 2022",
    "activity": "Kaiserstein",
    "link": "https://www.strava.com/activities/7859462045",
    "description": "Via Fadensteig. Mit de Guadn und bissl Schnee ❄️",
    "buddies": [
      "Niklas Strasser",
      "Karin Winkler",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 18. September 2022 um 08:23",
    "activity": "VeloRun 2022",
    "link": "https://www.strava.com/activities/7826990841",
    "description": "Im Team Nikko PV 🌞 Fitness noch immer im Oasch…ab Kilometer 30 mit Krämpfen gehadert, halbwegs alles durchdruckt💁🏻‍♂️🫠",
    "buddies": []
  },
  {
    "date": "16. September 2022",
    "activity": "Lunch Ride",
    "link": "https://www.strava.com/activities/7816975391",
    "description": "Mit Zugpferd Maxi 🐎. Eigene Energielevel dank Antibiotika noch im Arsch🫠",
    "buddies": [
      "Max Tretthann"
    ]
  },
  {
    "date": "Am 7. September 2022 um 07:11",
    "activity": "Intervalle am Laufband",
    "link": "https://www.strava.com/activities/7767645009",
    "description": "4x5‘ Intervalle @ 5‘ Rest",
    "buddies": []
  },
  {
    "date": "Am 6. September 2022 um 08:01",
    "activity": "Laufband",
    "link": "https://www.strava.com/activities/7762129146",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 6. September 2022 um 07:27",
    "activity": "Fahrt am Trainer",
    "link": "https://www.strava.com/activities/7762012312",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 5. September 2022 um 08:25",
    "activity": "Fahrt am Trainer",
    "link": "https://www.strava.com/activities/7756846021",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 5. September 2022 um 08:03",
    "activity": "Laufband",
    "link": "https://www.strava.com/activities/7756778861",
    "description": "Laufband @ Casa Cook El Gouna",
    "buddies": []
  },
  {
    "date": "2. September 2022",
    "activity": "Freitagfahrt mit Maxi",
    "link": "https://www.strava.com/activities/7742475015",
    "description": "Erste größere Ausfahrt fürn Maxi mit dem Rennrad 🚲 🔥\nTop Wind erwischt 🌬",
    "buddies": [
      "Max Tretthann"
    ]
  },
  {
    "date": "Am 28. August 2022 um 15:36",
    "activity": "Komplette Oaschpartie",
    "link": "https://www.strava.com/activities/7715482252",
    "description": "Mit Maxi & Niki🔥\nKomplette Oachschpartie dank random Materialbruch inkl. Aufhängungszerstörung💁🏻‍♂️\nDanke für nix Schimano!",
    "buddies": []
  },
  {
    "date": "27. August 2022",
    "activity": "Rust Klassiker",
    "link": "https://www.strava.com/activities/7708812738",
    "description": "Mit Julian🕺🏻",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "26. August 2022",
    "activity": "Afterwork Runde",
    "link": "https://www.strava.com/activities/7703620186",
    "description": "Mit Niki🥰",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 24. August 2022 um 17:53",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/7693246636",
    "description": "Null Motivation = Null Pace 🕺🏻",
    "buddies": []
  },
  {
    "date": "20. August 2022",
    "activity": "Morning Run",
    "link": "https://www.strava.com/activities/7667674213",
    "description": "Mit Maxi und Niki🥰",
    "buddies": [
      "Niklas Strasser",
      "Max Tretthann"
    ]
  },
  {
    "date": "19. August 2022",
    "activity": "Random Tour",
    "link": "https://www.strava.com/activities/7664962005",
    "description": "Mit Niki und zum Glück kein Regen🍀🚴🏻‍♂️",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 17. August 2022 um 17:58",
    "activity": "Full Send Hart Uphill",
    "link": "https://www.strava.com/activities/7654581984",
    "description": "Ziemlich warm gewesen💁🏻‍♂️🔥🚴🏻‍♂️",
    "buddies": []
  },
  {
    "date": "Am 17. August 2022 um 06:11",
    "activity": "Morning Run",
    "link": "https://www.strava.com/activities/7651406011",
    "description": "GPS Signal wieder irgendwo…",
    "buddies": []
  },
  {
    "date": "14. August 2022",
    "activity": "Gratlspitze",
    "link": "https://www.strava.com/activities/7635933634",
    "description": "„Gmiadliche“ Wanderung",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "13. August 2022",
    "activity": "Seekarspitze",
    "link": "https://www.strava.com/activities/7630575833",
    "description": "Mit Karin und einer guten Kletterpartie am Schluss ⛰",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "7. August 2022",
    "activity": "Restfett aufs Hocheck",
    "link": "https://www.strava.com/activities/7597493942",
    "description": "",
    "buddies": [
      "Karin Winkler"
    ]
  },
  {
    "date": "6. August 2022",
    "activity": "Zerlegung am Samstag 🪓💣",
    "link": "https://www.strava.com/activities/7592722730",
    "description": "Mit Niki, spontan noch Hohe Wand angehängt, zwischendurch mal fette Gravelstrecke mitgnommen, Schluss nur mehr schiach☠️",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 4. August 2022 um 18:59",
    "activity": "Evening Ride",
    "link": "https://www.strava.com/activities/7582841545",
    "description": "Noch ziemlich heiß🔥 PR Jagd aufn Hart 🦌🔪",
    "buddies": []
  },
  {
    "date": "Am 2. August 2022 um 17:33",
    "activity": "Schnelle Afterwork Runde",
    "link": "https://www.strava.com/activities/7570849492",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 30. Juli 2022 um 14:27",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/7553864416",
    "description": "„You have to shock the muscles - Ok“\nNach 2,5 Monate Laufpause gleich mal „chillige“ 20km mit paar Höhenmeter 🦵🏻 🦵🏻",
    "buddies": []
  },
  {
    "date": "Am 28. Juli 2022 um 17:15",
    "activity": "Eisernes Tor MTB",
    "link": "https://www.strava.com/activities/7544490491",
    "description": "Mit Martin. Inklusive kleiner Session mit Aufschultern weil die Komoot-Routenempfehlung doch ned das Gelbe vom 🥚 war🤷🏻‍♂️",
    "buddies": []
  },
  {
    "date": "Am 25. Juli 2022 um 18:41",
    "activity": "Afterwork Waxi",
    "link": "https://www.strava.com/activities/7527301533",
    "description": "Full Send, nix los gwesen👌🏻",
    "buddies": []
  },
  {
    "date": "Am 23. Juli 2022 um 17:00",
    "activity": "24H Kaindorf Ultra Rad Challenge #6",
    "link": "https://www.strava.com/activities/7516054403",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. Juli 2022 um 13:51",
    "activity": "24H Kaindorf Ultra Rad Challenge #5",
    "link": "https://www.strava.com/activities/7514859569",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. Juli 2022 um 08:56",
    "activity": "24H Kaindorf Ultra Rad Challenge #4",
    "link": "https://www.strava.com/activities/7513326220",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 23. Juli 2022 um 05:08",
    "activity": "24H Kaindorf Ultra Rad Challenge #3",
    "link": "https://www.strava.com/activities/7512824954",
    "description": "Vergessen zu stoppen…32min40sek im Ziel",
    "buddies": []
  },
  {
    "date": "Am 23. Juli 2022 um 00:35",
    "activity": "24H Kaindorf Ultra Rad Challenge #2",
    "link": "https://www.strava.com/activities/7512210422",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 22. Juli 2022 um 19:47",
    "activity": "24H Kaindorf Ultra Rad Challenge #1",
    "link": "https://www.strava.com/activities/7511295233",
    "description": "",
    "buddies": []
  },
  {
    "date": "19. Juli 2022",
    "activity": "Abendrunde inkl. 🚜-Booster",
    "link": "https://www.strava.com/activities/7495492845",
    "description": "Mit Niki und top Wetter🔥",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "17. Juli 2022",
    "activity": "Sonntagsfick Deluxe 🔥🆘",
    "link": "https://www.strava.com/activities/7484593577",
    "description": "Mit Niki & Julian einmal das Vollprogramm 💯.",
    "buddies": [
      "Julian Wenzel",
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 13. Juli 2022 um 17:57",
    "activity": "Hocheck & Hafnerberg",
    "link": "https://www.strava.com/activities/7463684428",
    "description": "Mit Niki 🔥",
    "buddies": []
  },
  {
    "date": "2. Juli 2022",
    "activity": "Kitz-Abschlussfahrt.",
    "link": "https://www.strava.com/activities/7402919414",
    "description": "Mit Schnupfen komplett zerfickt.",
    "buddies": [
      "Julian Wenzel",
      "Resa Kühmayer",
      "Martin Nitsche",
      "Niklas Strasser"
    ]
  },
  {
    "date": "30. Juni 2022",
    "activity": "30er Ziaga 💨",
    "link": "https://www.strava.com/activities/7391879901",
    "description": "",
    "buddies": [
      "Martin Nitsche",
      "Niklas Strasser",
      "Julian Wenzel",
      "Resa Kühmayer"
    ]
  },
  {
    "date": "27. Juni 2022",
    "activity": "Fusch-Hochtor & zurück",
    "link": "https://www.strava.com/activities/7376045534",
    "description": "Großglockner Hochalpenstraße mit Resa, Julian, Martin, Nik und Robin👌🏻🔥",
    "buddies": [
      "Niklas Strasser",
      "Martin Nitsche",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 25. Juni 2022 um 09:42",
    "activity": "Hornissen-Fahrt 🐝",
    "link": "https://www.strava.com/activities/7364670655",
    "description": "Wenn dir beim Full-Send eine Hornisse auf die Lippen knallt und deine Lippe anschwillt👌🏻\nLippenaufspritzen á la Dr. Worseg.\nZwiebel-Behandlung inklusive 🧅",
    "buddies": []
  },
  {
    "date": "Am 20. Juni 2022 um 19:15",
    "activity": "Regenerationsfahrt mit MTB",
    "link": "https://www.strava.com/activities/7340891882",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 19. Juni 2022 um 05:09",
    "activity": "Neusiedlersee Tour",
    "link": "https://www.strava.com/activities/7332818484",
    "description": "Tagwache 4:30 Uhr. 60km Gegenwind, sonst top Wetter ☀️",
    "buddies": []
  },
  {
    "date": "17. Juni 2022",
    "activity": "Knoblauchbaguette-Fahrt",
    "link": "https://www.strava.com/activities/7324582973",
    "description": "Mit Martin & Julian. Heimfahrt noch mit geilem Stopover zum Baguette kaufen 🥖",
    "buddies": [
      "Martin Nitsche",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 16. Juni 2022 um 11:16",
    "activity": "Feiertagsfahrt",
    "link": "https://www.strava.com/activities/7317704195",
    "description": "Mittagshitze schön ausgenutzt🔥🫡",
    "buddies": []
  },
  {
    "date": "15. Juni 2022",
    "activity": "Abendrunde🔥",
    "link": "https://www.strava.com/activities/7314569892",
    "description": "Mit Niki🫡 bissl mehr als die geplanten 50km🤷🏻‍♂️",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 11. Juni 2022 um 09:45",
    "activity": "Berndorf-Pottendorf-Berndorf",
    "link": "https://www.strava.com/activities/7289633059",
    "description": "Kondition wird wieder besser👌🏻🔥\nHerzfrequenz trotzdem noch aufm Mond 🌑",
    "buddies": []
  },
  {
    "date": "Am 6. Juni 2022 um 11:42",
    "activity": "Chillige Feiertagsausfahrt",
    "link": "https://www.strava.com/activities/7263886783",
    "description": "Radweg-Tour bis Piesting und über Hart wieder nach Hause.\nVon allen E-Bike Omas und Opis abzogen worden 🤷🏻‍♂️",
    "buddies": []
  },
  {
    "date": "Am 4. Juni 2022 um 13:16",
    "activity": "Post-Covid-Fahrt",
    "link": "https://www.strava.com/activities/7253053615",
    "description": "Erstes Mal nach Coroni wieder am Rad. Kondition komplett im Arsch🫡",
    "buddies": []
  },
  {
    "date": "20. Mai 2022",
    "activity": "Mallorca Hitze-Fick🔥☀️",
    "link": "https://www.strava.com/activities/7173911309",
    "description": "Mit Julian, viel zu wenig Wasser und einen Haufen Nachbarkollegen 🇩🇪\nInkl. 3km Irrfahrt auf einem Uni-Campus 🏫",
    "buddies": [
      "Julian Wenzel"
    ]
  },
  {
    "date": "14. Mai 2022",
    "activity": "Kalte Kuchl mit de Guadn 🧑‍🍳",
    "link": "https://www.strava.com/activities/7140623470",
    "description": "",
    "buddies": [
      "Niklas Strasser",
      "Julian Wenzel"
    ]
  },
  {
    "date": "13. Mai 2022",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/7135616648",
    "description": "Mit Niki💯 bestes schwüle Wetter erwischt 💧",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 12. Mai 2022 um 17:04",
    "activity": "Waxeneck again 🚵🏼",
    "link": "https://www.strava.com/activities/7131183801",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 11. Mai 2022 um 17:25",
    "activity": "Afterwork🚴🏻",
    "link": "https://www.strava.com/activities/7125768964",
    "description": "",
    "buddies": []
  },
  {
    "date": "8. Mai 2022",
    "activity": "Wings 4 Life Worldrun",
    "link": "https://www.strava.com/activities/7108090750",
    "description": "App-Run mit Niki.\nGarmin andere Distanz als W4L-App🤷🏻‍♂️",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 3. Mai 2022 um 18:20",
    "activity": "Evening Swim",
    "link": "https://www.strava.com/activities/7082155612",
    "description": "Garmin falsch, 750m.",
    "buddies": []
  },
  {
    "date": "Am 3. Mai 2022 um 17:50",
    "activity": "Afternoon Swim",
    "link": "https://www.strava.com/activities/7082154468",
    "description": "Garmin falsch, 750m.",
    "buddies": []
  },
  {
    "date": "1. Mai 2022",
    "activity": "Purkersdorf und z‘ruck",
    "link": "https://www.strava.com/activities/7070275440",
    "description": "Die Anna nach Pressbaum zahen, mit Niki & Julian.",
    "buddies": [
      "Anna Birbamer",
      "Julian Wenzel",
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 30. April 2022 um 11:30",
    "activity": "Waxeneck MTB",
    "link": "https://www.strava.com/activities/7064013234",
    "description": "Kaffee & Spritzer am Waxeneck 🍷🍺\nSpritzer: min. 25 km/h bum zua-boost downhill 👌🏻",
    "buddies": []
  },
  {
    "date": "Am 29. April 2022 um 15:11",
    "activity": "Afternoon Run",
    "link": "https://www.strava.com/activities/7059674915",
    "description": "Ging schon mal besser…🤷🏻‍♂️",
    "buddies": []
  },
  {
    "date": "Am 28. April 2022 um 17:45",
    "activity": "Triathlon Probetraining",
    "link": "https://www.strava.com/activities/7055386192",
    "description": "Eigentlich nur 1.500m am Stück, Garmin Fehlerkennung🐡.\nAlle Senioren auf da Bahn waren 10x schneller als ich 🧓 👵",
    "buddies": []
  },
  {
    "date": "24. April 2022",
    "activity": "Sonnenfahrt 🌞",
    "link": "https://www.strava.com/activities/7032697588",
    "description": "Mit Resa & Niki. Viel zu warm angezogen🫠",
    "buddies": [
      "Resa Kühmayer",
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 23. April 2022 um 14:33",
    "activity": "Birbamer-Wenzel-Winkler Lauf",
    "link": "https://www.strava.com/activities/7028110545",
    "description": "Die Anna auf 10km zahen und danach no weiter👍🏻🦵🏻",
    "buddies": []
  },
  {
    "date": "20. April 2022",
    "activity": "Afternoon Ride",
    "link": "https://www.strava.com/activities/7013642350",
    "description": "Mit Resa & Niki 🌞",
    "buddies": [
      "Resa Kühmayer",
      "Niklas Strasser"
    ]
  },
  {
    "date": "18. April 2022",
    "activity": "Dusch-Fahrt 🚿",
    "link": "https://www.strava.com/activities/7001074168",
    "description": "Teilabschnitte VeloRun Strecke Reverse.\nMit Niki, viel Regen und gratis Graupel-Gesichtsakkupunktur 🌨",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 16. April 2022 um 12:52",
    "activity": "Osterlauf",
    "link": "https://www.strava.com/activities/6990521425",
    "description": "Inklusive Salamander-Date🦎",
    "buddies": []
  },
  {
    "date": "Am 12. April 2022 um 17:16",
    "activity": "Chilliger Laufsaison-Start",
    "link": "https://www.strava.com/activities/6970692063",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 10. April 2022 um 09:29",
    "activity": "Steinwandklamm/Waxeneck Klassiker mit Guglzipf",
    "link": "https://www.strava.com/activities/6958380051",
    "description": "Fetter Wind und Schnee am Start 🛫",
    "buddies": []
  },
  {
    "date": "Am 10. April 2022 um 09:27",
    "activity": "Helm-vergessen Tour ⛑",
    "link": "https://www.strava.com/activities/6957600746",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 25. März 2022 um 15:38",
    "activity": "Chillige Radweg Runde",
    "link": "https://www.strava.com/activities/6880746131",
    "description": "",
    "buddies": []
  },
  {
    "date": "20. März 2022",
    "activity": "Wadenfick am Sonntag ☀️",
    "link": "https://www.strava.com/activities/6854697222",
    "description": "🍺-Pause inklusive.",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 18. März 2022 um 15:39",
    "activity": "Waxeneck again",
    "link": "https://www.strava.com/activities/6843563883",
    "description": "Berndorf-Waxeneck-Geyersattel-Berndorf🔥",
    "buddies": []
  },
  {
    "date": "Am 12. März 2022 um 15:21",
    "activity": "Berndorf-Waxeneck-Steinwandklamm-Berndorf",
    "link": "https://www.strava.com/activities/6813306087",
    "description": "Heute mal verkehrte Runde🙃",
    "buddies": []
  },
  {
    "date": "Am 11. März 2022 um 15:12",
    "activity": "Afterwork Waxi",
    "link": "https://www.strava.com/activities/6807693120",
    "description": "Geiles Wetter ☀️",
    "buddies": []
  },
  {
    "date": "6. März 2022",
    "activity": "Team Ingenieur Essenther unterwegs",
    "link": "https://www.strava.com/activities/6782475976",
    "description": "",
    "buddies": [
      "Julian Wenzel",
      "Niklas Strasser"
    ]
  },
  {
    "date": "4. März 2022",
    "activity": "Berndorf-Schwarzensee-Alland-Berndorf",
    "link": "https://www.strava.com/activities/6772024126",
    "description": "Sonne/Wind/Schneefall…alles dabei👌🏻🔥",
    "buddies": [
      "Resa Kühmayer"
    ]
  },
  {
    "date": "Am 27. Februar 2022 um 11:37",
    "activity": "Steinwandklamm/Waxeneck",
    "link": "https://www.strava.com/activities/6746109883",
    "description": "",
    "buddies": []
  },
  {
    "date": "Am 26. Februar 2022 um 12:56",
    "activity": "Geyersattel/Waxeneck",
    "link": "https://www.strava.com/activities/6740746938",
    "description": "Starker Schneefall am Waxeneck☃️",
    "buddies": []
  },
  {
    "date": "19. Februar 2022",
    "activity": "Waxeneck Fetz",
    "link": "https://www.strava.com/activities/6706782324",
    "description": "",
    "buddies": [
      "Niklas Strasser"
    ]
  },
  {
    "date": "Am 13. Februar 2022 um 10:14",
    "activity": "",
    "link": "https://www.strava.com/activities/6676774415",
    "description": "Schönes Wetter, viel Wind die letzten Kilometer 💨",
    "buddies": []
  },
  {
    "date": "12. Februar 2022",
    "activity": "Restfettnpartie",
    "link": "https://www.strava.com/activities/6670996051",
    "description": "HR-Gurt im Oasch🤓👍🏻",
    "buddies": [
      "Julian Wenzel",
      "Martin Nitsche"
    ]
  },
  {
    "date": "5. Februar 2022",
    "activity": "Flughafen Sightseeingtour",
    "link": "https://www.strava.com/activities/6635813307",
    "description": "Oasch viel Wind.",
    "buddies": [
      "Martin Nitsche",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 4. Februar 2022 um 13:51",
    "activity": "Waxeneck-Fetzer",
    "link": "https://www.strava.com/activities/6630273135",
    "description": "Patziger Schnee oben, ned leiwand.\nEinstellfahrt vom neuen Fully🔥🤓",
    "buddies": []
  },
  {
    "date": "15. Januar 2022",
    "activity": "Puchberg am Schneehuat Runde 🎩",
    "link": "https://www.strava.com/activities/6527482623",
    "description": "",
    "buddies": [
      "Martin Nitsche",
      "Niklas Strasser",
      "Resa Kühmayer",
      "Julian Wenzel"
    ]
  },
  {
    "date": "Am 2. Januar 2022 um 13:12",
    "activity": "Laufzerstörung im neuen Jahr.",
    "link": "https://www.strava.com/activities/6460868257",
    "description": "",
    "buddies": []
  }
]

;

// Function to display activities
function displayActivities(activities) {
    const activityList = document.getElementById('activity-list');

    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');

        // Create the activity title (collapsible)
        const activityTitle = document.createElement('h2');
        activityTitle.textContent = activity.activity;
        activityTitle.addEventListener('click', () => {
            const content = activityItem.querySelector('.collapsible');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });

        // Create the date
        const date = document.createElement('p');
        date.textContent = `Date: ${activity.date}`;

        // Create the link
        const link = document.createElement('p');
        const hyperlink = document.createElement('a');
        hyperlink.href = activity.link;
        hyperlink.textContent = 'View Activity';
        hyperlink.target = '_blank';
        link.appendChild(hyperlink);

        // Create the description with the copy button
        const description = document.createElement('p');
        description.textContent = `${activity.description}`;

        let buddies;

        if (activity.buddies.length > 0) {
          buddies = document.createElement('p');
          buddies.classList.add(['buddies'])

          //if (activity.buddies.length === 0) {//
          //  buddies.textContent = `Buddies: Forever alone`;
          //} else {
          buddies.textContent = `Buddies: ${activity.buddies.join(', ')}`;
          //}
        } 

        

        // const copyButton = document.createElement('button');
        // copyButton.classList.add('copy-button');
        // copyButton.textContent = 'Copy Description';
        // copyButton.addEventListener('click', () => {
        //     copyToClipboard(activity.description);
        // });

        // Collapsible section for description
        // const collapsibleContent = document.createElement('div');
        // collapsibleContent.classList.add('collapsible');
        // collapsibleContent.appendChild(description);
        // collapsibleContent.appendChild(copyButton);

        // Add everything to the activity item
        activityItem.appendChild(activityTitle);
        activityItem.appendChild(date);

        if (buddies) {
          activityItem.appendChild(buddies);
        }
        
        activityItem.appendChild(link);
        activityItem.appendChild(description);

        // Add the activity item to the list
        activityList.appendChild(activityItem);
    });
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Description copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Call the function to display the activities
displayActivities(activities);

document.getElementById('toggleButton').addEventListener('click', function() {
    const activityList = document.getElementById('activity-list');
    if (activityList.style.display === 'block') {
        activityList.style.display = 'flex';
        this.textContent = 'Einzelliste';
    } else {
        activityList.style.display = 'block';
        this.textContent = 'Gridliste';
    }
});

