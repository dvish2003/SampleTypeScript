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
let myNumberArray:number[] = [1,2,3,4,5]
let myStringArray:string[] =["Apple","banana"]

let myMixArray:(string | number | boolean)[] = ["apple",1,true]
let arraysInArrays:number[][] = [[1,2,3],[1,2,3,4],[1,2,3,4,5]]
let mixArraysInArrays:(string | number | boolean )[][] = [["Apple",2,3],[1,true,3,4],["banana",2,true,4,5]]

//fix length array (use tople)
let fixArray:[string, number, string] = ["apple",1,"banana"]



//objects ===========================================================================================

//we can reuse custom type {name:string; age:number;}

type Person ={  //3
    name:string,
    age:number
}
 let person1:{name:string; age:number;} = { // 1
    name:"Vishan",
     age:27
 };

 let person2:{name:string; age:number;} = { //2
    name:"sanduni",
     age:27
 };

 //use custom type
  let person3:Person = { //4
    name:"sanduni",
     age:27
 };



 //we can reuse custom type {name:string; age:number;}
/*
type Person ={
    name:string,
    age:number
}*/


//functions====================================================================================================

function add(a:number,b:number):number //(a:number,b:number):number this is variable data types and return type
{
    return a+b;
}

function logHello(massage:string) :void{ //no return types in function
    console.log(massage)
}

// return array
function  getArray(arr:number[]):number[]{
    return arr;
}

//arrow function
let add1 = (a:number,b:number):number =>{
    return a+b;
}


//any and unknunknownVarown (any use to bybass type script{ eka use krnne onama datatype ekak danna} ||)============================================================================================================
let myVariable:any = 4;
let unknownVar:unknown = 4;

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
let myNum:MyCustomNumber = 1;
let myBoolean1:MyCustomBoolean =true
let myChoice:MyCustomStringOrNumber = 1;  // api type eka string or number walata define krpu nisa e jathi deken ekak denna puluwn


//custom object type
type Person1 ={
    name:string,
    readonly  age:number, // readonly modifier
    address?:string // mema Quction mark eken wenne e property ek optional kirimai.awashya nm use karanna puluwan one nattam ain krnn puluwn
}

// ex:
let person4:Person1 = { //5
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
let direction3 :Direction = "East"


//type narrowing=============================================================================================================================================
function test(val: string|number){
if(typeof val === "string"){

}else if(typeof val === "number"){

}
}


//Descriminated unions=============================================================================================================================================
type Circle ={
    type:"circle"
    radius:number
}
type Square ={
    type:"square"
    width:number
    height:number
}

type Shape = Circle | Square

function test2(val:Shape){
    if(val.type === "square"){  // type narrowing use discriminated union
        console.log(val.width)
    }else
    if(val.type === "circle"){
        console.log(val.radius)
    }
}


//interSection types=============================================================================================================================================
type  Point2D ={
    x:number
    y:number

}
/*  normal type create   1
type  Point3D ={
    x:number
    y:number
    z:number
}
*/

//use intersection  (ints like two type merge) 2
type  Point3D = Point2D &{
    z:number
}


//Interface=============================================================================================================================================
interface Point2D_1{ // interface same type
    x:number
    y:number
}
interface Point3D_1 extends Point2D_1{ // interface merge use extend keyword
    z:number

}



//Generics=============================================================================================================================================
//1 scenario

type CustomType<T> = T
type CustomType_2<K> = K[]   // reusable type

let myName_1:CustomType<string> = "www"
let myArray_1:CustomType_2<string> = ["ss","ss"]



//2 method
type  myObject<T> ={
    name: string,
    age:number,
    data:T
}
interface  myObject_2<T>{
    name: string,
    age:number,
    data:T
}

// we can use type or interface we can see same out put

let human_1:myObject<string> = {
    name: "Vishan",
    age:1,
    data:"ddd"
}
let human_2:myObject<number> = {
    name: "VishMee",
    age:1,
    data:3
}

type Point = {
    x:number
    y:number
}

let human_3:myObject<Point> = {
    name: "Chathuranga",
    age:1,
    data:{
        x:1,
        y:2
    }
}

//Generics use to function ================================================================================================================

//1 Array
function returnArray<T>(arr: T[]):T[]{
    return arr
}

/*
function returnArray<T>(arr: T[]):T[]{
    return arr
}

let returnArray_2 = <T>(arr: T[]):T[] =>{
    return arr
}
arrow funtion this is short type fucntion 2 function are same


*/

/*
returnArray<number>([1,2,3,4]);
returnArray<string>(["sss","sss","222"]);
*/

returnArray([1,2,3,4]);
returnArray(["sss","sss","222"]);