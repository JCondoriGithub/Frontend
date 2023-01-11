// anagrafica guardie
const guardie = {
    guard1: {
        name: "Mario",
        surname: "Rossi",
        age: 42,
        sex: "male"
    },
    guard2: {
        name: "John",
        surname: "Doe",
        age: 50,
        sex: "male"
    },
    guard3: {
        name: "Sandra",
        surname: "Bucket",
        age: 27,
        sex: "female"
    },
    guard4: {
        name: "Elisabeth",
        surname: "Hochfrau",
        age: 35,
        sex: "female"
    },
    guard5: {
        name: "Robert",
        surname: "Parker",
        age: 21,
        sex: "male"
    }
}

// anagrafica e fascicoli dei criminali
const criminali = {
    criminal1: {
        name: "Joker",
        surname: "unknown",
        age: "unknown",
        sex: "male",
        file: {
            id: 33641232,
            incarceration: "21-03-2022",
            release: "undefined",
            state: "escaped",
            crimes: ["omicidi", "rapine", "terrorismo", "collaborazione mafiosa"]
        }
    },
    criminal2: {
        name: "Harleen",
        surname: "Quinzel",
        age: 23,
        sex: "female",
        file: {
            id: 97712330,
            incarceration: "21-03-2019",
            release: "04-09-2030",
            state: "detained",
            crimes: ["omicidi", "rapine", "disturbo alla quiete"]
        }
    },
    criminal3: {
        name: "Oswald",
        surname: "Cobblepot",
        age: 54,
        sex: "male",
        file: {
            id: 24294674,
            incarceration: "27-12-2014",
            release: "30-11-2025",
            state: "detained",
            crimes: ["omicidi", "terrorismo", "collaborazione mafiosa"]
        }
    },
    criminal4: {
        name: "Edward",
        surname: "Nigma",
        age: 40,
        sex: "donna",
        file: {
            id: 34650745,
            incarceration: "11-07-2018",
            release: "28-02-2023",
            state: "detained",
            crimes: ["omicidi", "rapine", "terrorismo"]
        }
    },
    criminal5: {
        name: "Harvey",
        surname: "Dent",
        age: 42,
        sex: "male",
        file: {
            id: 12664200,
            incarceration: "31-05-2020",
            release: "09-10-2030",
            state: "died",
            crimes: ["omicidi", "terrorismo"]
        }
    }
}


// funzioni per estrarre l'array delle guardie e criminali
function getGuards(guards) {
    return Object.values(guards).map(function (value) {
        return value;
    })
}

function getCriminals(criminals) {
    return Object.values(criminals).map(function (value) {
        return value;
    })
}


// funzione per filtrare un'array in base al: nome, cognome e sesso
function filterTable(chars) {
    return function(value) {
        return value.name.toUpperCase().includes(chars.toUpperCase()) || value.surname.toUpperCase().includes(chars.toUpperCase())
         || value.sex.toUpperCase().includes(chars.toUpperCase());
    }
}

// funzioni per prendere i dati di riepilogo sul carcere
function getEscapedCriminals() {
    
    const criminals = getCriminals(criminali);
    let count = 0;

    criminals.forEach(function(value) {
        if(value.file.state == "escaped")
            count++;
    })
    return count;
}

function getDeadCriminals() {

    const criminals = getCriminals(criminali);
    let count = 0;

    criminals.forEach(function(value) {
        if(value.file.state == "died")
            count++;
    })
    return count;
}

function summary() {

    if(document.getElementById(1).children.length == 0)
        for(let i = 1; i < 5; i++) {
            const voidSpan = document.createElement("span");
            document.getElementById(i).appendChild(voidSpan);
        }

    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    span.appendChild(document.createTextNode(getGuards(guardie).length));
    const oldSpan = document.getElementById(1).children[0];
    document.getElementById("1").replaceChild(span, oldSpan);

    const span2 = document.createElement("span");
    span2.className = "badge bg-primary rounded-pill";
    span2.appendChild(document.createTextNode(getCriminals(criminali).length));
    const oldSpan2 = document.getElementById(2).lastChild;
    document.getElementById("2").replaceChild(span2, oldSpan2);

    const span3 = document.createElement("span");
    span3.className = "badge bg-primary rounded-pill";
    span3.appendChild(document.createTextNode(getEscapedCriminals()));
    const oldSpan3 = document.getElementById(3).lastChild;
    document.getElementById("3").replaceChild(span3, oldSpan3);

    const span4 = document.createElement("span");
    span4.className = "badge bg-primary rounded-pill";
    span4.appendChild(document.createTextNode(getDeadCriminals()));
    const oldSpan4 = document.getElementById(4).lastChild;
    document.getElementById("4").replaceChild(span4, oldSpan4);
}

summary();


// funzioni per: creare e cancellare la tebella di guardie, aggiungere una guardia e filtrare guardie
function deleteTable() {

    const newtbody = document.createElement("tbody");
    newtbody.id = "tbl_guards";
    const oldtbody = document.getElementById("tbl_guards");
    document.getElementById("tbl1").replaceChild(newtbody, oldtbody);
}

const guards = getGuards(guardie);

function createTableGuards(guards) {

    for (let i = 0; i < guards.length; i++) {

        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.appendChild(document.createTextNode(i + 1));
        tr.appendChild(th);

        const td = document.createElement("td");
        td.appendChild(document.createTextNode(guards[i].name));
        tr.appendChild(td);

        const td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(guards[i].surname));
        tr.appendChild(td2);

        const td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(guards[i].age));
        tr.appendChild(td3);

        const td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(guards[i].sex));
        tr.appendChild(td4);

        document.getElementById("tbl_guards").appendChild(tr);
    }
}

createTableGuards(guards);

let countG = 1;
document.getElementById("btn_add_G").addEventListener('click', addGuard);

function addGuard() {

    let nome = document.getElementById("GNameBox").value;
    let cognome = document.getElementById("GSurnameBox").value;
    let eta = document.getElementById("GAgeBox").value;
    let sesso = document.getElementById("GSexBox").value;

    const nuovaGuardia = {
        name: nome,
        surname: cognome,
        age: eta,
        sex: sesso
    }

    let string = "newGuard";
    guardie[string + countG] = nuovaGuardia;
    countG++;

    const guards = getGuards(guardie);
    deleteTable();
    createTableGuards(guards);
    summary();
}

document.getElementById("inputGuards").addEventListener('keyup', searchGuard)

function searchGuard() {

    deleteTable();

    let chars = document.getElementById("inputGuards").value;
    const guards = getGuards(guardie);
    const guards1 = guards.filter(filterTable(chars));
    createTableGuards(guards1);
}


// funzioni per: creare e cancellare la tebella di criminali, aggiungere un criminale e filtrare criminali
function deleteTable2() {

    const newtbody = document.createElement("tbody");
    newtbody.id = "tbl_prisoners";
    const oldtbody = document.getElementById("tbl_prisoners");
    document.getElementById("tbl2").replaceChild(newtbody, oldtbody);
}

const criminals = getCriminals(criminali);

function createTableCriminals(criminals) {

    for (let i = 0; i < criminals.length; i++) {

        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.appendChild(document.createTextNode(i + 1));
        tr.appendChild(th);

        const td = document.createElement("td");
        td.appendChild(document.createTextNode(criminals[i].name));
        tr.appendChild(td);

        const td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(criminals[i].surname));
        tr.appendChild(td2);

        const td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(criminals[i].age));
        tr.appendChild(td3);

        const td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(criminals[i].sex));
        tr.appendChild(td4);

        document.getElementById("tbl_prisoners").appendChild(tr);
    }
}

createTableCriminals(criminals);

let countC = 1;
document.getElementById("btn_add").addEventListener('click', addCriminal)

function addCriminal() {

    let nome = document.getElementById("nameBox").value;
    let cognome = document.getElementById("surnameBox").value;
    let eta = document.getElementById("ageBox").value;
    let sesso = document.getElementById("sexBox").value;

    let code = document.getElementById("codeBox").value;
    let dateInc = document.getElementById("incarcerationBox").value;
    let dateRelease = document.getElementById("releaseBox").value;
    let state = document.getElementById("stateBox").value;

    const crimes = [];
    for(let i = 0; i < 6; i++) {

        let j = i +1;
        let crime = document.getElementById("crimeBox" + j).value;
        if(crime != "")
            crimes.push(crime);
    }

    const nuovoCriminale = {
        name: nome,
        surname: cognome,
        age: eta,
        sex: sesso
    }

    const nuovoFascicolo = {
        id: code,
        incarceration: dateInc,
        release: dateRelease,
        state: state,
        crimes: crimes
    }

    nuovoCriminale.file = nuovoFascicolo;

    let string = "newCriminal";
    criminali[string + countC] = nuovoCriminale;
    countC++;

    const criminals = getCriminals(criminali);
    deleteTable2();
    createTableCriminals(criminals);
    deleteTables3();
    createTablesFiles(criminals);
    summary();
}

document.getElementById("inputCriminals").addEventListener('keyup', searchCriminal)

function searchCriminal() {

    deleteTable2();

    let chars = document.getElementById("inputCriminals").value;
    const criminals = getCriminals(criminali);
    const criminals1 = criminals.filter(filterTable(chars));
    createTableCriminals(criminals1);
}


// funzioni per: creare e cancellare le tabelle dei fascicoli, filtrare fascicoli
function deleteTables3() {

    const newDivCards = document.createElement("div");
    newDivCards.id = "divCards";
    newDivCards.className = "container";
    newDivCards.style = "display: flex; justify-content: center; flex-wrap:wrap";
    const oldDivCards = document.getElementById("divCards");
    document.getElementById("formCards").replaceChild(newDivCards, oldDivCards);
}

const criminalsFiles = getCriminals(criminals)

function createTablesFiles(criminals) {

    for(let i = 0; i < criminals.length; i++) {

        const divCard = document.createElement("div");
        divCard.className = "card";
        divCard.style = "width:20rem; margin-right: 8%; margin-bottom: 3%;";

        const divCardH = document.createElement("div");
        divCardH.className = "card-header";
        divCardH.appendChild(document.createTextNode("NAME: " + criminals[i].name + ", SURNAME: " + criminals[i].surname));
        divCard.appendChild(divCardH);

        const ul = document.createElement("ul");
        ul.className = "list-group list-group-flush";

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.appendChild(document.createTextNode("CODE: " + criminals[i].file.id));
        ul.appendChild(li);

        const li2 = document.createElement("li");
        li2.className = "list-group-item";
        li2.appendChild(document.createTextNode("INCARCERATION: " + criminals[i].file.incarceration));
        ul.appendChild(li2);

        const li3 = document.createElement("li");
        li3.className = "list-group-item";
        li3.appendChild(document.createTextNode("RELEASE: " + criminals[i].file.release));
        ul.appendChild(li3);

        const li5 = document.createElement("li");
        li5.className = "list-group-item";
        li5.appendChild(document.createTextNode("STATE: " + criminals[i].file.state));
        ul.appendChild(li5);

        const li4 = document.createElement("li");
        li4.className = "list-group-item";
        li4.appendChild(document.createTextNode("CRIMES: "));
        for(let j = 0; j < criminals[i].file.crimes.length; j++) 
            li4.appendChild(document.createTextNode(criminals[i].file.crimes[j] + ", "));
        ul.appendChild(li4);

        divCard.appendChild(ul);
        document.getElementById("divCards").appendChild(divCard);
    }
}

createTablesFiles(criminalsFiles);

document.getElementById("inputFiles").addEventListener('keyup', searchFile)

function searchFile() {

    deleteTables3();

    let chars = document.getElementById("inputFiles").value;
    const files = getCriminals(criminali);
    const files1 = files.filter(filterTable(chars));
    createTablesFiles(files1);
}