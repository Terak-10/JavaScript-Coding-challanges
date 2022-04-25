/*
Coding Challenge #1


Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).


Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:


§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.



*/


/* 
let bmiMark1 = 78 / 1.69 ** 2;
let bmiJohn1 = 92 / 1.95 ** 2;

console.log(bmiMark1, bmiJohn1);

let markHigherBMI = bmiMark1 > bmiJohn1;
console.log(markHigherBMI);

console.log("Ďalší zápis");

let bmiMark2 = 95 / (1.88 * 1.88);
let bmiJohn2 = 85 / (1.76 * 1.76);

console.log(bmiMark1, bmiJohn2);

let markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);

console.log(typeof markHigherBMI, typeof markHigherBMI2);
*/







//////////////////////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #2


Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 




let bmiMark1 = 78 / 1.69 ** 2;
let bmiJohn1 = 92 / 1.95 ** 2;

console.log(bmiMark1, bmiJohn1);

let markHigherBMI = bmiMark1 > bmiJohn1;
console.log(markHigherBMI);

console.log("Ďalší zápis");

let bmiMark2 = 95 / (1.88 * 1.88);
let bmiJohn2 = 85 / (1.76 * 1.76);

console.log(bmiMark2, bmiJohn2);

let markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);

if(bmiMark1 > bmiJohn1) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
*/








//////////////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #3


/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!


Your tasks:

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy


Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106




const averageDolphins = (97 + 112 + 101) / 3;  // 89
const averageKoalas = (109 + 95 + 106) / 3;  // 110
console.log(averageDolphins);
console.log(averageKoalas); 



const score = averageDolphins >= 100 || averageKoalas >= 100;
console.log(score);

if(averageDolphins > averageKoalas && score) {
    console.log("Doplhins are the winners!")
} else if(averageKoalas > averageDolphins && score) {
    console.log("Koalas are the winners!")
} else if(averageDolphins === averageKoalas && score) {
    console.log("It's draw!")
} else {
    console.log("In this challange winners not found LOL")
}

*/










//////////////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #4


/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.


Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”



Test data:
§ Data 1: Test for bill values 275, 40 and 430


Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 




const bill = 275;
console.log(`The bil was ${bill},the tip was ${bill >= 50 && bill <= 300 ? tip = bill / 100 * 15: tip = bill / 100 * 20}, and total value ${bill + tip}`);


const bill2 = 40;
console.log(`The bil was ${bill2},the tip was ${bill2 >= 50 && bill2 <= 300 ? tip2 = bill2 / 100 * 15: tip2 = bill2 / 100 * 20}, and total value ${bill2 + tip2}`);


const bill3 = 430;
console.log(`The bil was ${bill3},the tip was ${bill3 >= 50 && bill3 <= 300 ? tip3 = bill3 / 100 * 15: tip3 = bill3 / 100 * 20}, and total value ${bill3 + tip3}`);


const bill4 = prompt("What's your bill?");
console.log(`The bil wass ${bill4}, the tip was ${bill4 >= 50 && bill4 <= 300 ? tip4 = bill4 / 100 * 15: tip4 = bill4 / 100 * 20}, and total value ${Number(bill4) + tip4}`);

*/





//////////////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #5

