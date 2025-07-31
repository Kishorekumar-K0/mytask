// //Array
let Gadgetbox1=['Mobile','Airpods','Tab','Case'];
console.log(Gadgetbox1[0]);  //Find the value based on index
console.log(Gadgetbox1[3]);

Gadgetbox1[2]="USB Cable"; //Modify the Array value
console.log(Gadgetbox1);
console.log(Gadgetbox1[2]); 

console.log(Gadgetbox1.length); //lenght

 for( let i=0; i<Gadgetbox1.length; i++){
    console.log(Gadgetbox1[i]);
 }

Gadgetbox1.push('Temper Glass'); //push
 console.log(Gadgetbox1);

Gadgetbox1.pop(); //pop
 console.log(Gadgetbox1);

Gadgetbox1.unshift('Gorila Glass'); //unshift
 console.log(Gadgetbox1);

Gadgetbox1.shift('Gorila Glass'); //shift
 console.log(Gadgetbox1);


let Gadgetbox2=['Tab', 'Smartwatch', 'Smart Ring', 'Neck band'];
let Gadgets=Gadgetbox1.concat(Gadgetbox2);
console.log(Gadgets);
console.log(Gadgetbox2.length);

for(let j=0; j<Gadgetbox2.length; j++){
    console.log(Gadgetbox2[j]);
}

let choose="Tab"
let index=Gadgets.indexOf(choose);
console.log(index)

if(index>=0){
    console.log("You choose "+ choose +" index of "+ index);
}else {
    console.log("Your selection is invalid")
}

let basket=['Apple', 'Banana', 'Grapes', 'Strawberry']
basket.push("Mango", "Corn")
basket[0]="Papaya"
console.log(basket);
console.log(basket[1]);
console.log(basket.indexOf("Gauva"));
console.log(basket);
let check=basket.includes("Corn");
console.log(check);
basket.splice(4,0,"Add");
console.log(basket);
basket.slice(2,4);
console.log(basket);
//

//some****
// const numbers=[3,5,89,44,56,90,32,1]
// console.log(numbers);
let somes=numbers.some(val=> val<100 && val>2);
console.log(somes);

//Every****
// const number=[3,5,89,44,56,90,32,1]
// console.log(number);
// number.sort();
// console.log("Sort= " + number)
// number.reverse();
// console.log("Reverse= " + number);
let somee=number.every(val=> val<100 && val>=1);
console.log(number.every(val=> val <100 && val>=1));

//map
let ma=[1,2,6,78,9]
let maaps=ma.map((m)=>{
    console.log(m + 10)
})

console.log(maaps)

//for each****
//Syntax:- var((own)=>{
    //console.log(own);
//});

let ints=[1,2,5,6,7,8,9,7];
ints.forEach((coun)=>{
    console.log(coun)
})

let ob=[
    {
        name:'Gayu',
        age:27
    },
    {
        name:'Kayal',
        age:24
    },
    {
        name:'Kani',
        age:34
    }
]
ob.forEach((id)=>{
    console.log("Your Name is " + id.name + " & age is " +id.age )
})
// console.log(basket[1]) //we can get the value from index. //undefined.
// console.log(basket.indexOf("Strawberry")) //we can get the index from value. //return an -1.
// console.log(basket.length);
// basket.push("Orange")
// basket.pop();
// basket.unshift("Oranges")
// basket.shift();
// console.log(basket);
// basket[1]="Cherry"
// let dub=['Banana', 'Gauva', 'Watermelon', 'Muskmelon']
// console.log(dub);
// let fridge=basket.concat(dub);
// console.log(fridge)

// fridge.push("Eggfruit")
// fridge.unshift("Cucumber") 

// let check=fridge.includes("jackfruit")
// console.log(check)

// console.log(fridge.length);

// for(let i=0; i<fridge.length; i++){
//     console.log("The fruit name is " + fridge[i] + " , it's index is " + i);
// }

// let choose="lemon"
// switch(choose){
//     case "Apple":
//         console.log('Available')
//         break;
//     default:
//         console.log('Not Available')
// }



