////////////////////////////////
// Easy Going
////////////////////////////////
// for (let i =0; i <= 20; i++){
//     console.log(i);
// }




////////////////////////////////
// Get Even
////////////////////////////////

// for (let i = 0; i <= 200; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }



////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(i = 1; i<100; i++){ 
 if(i%3 === 0 &&  i%5 !== 0){
    console.log('Fizz')
 }else if(i%5 === 0 && i%3 !==0){
    console.log('Buzz')
 } else if(i%5 === 0 && i%3 ===0){
    console.log('FizzBuzz')
 }  
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] =5001
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham city"
//Give D'Art a second hometown by adding "Hawkins"
dart.unshift('Hawkins');
//Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.shift();

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtle = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const iterator of ninjaTurtle) {
    console.log(iterator.toLocaleUpperCase());
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////





////////////////////////////////
// Where is Waldo
////////////////////////////////





////////////////////////////////
//  Excited Kitten
////////////////////////////////





////////////////////////////////
//  Find the Median
////////////////////////////////







