const guardie = {
    guardia1: {
        nome: "Mario",
        cognome: "Rossi",
        eta: 42,
        sesso: "maschio"
    },
    guardia2: {
        nome: "John",
        cognome: "Doe",
        eta: 50,
        sesso: "maschio"
    },
    guardia3: {
        nome: "Sandra",
        cognome: "Bucket",
        eta: 27,
        sesso: "donna"
    },
    guardia4: {
        nome: "Elisabeth",
        cognome: "Hochfrau",
        eta: 35,
        sesso: "donna"
    },
    guardia5: {
        nome: "Robert",
        cognome: "Parker",
        eta: 21,
        sesso: "maschio"
    }
}

const criminali = {
    criminale1: {
        nome: "Joker",
        cognome: "sconosciuto",
        eta: "sconosciuta",
        sesso: "maschio",
        fascicolo: {
            id: 33641232,
            carcerazione: "21-03-2022",
            scarcerazione: "UNDEFINED",
            crimini: ["omicidi", "rapine", "terrorismo", "collaborazione mafiosa"]
        }
    },
    criminale2: {
        nome: "Harleen",
        cognome: "Quinzel",
        eta: 23,
        sesso: "donna",
        fascicolo: {
            id: 97712330,
            carcerazione: "21-03-2019",
            scarcerazione: "04-09-2030",
            crimini: ["omicidi", "rapine", "disturbo alla quiete"]
        }
    },
    criminale3: {
        nome: "Oswald",
        cognome: "Cobblepot",
        eta: 54,
        sesso: "uomo",
        fascicolo: {
            id: 24294674,
            carcerazione: "27-12-2014",
            scarcerazione: "30-11-2025",
            crimini: ["omicidi", "terrorismo", "collaborazione mafiosa"]
        }
    },
    criminale4: {
        nome: "Edward",
        cognome: "Nigma",
        eta: 40,
        sesso: "donna",
        fascicolo: {
            id: 34650745,
            carcerazione: "11-07-2018",
            scarcerazione: "28-02-2023",
            crimini: ["omicidi", "rapine", "terrorismo"]
        }
    },
    criminale5: {
        nome: "Harvey",
        cognome: "Dent",
        eta: 42,
        sesso: "maschio",
        fascicolo: {
            id: 12664200,
            carcerazione: "31-05-2020",
            scarcerazione: "09-10-2030",
            crimini: ["omicidi", "terrorismo"]
        }
    }
}


let guards = Object.values(guardie).map(function (value) {
    return value;
})

for (let i = 0; i < guards.length; i++) {

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.appendChild(document.createTextNode(i + 1));
    tr.appendChild(th);

    const td = document.createElement("td");
    td.appendChild(document.createTextNode(guards[i].nome));
    tr.appendChild(td);

    const td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(guards[i].cognome));
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(guards[i].eta));
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(guards[i].sesso));
    tr.appendChild(td4);

    document.getElementById("tbl_guards").appendChild(tr);
}

let criminals = Object.values(criminali).map(function (value) {
    return value;
})

for (let i = 0; i < criminals.length; i++) {

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.appendChild(document.createTextNode(i + 1));
    tr.appendChild(th);

    const td = document.createElement("td");
    td.appendChild(document.createTextNode(criminals[i].nome));
    tr.appendChild(td);

    const td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(criminals[i].cognome));
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(criminals[i].eta));
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(criminals[i].sesso));
    tr.appendChild(td4);

    document.getElementById("tbl_prisoners").appendChild(tr);
}

const dossiers = Object.values(criminali).map(function (value) {
    return value.fascicolo;
})

for(let i = 0; i < criminals.length; i++) {

    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.style = "width:20rem; margin-right: 8%; margin-bottom: 3%;";

    const divCardH = document.createElement("div");
    divCardH.className = "card-header";
    divCardH.appendChild(document.createTextNode("NAME: " + criminals[i].nome + ", SURNAME: " + criminals[i].cognome));
    divCard.appendChild(divCardH);

    const ul = document.createElement("ul");
    ul.className = "list-group list-group-flush";

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode("CODE: " + criminals[i].fascicolo.id));
    ul.appendChild(li);

    const li2 = document.createElement("li");
    li2.className = "list-group-item";
    li2.appendChild(document.createTextNode("INCARCERATION: " + criminals[i].fascicolo.carcerazione));
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.className = "list-group-item";
    li3.appendChild(document.createTextNode("RELEASE: " + criminals[i].fascicolo.scarcerazione));
    ul.appendChild(li3);

    const li4 = document.createElement("li");
    li4.className = "list-group-item";
    li4.appendChild(document.createTextNode("CRIMES: "));
    for(let j = 0; j < criminals[i].fascicolo.crimini.length; j++) 
        li4.appendChild(document.createTextNode(criminals[i].fascicolo.crimini[j] + ", "));
    ul.appendChild(li4);

    divCard.appendChild(ul);
    document.getElementById("divCards").appendChild(divCard);
}

let countG = 1;
document.getElementById("btn_add_G").addEventListener('click', function addGuard() {

    let nome = document.getElementById("GNameBox").value;
    let cognome = document.getElementById("GSurnameBox").value;
    let eta = document.getElementById("GAgeBox").value;
    let sesso = document.getElementById("GSexBox").value;

    const nuovaGuardia = {
        nome: nome,
        cognome: cognome,
        eta: eta,
        sesso: sesso
    }

    let string = "newGuard";
    guardie[string + countG] = nuovaGuardia;
    countG++;

    updateTblGuards();
})

function updateTblGuards() {

    guards = Object.values(guardie).map(function (value) {
        return value;
    })

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.appendChild(document.createTextNode(guards.length));
    tr.appendChild(th);

    const td = document.createElement("td");
    td.appendChild(document.createTextNode(guards[guards.length - 1].nome));
    tr.appendChild(td);

    const td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(guards[guards.length - 1].cognome));
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(guards[guards.length - 1].eta));
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(guards[guards.length - 1].sesso));
    tr.appendChild(td4);

    document.getElementById("tbl_guards").appendChild(tr);
}

let countC = 1;
document.getElementById("btn_add").addEventListener('click', function addCriminal() {

    let nome = document.getElementById("nameBox").value;
    let cognome = document.getElementById("surnameBox").value;
    let eta = document.getElementById("ageBox").value;
    let sesso = document.getElementById("sexBox").value;

    let code = document.getElementById("codeBox").value;
    let dateInc = document.getElementById("incarcerationBox").value;
    let dateRelease = document.getElementById("releaseBox").value;

    const crimes = [];
    for(let i = 0; i < 6; i++) {

        let j = i +1;
        let crime = document.getElementById("crimeBox" + j).value;
        if(crime != "")
            crimes.push(crime);
    }

    
    const nuovoCriminale = {
        nome: nome,
        cognome: cognome,
        eta: eta,
        sesso: sesso
    }

    const nuovoFascicolo = {
        id: code,
        carcerazione: dateInc,
        scarcerazione: dateRelease,
        crimini: crimes
    }

    nuovoCriminale.fascicolo = nuovoFascicolo;

    let string = "newCriminal";
    criminali[string + countC] = nuovoCriminale;
    countC++;

    updateTblCriminals();
    updateFiles();
})

function updateTblCriminals() {

    criminals = Object.values(criminali).map(function (value) {
        return value;
    })

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.appendChild(document.createTextNode(criminals.length));
    tr.appendChild(th);

    const td = document.createElement("td");
    td.appendChild(document.createTextNode(criminals[criminals.length - 1].nome));
    tr.appendChild(td);

    const td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(criminals[criminals.length - 1].cognome));
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(criminals[criminals.length - 1].eta));
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(criminals[criminals.length - 1].sesso));
    tr.appendChild(td4);

    document.getElementById("tbl_prisoners").appendChild(tr);

    console.log(criminals);
}

function updateFiles() {

    criminals = Object.values(criminali).map(function (value) {
        return value;
    })

    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.style = "width:20rem; margin-right: 8%; margin-bottom: 3%;";

    const divCardH = document.createElement("div");
    divCardH.className = "card-header";
    divCardH.appendChild(document.createTextNode("NAME: " + criminals[criminals.length - 1].nome + ", SURNAME: " + criminals[criminals.length - 1].cognome));
    divCard.appendChild(divCardH);

    const ul = document.createElement("ul");
    ul.className = "list-group list-group-flush";

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode("CODE: " + criminals[criminals.length - 1].fascicolo.id));
    ul.appendChild(li);

    const li2 = document.createElement("li");
    li2.className = "list-group-item";
    li2.appendChild(document.createTextNode("INCARCERATION: " + criminals[criminals.length - 1].fascicolo.carcerazione));
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.className = "list-group-item";
    li3.appendChild(document.createTextNode("RELEASE: " + criminals[criminals.length - 1].fascicolo.scarcerazione));
    ul.appendChild(li3);

    const li4 = document.createElement("li");
    li4.className = "list-group-item";
    li4.appendChild(document.createTextNode("CRIMES: "));
    for(let j = 0; j < criminals[criminals.length - 1].fascicolo.crimini.length; j++) 
        li4.appendChild(document.createTextNode(criminals[criminals.length - 1].fascicolo.crimini[j] + ", "));
    ul.appendChild(li4);

    divCard.appendChild(ul);
    document.getElementById("divCards").appendChild(divCard);
}
