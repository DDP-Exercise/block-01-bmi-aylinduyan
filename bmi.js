"use strict";
/*******************************************************
 *     bmi.js
 *
 *     Write a small program that calculates the Body Mass Index according to parameters,
 *     given by the user. It should generate a textbased representation like the following:
 *
 *     -----------------------------------------------------
 *     Name:		         :LAST NAME:, :First name:
 *     -----------------------------------------------------
 *     Age:                  :age: Years
 *     Height:		         :size:m (i.e. 1,81m)
 *     Weight:	             :weight: kg
 *     Basal Metabolic Rate: <bmr> kcal
 *     Body Mass Index:	     <bmi>
 *     Normal Weight:        <Yes/No>
 *     Danger:		         <Yes/No>
 *     -----------------------------------------------------
 *
 *     To do so, collect data from your users. Values within :colons: are (formatted) user-inputs;
 *     values within <angle brackets> have to be calculated by your software.
 *
 *     Aylin Duyan - 2026-03-05
 *******************************************************/

const LINE = "------------------------------------------------";
let bmr, bmi, normal, danger;

let firstName = prompt("Geben Sie Ihren Vornamen ein:");
let lastName = prompt("Geben Sie Ihren Nachnamen ein:");
let age = Number(prompt("Geben Sie Ihr Alter in Jahren ein:"));
let height = Number(prompt("Geben Sie Ihre Größe in cm ein:"));
let weight = Number(prompt("Geben Sie Ihr Gewicht in kg ein:"));
let gender = prompt("Geben Sie Ihr Geschlecht ein (male/female) ein:");

while (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
    gender = prompt("Bitte geben Sie male oder female ein:");
}

/**
 * Formulas:
 *
 * BMR = A + B × weight [kg] + C × height [cm] − D × age [years]
 *      For women: A=655, B=10, C=2, D=6
 *      For men: A=66, B=14, C=5, D=7
 *
 * BMI = (10000 * weight [kg]) / height² [cm]
 *
 * Normal Weight = Any BMI between 18 and 25 (including 18 and 25).
 * Danger = Any BMI lower than 16 or 30+.
 **/

if (gender.toLowerCase() === "female") {
    bmr = 655 + 10 * weight + 2 * height - 6 * age;
} else {
    bmr = 66 + 14 * weight + 5 * height - 7 * age;
}

bmi = (10000 * weight) / (height * height);

if (bmi >= 18 && bmi <= 25) {
    normal = "Ja";
} else {
    normal = "Nein";
}

if (bmi < 16 || bmi >= 30) {
    danger = "Ja";
} else {
    danger = "Nein";
}
console.log(LINE);
console.log("Name:\t\t\t" + lastName.toUpperCase() + ", " + firstName);
console.log(LINE);
console.log("Age:\t\t\t" + age + " Jahre");
console.log("Height:\t\t\t" + (height / 100) + " m");
console.log("Weight:\t\t" + weight + " kg");
console.log("Basal Metabolic Rate:\t\t" + bmr + " kcal");
console.log("Body Mass Index:\t" + bmi);
console.log("Normal Weight:\t\t" + normal);
console.log("Danger:\t\t\t" + danger);
console.log(LINE);
