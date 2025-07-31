//A function in Javascript is used to defined a named function with optioanal parameters 
// & body of code to execute, when the function is called.
//1) Normal function;
function nor(a,b){
    // console.log(a+b);
    return a
    // let tamil=90;
    // let maths=75;
    // let english=60;
    // let science=80;
    // let social=45;
    // let total=(tamil+maths+english+science+social);
    // console.log(total)
}
console.log(nor(1,2))

//2)Return function;
// function ret(){
//     let tamil=90;
//     let maths=75;
//     let english=60;
//     let science=80;
//     let social=45;
//     let total=(tamil+maths+english+science+social);
//     return tamil;
// }
// console.log(ret());
function re(){
 let c=343;
 return c
}
function er(){

}

//3)Function expression
let sto=function(a,b){
    // let tamil=90;
    // let maths=75;
    // let english=60;
    // let science=80;
    // let social=45;
    // let total=(tamil+maths+english+science+social);
    // console.log(total)
    console.log(a*b)
}
sto(3,3);

//4)Immediate invoked function;
(function imme(a,b){
    console.log(a%b==0)
})
(10,2)

//5)Arrow function

let quick=()=>{
    let a=20;
    return a*2
};
console.log(quick());

//6)First class function
function a1(v1){
    return v1
}
function a2(v2){
    console.log(v2)
}
a2(a1(11));
