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

const guards = Object.values(guardie).map(function(value) {
        return value;
    })

const criminals = Object.values(criminali).map(function(value) {
    return value;
})

const dossiers = Object.values(criminali).map(function(value) {
    return value.fascicolo;
})

console.log(guards);
console.log(criminals);
console.log(dossiers);