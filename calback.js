// function a(cals){
//     cals();
// }

// function b(){
//     console.log("Ya i understood");
// }
// a(b);

// function no(g) {
//     // let a=9;
//     // let b=1;
//     console.log(g)
// }
// function nor(c,d){
//     // let c=10;
//     // let d=10;
//     let e=console.log(c*d)
//     return e
// }
// no(nor(1,2));

// function cake(name){
//     console.log("You ordered cake is ready in " + name +" shop" );

// }
// function shop(){
//     let shopname="FB Cakes"
//     return shopname;
// }
// cake(shop())

function cake(name){
    console.log("Your order is ready");
    name()
}
function flavour(){
   console.log("Vannila cake")
}
cake(flavour)

function details(){
    let det=["Gayu",27,"MBA","Fresher"]
    let name=det[0]
    let deta=det.indexOf("MBA")
    console.log(deta)
    det[2]="BCA"
    console.log(det)
    for( let i=0;i<det.length;i++) {
        console.log(det[i])
    }
    return name
    
}
function vaccancy(candidate){
    console.log( candidate +" is selected");
    console.log("Please take the offer")
}
vaccancy(details());

Promise;





