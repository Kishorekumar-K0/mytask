//JS is a programming language, used to create interactive & dynamic web content.
 
//Variables are named as storage for data value, they allow to store & manipulate data within the program.

//var-> it's a global scoped & redeclaration & reassignment is allowed.
//let-> it's a block scoped & only reassignment is allowed.
//const-> it's a block scoped & both not allowed.

// var a=10;
// var a=23;
// a=12;
// console.log(a);

// let b=1;
// b=2;
// console.log(b) 

// const c=100;
// console.log(c);

// function a()
// {
//     var a="Jack"
//     console.log(a);
// };
// a();

//Blocked scpoed & Global scoped.
{
var tamil=10;
let english=8;
const maths=9;
}
console.log(tamil);
//console.log(maths); //compilation error
//console.log(english); //exception handling

//Datatype:-
//Primitive Datatype
//String
let name="KishorekumarK@1999"
console.log(name);
console.log(typeof name);
// number
const d=1999;
console.log(d);
console.log(typeof d);
//boolean
const f= true;
console.log(f);
console.log(typeof f);
//null
const h= null;
console.log(h);
console.log(typeof h);
//undefined;
var o;
console.log(o);
console.log(typeof o);
//Non-primitive
//Array
let details=[1,'a',true,];
console.log(details);

//object
let cake={
    birthday:"Blackforest",
    housewarming:"Vannila",
}
console.log(cake);
console.log(cake.birthday)
console.log(cake["housewarming"])

cake.babyshower="Chocolate cake";
console.log(cake);
cake.housewarming="Butterscotch"
console.log(cake);
delete cake.housewarming;
console.log(cake);

let n=Object.keys(cake);
console.log(n)
let m=Object.values(cake);
console.log(m)
let x=Object.entries(cake)
console.log(x)




//Arithmetic operator
let a1=2;
let a2=4;
let c;
//c=a1+a2
//c=a1-a2;
//c=a1*a2
//c=a1/a2;
//console.log(c);
const va=18;
const av=81;
const ternary= va>av ? "s":"u";
console.log(ternary)

let i=['a','b','c','d','e','f']
i.slice(2,4)
console.log(i)




