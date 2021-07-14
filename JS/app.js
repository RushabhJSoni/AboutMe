'use strict'


let userName = prompt('Hi there! waht\'s your name?');
console.log(userName);

alert('Welcome to my site, here\'s a fun game for you to know me. Please answer with a yes or no');

let knowMyName = prompt('Do you know my name?')

let theyKnow = knowMyName.toLowerCase();
console.log(theyKnow);

if (theyKnow === 'yes' || theyKnow === 'y') {
  alert('congratulations you are awesome!');
} else if (theyKnow === 'no' || theyKnow === 'n') {
  alert(' :( ');
} else {
  alert('Please read the instructions!');
}


let planet = prompt('Do you know which planet i\'m from?');

let newPlanet = planet.toLowerCase();

console.log(newPlanet);


if (newPlanet === 'yes' || newPlanet === 'y') {
  alert('Phew i\'m glad you know its called Earth!');
} else if (newPlanet === 'no' || newPlanet === 'n') {
  alert('Nope its not Tatooine...');
} else {
  alert('Please read the instructions!');
}

let country = prompt('Do you know the name of country I hail from?');

let yesCountry = country.toLowerCase();

console.log(yesCountry);

if (yesCountry === 'yes' || yesCountry === 'y') {
  alert('oh yea, wow you\'re smart ' + userName);
} else if (yesCountry === 'no' || yesCountry === 'n') {
  alert('i\'m sure you can do better ' + userName);
} else {
  alert('Please read the instructions!');
}

let vehicle = prompt('Do you know the model of my atmospheric vehicle of choice?');

let theyKnowVehicle = vehicle.toLowerCase();

console.log(theyKnowVehicle);


if (theyKnowVehicle === 'yes' || theyKnowVehicle === 'y') {
  alert('Ding Ding Ding yup, its the A320! join me for a joyride someday.');
} else if (theyKnowVehicle === 'no' || theyKnowVehicle === 'n') {
  alert('Fyi the shuttle is my spare ship of choice ;) ');
} else {
  alert('Please read the instructions!');
}

alert('Thank you for playing my game and getting to know me better ' + userName + '.' + ' Welcome to my world');

