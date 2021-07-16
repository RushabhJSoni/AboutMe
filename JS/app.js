'use strict'
let userName = prompt('Hi there! what\'s your name?');
function name(){
// let userName = prompt('Hi there! what\'s your name?');
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
// return userName;
}
name();

function planet(){
let planet = prompt('Do you know which planet i\'m from?');

let newPlanet = planet.toLowerCase();

console.log(newPlanet);


if (newPlanet === 'yes' || newPlanet === 'y') {
  alert('Phew i\'m glad you know its called Earth!');
} else if (newPlanet === 'no' || newPlanet === 'n') {
  alert('Nope its not Tatooine...');
} else {
  alert('Please read the instructions!');
}}
planet();

function country(){
let country = prompt('Do you know the name of country I hail from?');

let yesCountry = country.toLowerCase();

console.log(yesCountry);

if (yesCountry === 'yes' || yesCountry === 'y') {
  alert('oh yea, wow you\'re smart ' + userName);
} else if (yesCountry === 'no' || yesCountry === 'n') {
  alert('i\'m sure you can do better ' + userName);
} else {
  alert('Please read the instructions!');
}}
country();

function vehicle(){
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
}
vehicle();

function randomNumber(){
let randomInt = Math.floor((Math.random() * 100) + 1);


for(let i = 3; i >= 0 ; i-- ){

  let userGuess = Number(prompt('Please guess a number between 1 - 100. You have ' + i + 'guesses remaining'));
  // console.log(userGuess);

  while (userGuess < 1 || userGuess > 100){
   userGuess = Number(prompt('Please guess a number' + i + 'guesses remaining'));
    console.log('User input was ' + userGuess);
  }

let result = (userGuess < randomInt);
   
  switch(result){

    case true:
    
      alert('you are too low!');

    break;
  
    case false:

      alert('you are too high');
    break;

    default:
      alert('Thats the right answer!');

      break;
  }

}
alert('The correct Answer was - ' + randomInt);
}
randomNumber();

function favCity(){
const arrayCity = ['sydney' , 'auckland' , 'new york' , 'london' , 'paris' , 'tokyo'];
console.log(arrayCity);

let guess = arrayCity.length;




let result = false;

while(!result && guess >0){

  let userArrGuess = prompt('Guess my favourite cities!');
  let finalCity = userArrGuess.toLowerCase();
  console.log(finalCity);

  for(let j = 0; j < guess; j++) {


  if(finalCity === arrayCity[j]){
    alert('Awesome that\'s one down!' );
    result = true;
    break;
  }
  
  }

}
} 
favCity();

alert('Thank you for playing my game and getting to know me better ' + userName + '.' + ' Welcome to my world');
