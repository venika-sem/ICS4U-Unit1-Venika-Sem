/*This program generates random number
* By Venika Sem
* @version 1.0
* @since Feb-2024
*/

import { createPrompt } from 'bun-promptx'

let randomNumber: number;
let chosenInt: number;

const rseed: number = Math.floor(Math.random() * 1000);
const rgen: () => number = () => Math.floor(Math.random() * 1000);
const idist: (arg0: number, arg1: number) => number = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

randomNumber = idist(0, 9);
try {
    while (true) {
        console.log();
        const chosenNumber: string = readlineSync.question("Enter a number from 0-9: ");
        console.log();
        chosenInt = parseInt(chosenNumber);
        if (chosenInt === randomNumber) {
            console.log("You got the number right!");
            console.log("The number was " + randomNumber + ".");
            break;
        } else if (chosenInt > randomNumber) {
            console.log(chosenInt + " is higher than the random number.");
        } else if (chosenInt < randomNumber) {
            console.log(chosenInt + " is lower than the random number.");
        }
        console.log();                                                                                                                                                      }
} catch (error) {
    console.log("This input isn't an integer.");
}
console.log();
console.log("Done.");
