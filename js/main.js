// ! Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bike1 = {
  name: "Pininfarina",
  weight: {
    value: 7,
    unit: "Kg",
  },
};
const bike2 = {
  name: "Rockrider",
  weight: {
    value: 6,
    unit: "Kg",
  },
};
const bike3 = {
  name: "Bianchi",
  weight: {
    value: 5,
    unit: "Kg",
  },
};
const bike4 = {
  name: "Graziella",
  weight: {
    value: 10,
    unit: "Kg",
  },
};

const bikePark = [bike1, bike2, bike3, bike4];

let lightestBike = bikePark[0];
for (const currentBike of bikePark) {
  if (currentBike.weight.value < lightestBike.weight.value)
    lightestBike = currentBike;
}

console.log(lightestBike);

// ! Snack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function generateTeam() {
  const team = {
    name: "",
    score: 0,
    fouls: 0,
  };

  return team;
}

function generateTeams(tot) {
  const teamsArray = [];
  for (let i = 0; i < tot; i++) {
    teamsArray[i] = generateTeam();
  }

  const teamNames = [
    "Milan",
    "Inter",
    "Juventus",
    "Napoli",
    "Roma",
    "Lazio",
    "Fiorentina",
    "Atalanta",
    "Torino",
  ];

  for (i = 0; i < teamsArray.length; i++) {
    const currentTeam = teamsArray[i];
    currentTeam.name = teamNames[i];
    currentTeam.score = generateRandomNumber(1, 10);
    currentTeam.fouls = generateRandomNumber(1, 10);
  }

  return teamsArray;
}

function reduceTeams(teams) {
  const reducedTeams = [];

  for (const currentTeam of teams) {
    const { name, fouls } = currentTeam;
    reducedTeams.push({ name, fouls });
  }
  return reducedTeams;
}

const numberOfTeams = 5;
const teamsArray = generateTeams(numberOfTeams);
const reducedTeamsArray = reduceTeams(teamsArray);

console.log("Teams completi: ", teamsArray);
console.log("Teams senza punti: ", reducedTeamsArray);

// ! Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const myArray = ["ciao", "hi", "hello", "goodbye"];
const min = 0;
const max = 3;

// ^ VERSIONE CON CICLO
function valuesInBetween(array, min, max) {
  const newArray = [];

  array.forEach((curentEl, index) => {
    if (index > min && index < max) {
      newArray.push(curentEl);
    }
  });

  return newArray;
}
const newArray = valuesInBetween(myArray, min, max);
console.log(newArray);

// ^ VERSIONE CON SLICE
function valuesInBetweenSlice(array, min, max) {
  return array.slice(min + 1, max);
}

const newArraySlice = valuesInBetweenSlice(myArray, min, max);
console.log(newArraySlice);
