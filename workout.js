let a=["ab","cd","ef","gh","ij"];
console.log(a);
//for of loop
for (let b of a){
    console.log(b)
}
//for in
for(let c in a){
    console.log(c)
}
//push
let d = a.push("kl","mn","op"); //return length of an array
console.log(a)
//pop
let e=a.pop() //returns removed value
console.log(a)
//shift
let f=a.shift(); //returns removed value
console.log(a)
console.log(f)
//unshift
let g=a.unshift("AB")  //return length of an array
console.log(g)
console.log(a)
//length
console.log(a.length); //return length of an array
//slice
let h=a.slice(2,4)
console.log(h)
//splice
let i=a.splice(2,1,"add");
console.log(a)
//concat
let aa=["AB","CD","EF"]
let j=a.concat(aa)
console.log(j)
//indexOf
let k=j.indexOf("add");
console.log(k)
a[3]="GH"
console.log(a[3])
//includes
let l=j.includes("CD");
console.log(l)
//every
let num=[1,2,4,5,7,33,56,33,98]
//sort
let sor=num.sort();
console.log(sor)
let eve=num.every(e=>e>0);
console.log(eve)
//some
let so=num.some(ee=>ee<=1)
console.log(so)
//reverse
let re=j.reverse();
console.log(re);
//map
let ma=num.map(el=>el*2)
console.log(ma)
//filter
console.log(num)
let fil=num.filter(elem=>elem%2==0);
console.log(fil)
//reduce
let red=num.reduce((act,ca)=>act+ca,2)
console.log(red)
