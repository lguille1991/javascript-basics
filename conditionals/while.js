let pwd = "tomorrow";
let userGuess = "";

/* while(userGuess !== pwd) {
    userGuess = prompt("Please enter your password");
}

alert("Login successfull"); */


let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number--;
} while (number > 0);

console.log(original + " factorial is " + factorial);