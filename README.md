google doc link(typeScript code Steps: https://docs.google.com/document/d/1BMsrm1w6VmOF5N8onD1q3QygByxp6eqpJCpcGKyVAjQ/edit?usp=sharing )

TypeScript Installation Different OSWindows Installation
Install Node.js:

Download the LTS version from nodejs.org

Run the installer with default settings

Install TypeScript:

Open Command Prompt

Run: npm install -g typescript

Verify Installation:

tsc --version

macOS Installation
Install Node.js:

Using Homebrew: brew install node

Or download from nodejs.org

Install TypeScript:

npm install -g typescript

Ubuntu Installation

# Step 1: Install Node.js and npm

sudo apt update
sudo apt install nodejs npm -y

# Step 2: Install TypeScript

sudo npm install -g typescript

# Step 3: Verify installation

tsc --version

# Step 4: Create a TypeScript file

touch index.ts

# Step 5: Compile TypeScript to JavaScript

npx tsc

# For automatic compilation on changes:

npx tsc --watch

TypeScript Introduction
TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

Why should I use TypeScript?
JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

Link \:TypeScript full introduction

TypeScript Premitive Data types and Syntax
let myName: string = "Name"; //String value
let myNumber: number = 2; //Number value
let myBoolean: boolean = true; //Boolean value

let myUnderFineVar: undefined = undefined; //undefined value
let myNulls: null = null; //null value

TypeScript Arrays
//Arrays

//number Array
let myNumberArray\:number = \[1,2,3,4,5]

//string Array
let myStringArray\:string =\["Apple","banana"]

//Mix dataType Array
let myMixArray:(string | number | boolean)\[] = \["apple",1,true]

//Array in Array
let arraysInArrays\:number\[] = \[\[1,2,3],\[1,2,3,4],\[1,2,3,4,5]]

//Mix dataType Array in Array
let mixArraysInArrays:(string | number | boolean )\[]\[] = \[\["Apple",2,3],\[1,true,3,4],\["banana",2,true,4,5]]

//fix length array (use topple)
let fixArray:\[string, number, string] = \["apple",1,"banana"]

//Syntax ==========================================================================================
let myName: string = "Name"; //String value
let myNumber: number = 2; //Number value
let myBoolean: boolean = true; //Boolean value

let myUnderFineVar: undefined = undefined; //undefined value
let myNulls: null = null; //null value

console.log(myName)
console.log(myNumber)
console.log(myBoolean)
console.log(myUnderFineVar)
console.log(myNulls)

//Arrays ==============================================================================================
let myNumberArray\:number = \[1,2,3,4,5]
let myStringArray\:string =\["Apple","banana"]

let myMixArray:(string | number | boolean)\[] = \["apple",1,true]
let arraysInArrays\:number\[] = \[\[1,2,3],\[1,2,3,4],\[1,2,3,4,5]]
let mixArraysInArrays:(string | number | boolean )\[]\[] = \[\["Apple",2,3],\[1,true,3,4],\["banana",2,true,4,5]]

//fix length array (use tople)
let fixArray:\[string, number, string] = \["apple",1,"banana"]

//objects ===========================================================================================

//we can reuse custom type {name\:string; age\:number;}

type Person ={  //3
name\:string,
age\:number
}
let person1:{name\:string; age\:number;} = { // 1
name:"Vishan",
age:27
};

let person2:{name\:string; age\:number;} = { //2
name:"sanduni",
age:27
};

//use custom type
let person3\:Person = { //4
name:"sanduni",
age:27
};

//we can reuse custom type {name\:string; age\:number;}
/\*
type Person ={
name\:string,
age\:number
}\*/

//functions====================================================================================================

function add(a\:number,b\:number)\:number //(a\:number,b\:number)\:number this is variable data types and return type
{
return a+b;
}

function logHello(massage\:string) \:void{ //no return types in function
console.log(massage)
}

// return array
function  getArray(arr\:number)\:number{
return arr;
}

//arrow function
let add1 = (a\:number,b\:number)\:number =>{
return a+b;
}

//any and unknunknownVarown (any use to bybass type script{ eka use krnne onama datatype ekak danna} ||)============================================================================================================
let myVariable\:any = 4;
let unknownVar\:unknown = 4;

myVariable ="dfdSGDG";
unknownVar ="sdfdsgd"

myVariable.toUpperCase();

//unknownVar.toUpperCase();  // mehi data type ek danne nethi hind to uppercase krnn be   apita ek hdnn puluwn

if(typeof unknownVar === "string"){
unknownVar.toUpperCase();
} // mehidi wenne conitiion eken check karala meka string ekak da kiyl

(unknownVar as string).toUpperCase()// type assentioin

//custom types ==================================================================================

type MyCustomString = string;
type MyCustomNumber = number;
type MyCustomBoolean = boolean;
type MyCustomStringOrNumber = string | number;

let nyNameS ="Vishan";
let myNum\:MyCustomNumber = 1;
let myBoolean1\:MyCustomBoolean =true
let myChoice\:MyCustomStringOrNumber = 1;  // api type eka string or number walata define krpu nisa e jathi deken ekak denna puluwn

//custom object type
type Person ={
name\:string,
readonly  age\:number, // readonly modifier
address?\:string // mema Quction mark eken wenne e property ek optional kirimai.awashya nm use karanna puluwan one nattam ain krnn puluwn
}

// ex:
let person4\:Person = { //5
name:"sanduni",
age:27
};
/*person4.age = 34; // mekata nawatha value ekak danna be readOnly dalathina nisa*/

//Litteral types=============================================================================================================================================

let direction:"North" = "North";
/*direction = "west"*/ // litteral types walidi wena values assign krnn be

let direction1:"North" |"West" |"East" |"South" = "North"
direction1 = "East" // dila thina litteral walin ("North" |"West" |"East" |"South") onama ekak mehidi assign krnn puluwn

//custom type litteral
type Direction = "North" |"West" |"East" |"South";
let direction3 \:Direction = "East"

genarate github readme file for code like animtion input  i want readme code for all show in one page
