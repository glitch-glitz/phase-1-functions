function whereIsMyDog(name) {
  return "Where is " + name + "?";
}
let name = "Ted";
console.log(whereIsMyDog(name));

//"Generalization" By Using Parameters And Arguments
function exerciseByronThePoodle(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}
const dogName = "Bryon";
const dogBreed = "poodle";
console.log(exerciseByronThePoodle("Rookie", "Chiwawa"));
console.log(exerciseByronThePoodle("Bryon", "poodle"));
console.log(exerciseByronThePoodle("Boo", "puggle"));

//Return Values
function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}
const weatherToday = "Rainy";
const result = exerciseDog("Byron", "poodle");
console.log(result);





//I made this 
function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  } else if (weatherToday === "Windy") {
    return `It is too messy for ${dogName}`;
  } else if (weatherToday === "Sunny") {
    return `${dogName} is too hot to be outside :)!`;
  } else {
    return `${dogName} is happy and tired!`;
  }
}
const weatherToday = "Sunny";
const result = exerciseDog("Boo", "poodle");
console.log(result);