// let myAge = 40

// console.log(myAge)

// let Evelyn = "my birthday is on the 31st of january"

// console.log(Evelyn)

// const student = {
//     name: "Evelyn",
//     age: 34,
//     color: "dark",
//     height: "5.4 ft",
//     isPregnant: true,
// };

// console.log(student)

// let a = 12;
// let b = 34;
// let c = 43;

// const sum = a+b+c;
// console.log(sum);

// const sub = c-b;
// console.log(sub);

// const div = 34/12;
// console.log(div)

// const mut = a*b;
// console.log(mut)

// const modul = c%b;
// console.log(modul)


// let d= 50;
// d++;
// d--;
// console.log(d);

// // prompt("what's your name");

// // comparism operators
// const l = "Tolu";
// const e = "Tolu1";
// const f = "Iyanu";
// const g = 23;
// const h = 47;
// const i = 23;
// const j = "23";

// // equals to
// console.log(g==i);
// console.log(l==e);

// // greater than (>)
// console.log(h>g);
// console.log(g>h);

// //Less Than
// console.log(g < h);
// console.log(g>i)

// //Greater than equals to
// console.log(g >= i);
// console.log(g>=h);

// //Less than equals to
// console.log(g <= i);
// console.log(i >= h)

// //Not Equals To
// console.log(g != i);
// console.log(g != h);

// // Strictly Equals To
// console.log(i === j);
// console.log(i === g);

// // logical operators
// const Greater = c>b ? "yes it is correct" : "no, it is wrong";
// console.log(Greater)

// //Write a program that tells if a user is legible to vote
// let Vage= 65;
// let votingAge = Vage > 18 ? "yes you can vote" : "no, you cannot vote";
// console.log(votingAge);

// let age=65;

// let voting = age < 100 && age >= 18 ? "yes you can vote" : "no, you cannot vote";

// console.log(voting);

// // Write a program that tells if a user is legible to register for (9JA girls)
// let girlsAge= 17;

// let reg = girlsAge <= 20 && girlsAge >=15 ? "no you can register" : "yes, you cannot register";

// console.log(reg);

// // If
// if(y = 30) {console.log("Affirmative")};

// // if else
// let DBpass = "Olofin123";
// let pwd= "Olofin123";

// if(pwd === DBpass){
//     console.log("log in successful")
// }
// else{
//     console.log("incorrect password")
// }


// if(pwd != DBpass){console.log("log in successful")
// }
// else{
//     console.log("incorrect password")
// };

// // if else if


// // prompt
// const Nameprompt= prompt("What's your name?");
// alert(`your name is ${Nameprompt}`);
// console.log(Nameprompt)

// //program to check if a number is even or odd
// let no = parseInt(prompt("enter a number"));
// if(no % 2 === 0){
//     alert(`${no} is an even number`)
// }
// else{
//     alert(`${no} is an odd number`)
// };

// const firstnumb = parseInt(prompt("choose a number"));
// const secondnumb = parseInt(prompt("choose a number"));

// const total= (firstnumb + secondnumb);

// console.log(total);

// // write a program to determine the greatest of two numbers
// let box1 = parseInt(prompt("choose a number"));
// let box2 = parseInt(prompt("choose a number"));

// if(box1 > box2){
//     console.log("box1 is the greatest")
// } else{
//     console.log("box2 is the greatest number")
// }

// // BMI 

// let weight = parseFloat(prompt("enter your weight in CM"));
// let height = parseFloat(prompt("enter your height in M"));

// const BMI = weight/(height*height);

// if(BMI < 18.5){
//     alert(`${BMI} is an underweight`);
//     console.log(BMI);
// } else if(BMI >=18.5 && BMI <= 24.9){
//     alert(`${BMI} is a normal weight`);
//     console.log(BMI);
// } else if(BMI >= 25 && BMI <= 29.9){
//     alert(`${BMI} is an overweight`);
//     console.log(BMI);
// } else if(BMI >=30 && BMI <= 39.9){
//     alert(`${BMI} is obese`);
//     console.log(BMI);
// }
// else{
//     alert("morbidly obese");
//     console.log(BMI);
// }


// write a program that calculates the ticket price based on age with the following conditions: 
// age below 12 pay a ticket price of 5,
// age below 18 pay a ticket price of 10,
// age below 60 pay a ticket price of 20,
// age over 60 pay a ticket price of 15,

let age = parseInt(prompt("enter your age"))

if(age <= 12){
    alert(`The price of your ticket is 5`);
    console.log("The price of your ticket is 5")
}

else if(age <= 18){
    alert(`The price of your ticket is 10`);
    console.log("The price of your ticket is 10")
}

else if (age <= 60){
    alert(`The price of your ticket is 20`);
    console.log("The price of your ticket is 20")
}

else {
    alert(`The price of your ticket is 15`);
    console.log("The price of your ticket is 15")
}

// write a program that determines if a year is a leap year
let year = parseInt(prompt("enter the year"))

const leapYear = year%4;

if(leapYear === 0){
    alert(`This is a leap year`)
    console.log(` This is a leapyear`)
} else{
    alert(`This is not a leap year`)
    console.log(`This is not a leap year`)
}

// write a program that calculates a discount based on the purchase amount. 
// Prices equal or over 100 have a discount of 20. Prices equal or
// over 50 have a discount of 10. Otherwise discount is 0

let amount = parseInt(prompt("enter your purchase amount"))

if(amount >= 100){
    alert(`you have earned a 20% discount on ${amount}`)
    console.log(`you have earned a 20% discount on ${amount}`)
}

else if (amount >= 50){
    alert(`you have earned a 10% discount on ${amount}`)
    console.log(`you have earned a 10% discount on ${amount}`)
}
else{
    alert(`you have earned 0% discount on ${amount}`)
    console.log(`you have earned 0% discount on ${amount}`)
}

// write a program that greets the user based on the time of the day.
// Display good morning, good afternoon or good evening based on the
// time of day when the code is being run

let  time = parseInt(prompt("enter your current time(0-23):"));

if (isNaN (time) || time < 0 || time > 23){
    alert(`Invalid input. Enter a valid number`)
    console.log(`Invalid input. Enter a valid number`)
}else if (time>=0 && time < 12){
    alert(`Good Morning! how may we assit you?`)
    console.log(`Good Morning! how may we assit you?`)
}else if(time >= 12 && time <17 ){
    alert(`Good Afternoon! how may we assit you?`)
    console.log(`Good Afternoon! how may we assit you?`)
}else{
    alert(`Good Evening! how may we assit you?`)
    console.log(`Good Evening! how may we assit you?`)
}


// write a simple number guessing game. Provide a secret number and guess. Based on those
// numbers give players clues if their guess is higher, lower or correct

let secretNum = 30;
let guessNum = parseInt(prompt("pick a number"))

if(guessNum === secretNum){
    alert(`${guessNum} is equal to the secret number`)
    console.log(`${guessNum} is equal to the secret number`)
}else if (guessNum > secretNum){
    alert(`${guessNum} is higher than the secret number`)
    console.log(`${guessNum} is higher than the secret number`)
}
else if(isNaN(guessNum)){
    alert(`${guessNum} is not a number. Please enter a valid number`)
    console.log(`${guessNum} is not a number. Please enter a valid number`)
}
else{
    alert(`${guessNum} is lower than the secret number`)
    console.log(`${guessNum} is lower than the secret number`)
}