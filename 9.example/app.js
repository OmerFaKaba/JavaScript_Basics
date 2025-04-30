// BODY MASS INDEX

let weight = Number(prompt("Please enter your weight in kg"));
let height = Number(prompt("Please enter your height in meters"));

let bmi = weight / (height * height);
console.log("Your body mass index is " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("You are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You have a normal weight");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight");
} else if (bmi >= 30 && bmi <= 34.9) {
    console.log("You have 1st degree obesity");
} else if (bmi >= 35 && bmi <= 39.9) {
    console.log("You have 2nd degree obesity");
} else {
    console.log("You have 3rd degree (morbid) obesity");
}
