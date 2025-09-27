/*
  JavaScript Essentials Before Learning React
  -------------------------------------------
  These examples cover the core concepts you should know in JavaScript before diving into React.
*/

// 1. Variables (let, const, var)
let name = "Alice"; // mutable variable
const age = 25; // immutable variable
var city = "London"; // function-scoped variable (avoid in modern JS)

// 2. Data Types
let number = 42; // Number
let text = "Hello"; // String
let isActive = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let person = { name: "Bob", age: 30 }; // Object
let colors = ["red", "green", "blue"]; // Array

// 3. Functions
function greet(user) {
	return `Hello, ${user}!`;
}

const add = (a, b) => a + b; // Arrow function

// 4. Conditionals
if (age > 18) {
	console.log("Adult");
} else {
	console.log("Minor");
}

// 5. Loops
for (let i = 0; i < 3; i++) {
	console.log(i);
}

colors.forEach((color) => {
	console.log(color);
});

// 6. Objects & Destructuring
const car = { brand: "Toyota", year: 2020 };
const { brand, year } = car; // destructuring

// 7. Arrays & Methods
let nums = [1, 2, 3];
let doubled = nums.map((n) => n * 2); // [2, 4, 6]
let filtered = nums.filter((n) => n > 1); // [2, 3]

// 8. Spread & Rest Operators
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

function sum(...args) {
	return args.reduce((a, b) => a + b, 0);
}

// 9. Classes
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}
const dog = new Animal("Dog");
dog.speak();

// 10. Promises & Async/Await
function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => resolve("Data loaded"), 1000);
	});
}

async function load() {
	const data = await fetchData();
	console.log(data);
}
load();

// 11. Import/Export (ES Modules)
// In separate files:
// export const PI = 3.14;
// import { PI } from './math.js';

// 12. Template Literals
const greeting = `Hi, my name is ${name} and I live in ${city}.`;

// 13. Truthy/Falsy Values
if ("") console.log("Falsy"); // won't run
if ("hello") console.log("Truthy"); // runs

// 14. Short-circuit Evaluation
const userName = null;
const displayName = userName || "Guest"; // "Guest"

// 15. Optional Chaining & Nullish Coalescing
const user = { profile: { email: "a@b.com" } };
const email = user.profile?.email ?? "No email"; // "a@b.com"

// These concepts are foundational for understanding React's syntax and patterns.
