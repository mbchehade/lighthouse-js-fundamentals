// if Statement 
const raining = true;
const cold = false;

if (raining) {
  console.log('don\'t forget your umbrella!');
}
if (cold) {
  console.log('Make sure you pick out a scarf!')
}

console.log('Now you\'re ready to go outside!');

const cold = false;
if (cold) {
  console.log('Make sure you pick out a scarf!')
} else {
  Console.log('Short sleeves are fine.');
}

const temperature = 12;

if (temperature < 0) {
  console.log('make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log('short sleeves won\'t cut it');
} else {
  console.log('short sleeves are fine');
}

console.log('now you\'re ready to go outside');

// Logical operators
const isCitizen = true;
const age = 26;


if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}


const whichSchool = function (age) {
  if (age < 13) {
    console.log('Elementary School');
  } else if (age >= 13 && age <= 18) {
    console.log('Secondary School');
  } else {
    console.log('Lighthouse Labs');
  }
};