//let a = 5;
//a = a + 1;
//let b = 17;
//b = a - 1;

//console.log(a);
//console.log(b);

//let a = !'';

//console.log( a);

//let a = 5;

//if (typeof a == "number"){

    //console.log (a * a);

//}

//let a  = Number(promp("Vase godine"));

//if (a >= 18){

  //console.log("Punoletni ste")
//} else{
  //console.log("Niste punoletni")
//}

let god = Number( prompt("Unesi godine"));

if(Number.isNaN(god)) {
  console.log("Niste uneli broj!");}
 else{ if ( god >= 18) {
     console.log("Punoletni ste");

} else{
  console.log ("Niste punoletni");
  
}}


