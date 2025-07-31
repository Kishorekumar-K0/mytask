//1.Print only odd numbers from an array
let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let oddNumbers=num.filter(num=>num%2==1);
console.log(oddNumbers);

//2.Find the sum of all number in an array
let sums=num.reduce((acc,ele)=>acc+ele,0)
console.log("The sum of all numbers in an array is: " + sums)

//3.Find the maximum number in an array
let max=num.length;
console.log("Total numbers in an array is: " + max)

//Reverse an array
let rev=num.reverse()
console.log(rev)