import choice, { remove } from "./helper";
import food from "./food";

let theFood = choice(food);
let foodLeft = remove(food, theFood);

console.log("I'd like one " + theFood + " please.");
console.log("Here you go: ", theFood);
console.log("Delicious! May I have another?");
console.log("I'm sorry, we're out. we have " + foodLeft + " left.");
