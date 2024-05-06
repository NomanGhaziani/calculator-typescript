#!/usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome TO \'NomanGhaziani\' - CLI Simple Calculator\n");
let answer = await inquirer.prompt ([
  {message :"Enter your First Number" , type:"Number",name: "FirstNumber"},
  {message :"Enter your Second Number",type:"Number",name: "SecondNumber"},
{
    message :"select one of operators to perform opration",
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction","Multiplition","Division",],
},
])  
if(answer.operator === "Addition"){
  console.log(answer.FirstNumber + answer.SecondNumber);
}
else if(answer.operator === "Subtraction"){
  console.log(answer.FirstNumber - answer.SecondNumber);
}
 else if(answer.operator === "Multiplition"){
  console.log(answer.FirstNumber * answer.SecondNumber);
 }
  else if(answer.operator === "Division"){
    console.log(answer.FirstNumber / answer.SecondNumber);}
  else{"please select correct oprator"};