// Primitive datatype =>call by value //  7 categories
// => string, number, boolean, null,undefined,Symbol,BigInt

const score= 2011
const scorevalue = 102.34
const islogin = true
const temp = null

const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id==anotherid);


// =>BigInt
  const BIGNUMBER = 24453453545375n  




// NOn-Primitive datatype => //
// Array, Objects, Functions

// array
const heroes =["MAngo","banana","grapes"]  

// object
let obj ={
    name:"MAyuresh",
    age:19
}

// Function 

const myfunc=function (){
    console.log("Hello Mayur");
}


console.log(typeof BIGNUMBER );

// ******************************************************
// Stack(Primitive), Heap(NOn-primitive) 

let myytname = "Mayuresh"
let anothername = myytname
anothername = "Akanksha" 
console.log(anothername);

let user1 ={
    email:"user@goggle.com",
    upi:"user@oayoal"
}

let user2 = user1

user2.email="mayuresh@google.com"

console.log(user1.email);
