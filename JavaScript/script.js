let myAge = 40

console.log(myAge)

let Evelyn = "my birthday is on the 31st of january"

console.log(Evelyn)

const student = {
    name: "Evelyn",
    age: 34,
    color: "dark",
    height: "5.4 ft",
    isPregnant: true,
};

console.log(student)

let a = 12;
let b = 34;
let c = 43;

const sum = a+b+c;
console.log(sum);

const sub = c-b;
console.log(sub);

const div = 34/12;
console.log(div)

const mut = a*b;
console.log(mut)

const modul = c%b;
console.log(modul)


let d= 50;
d++;
d--;
console.log(d);

// prompt("what's your name");

// comparism operators
const l = "Tolu";
const e = "Tolu1";
const f = "Iyanu";
const g = 23;
const h = 47;
const i = 23;
const j = "23";

// equals to
console.log(g==i);
console.log(l==e);

// greater than (>)
console.log(h>g);
console.log(g>h);

//Less Than
console.log(g < h);
console.log(g>i)

//Greater than equals to
console.log(g >= i);
console.log(g>=h);

//Less than equals to
console.log(g <= i);
console.log(i >= h)

//Not Equals To
console.log(g != i);
console.log(g != h);

// Strictly Equals To
console.log(i === j);
console.log(i === g);

// logical operators
const Greater = c>b ? "yes it is correct" : "no, it is wrong";
console.log(Greater)

//Write a program that tells if a user is legible to vote
let Vage= 65;
let votingAge = Vage > 18 ? "yes you can vote" : "no, you cannot vote";
console.log(votingAge);

let age=65;

let voting = age < 100 && age >= 18 ? "yes you can vote" : "no, you cannot vote";

console.log(voting);

// Write a program that tells if a user is legible to register for (9JA girls)
let girlsAge= 17;

let reg = girlsAge <= 20 && girlsAge >=15 ? "no you can register" : "yes, you cannot register";

console.log(reg);

// If
if(y = 30) {console.log("Affirmative")};

// if else
let DBpass = "Olofin123";
let pwd= "Olofin123";

if(pwd === DBpass){
    console.log("log in successful")
}
else{
    console.log("incorrect password")
}


if(pwd != DBpass){console.log("log in successful")
}
else{
    console.log("incorrect password")
};

// if else if


// prompt
const Nameprompt= prompt("What's your name?");
alert(`your name is ${Nameprompt}`);
console.log(Nameprompt)

//program to check if a number is even or odd
let no = parseInt(prompt("enter a number"));
if(no % 2 === 0){
    alert(`${no} is an even number`)
}
else{
    alert(`${no} is an odd number`)
};

const firstnumb = parseInt(prompt("choose a number"));
const secondnumb = parseInt(prompt("choose a number"));

const total= (firstnumb + secondnumb);

console.log(total);

// write a program to determine the greatest of two numbers
let box1 = parseInt(prompt("choose a number"));
let box2 = parseInt(prompt("choose a number"));

if(box1 > box2){
    console.log("box1 is the greatest")
} else{
    console.log("box2 is the greatest number")
}

// BMI 

let weight = parseFloat(prompt("enter your weight in CM"));
let height = parseFloat(prompt("enter your height in M"));

const BMI = weight/(height*height);

if(BMI < 18.5){
    alert(`${BMI} is an underweight`);
    console.log(BMI);
} else if(BMI >=18.5 && BMI <= 24.9){
    alert(`${BMI} is a normal weight`);
    console.log(BMI);
} else if(BMI >= 25 && BMI <= 29.9){
    alert(`${BMI} is an overweight`);
    console.log(BMI);
} else if(BMI >=30 && BMI <= 39.9){
    alert(`${BMI} is obese`);
    console.log(BMI);
}
else{
    alert("morbidly obese");
    console.log(BMI);
}