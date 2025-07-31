// let ticket=new Promise((resolve,reject)=>{
// let booking=false;
// if(booking){
//     resolve()
// }else{
//     reject()
// }
// })

// // ticket.then(()=>{
// //     console.log("Super")
// // })
// // .catch(()=>{
// //     console.log("It's Ok")
// // })
// ticket.then(success)
// .catch(failure)
// function success(){
//     console.log("Super")
// }
// function failure(){
//     console.log("It's Ok")
// }

//marks
let boardExam=new Promise((resolve,reject)=>{
    let totalMarks=498;
    let cutOff=490;
setTimeout(()=>{
if(totalMarks>=cutOff){
    resolve()
}

    else{
    reject()
} },4000)
}) 
//method 1
boardExam.then(()=>{console.log("Congrats you got seat")})
.catch(()=>{console.log("Try level best")})
//method 2
boardExam.then(success)
.catch(failure)
function success(){
    console.log("Congrats you got seat")
}
function failure(){
    console.log("Try level best")
}

//ex:-
let movie=true;
function waitinQ(){
    return new Promise((resolve,reject)=>{
        if(movie){
            resolve("I brought movie ticket")
        }else{
            reject("Oops, ticket counter is full of crowd")
        }
    })
}
function ticket(){
    waitinQ().then((mgs)=>{console.log(mgs)})
    .catch((mgss)=>{console.log(mgss)})
    .finally(()=>{console.log("OTT Platform")})

}
ticket()