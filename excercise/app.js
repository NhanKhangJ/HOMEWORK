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
// for(i = 1; i<100; i++){ 
//  if(i%3 === 0 &&  i%5 !== 0){
//     console.log('Fizz')
//  }else if(i%5 === 0 && i%3 !==0){
//     console.log('Buzz')
//  } else if(i%5 === 0 && i%3 ===0){
//     console.log('FizzBuzz')
//  }  
// }
////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] =5001
// //Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham city"
// //Give D'Art a second hometown by adding "Hawkins"
// dart.unshift('Hawkins');
// //Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.shift();

// ////////////////////////////////
// // Yell at the Ninja Turtles
// ////////////////////////////////

// const ninjaTurtle = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// for (const iterator of ninjaTurtle) {
//     console.log(iterator.toLocaleUpperCase());
// }


// ////////////////////////////////
// // Methods, Revisited
// ////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// //sort change the order of all element in the array to aphalbetical order
// favMovies.sort()
// console.log(favMovies)
// //Pop method
// favMovies.pop()
// console.log(favMovies)
// //Push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)
// //reverse the array
// favMovies.reverse();
// //shift method
// favMovies.shift();
// console.log(favMovies)
// //unshift push the element to the start of the array

// //splice()
// console.log(favMovies.findIndex(e =>  e === "Django Unchained"))//14
// favMovies.splice(14,1,"Avatar")
// console.log(favMovies)
// //clice
// // console.log(favMovies.length/=2)// 9 hafl the lenght of the array
// let halfArray = favMovies.slice(9) 
// console.log(halfArray);


////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [
//     ["Timmy", "Frank"],
//     "Eggbert",
//     ["Lucinda", "Jacc", "Neff", "Snoop"],
//     [
//     "Petunia",
//     ["Baked Goods", "Waldo"]
//     ]
// ];
//Remove Eggbert
// whereIsWaldo.splice(1,1);
// console.log(whereIsWaldo);
// // Change "Neff" to "No one"
// whereIsWaldo[1].splice(2,1, "No One")
// console.log(whereIsWaldo)
// //access and console.log Waldo
// console.log(whereIsWaldo[2][1].slice(1))


////////////////////////////////
//  Excited Kitten
////////////////////////////////


// for (let i=0; i < 20;i++){ 
//     if (i%2 === 0){
//         let randomNumber = Math.floor(Math.random()*3)
//         if(randomNumber===0){console.log("...human...why you taking pictures of me?...")} 
//         if(randomNumber===1){console.log("...the catnip made me do it...")}
//         if(randomNumber===2){console.log("...why does the red dot always get away...")} 
//     }
// } 

// let kittenTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
// for (let i = 1; i<21; i++){
//     if(i%2 === 0){ console.log(kittenTalk[Math.floor(Math.random()*kittenTalk.length)]) }
// }
// console.log(kittenTalk.length) //3
////////////////////////////////
//  Find the Median
////////////////////////////////
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// nums.sort(); //11 -- 71
// console.log(
//    ( nums[Math.floor(nums.length / 2)] + nums[Math.floor(nums.length / 2) + 1] ) /2
//     );

////////////////////////////////
//  Return of the closet
////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// //Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// let kristynsShoe = kristynsCloset[0];
// console.log(kristynsShoe) // left shoe

// thomsCloset[2].push(kristynsShoe); 
// console.log(thomsCloset[2]); //'wool mittens', 'wool scarf', 'raybans', 'left shoe'
//Modify code to get the expected output


//Dress us up
// let outfit1 = kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ' with ' + thomsCloset[0][Math.floor(Math.random()*thomsCloset[0].length)]
// let outfit2 = kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ' with ' + thomsCloset[1][Math.floor(Math.random()*thomsCloset[1].length)]
// let outfit3 = kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ' with ' + thomsCloset[2][Math.floor(Math.random()*thomsCloset[2].length)]
// console.log(
//    `We should wear ${outfit1} or ${outfit2} or ${outfit3}`
// )

//the diffrent way
// let thomLenght = Math.floor(Math.random()*thomsCloset.length);
// let outfit = kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ' with ' + thomsCloset[thomLenght][Math.floor(Math.random()*thomsCloset[thomLenght].length)]
// console.log(
//     `We should wear ${outfit}`
// )

//

//Dirty Laundry
for (i =0; i < kristynsCloset.length; i++ ){
    console.log(
        "WHIRR: Now washing " + kristynsCloset[i]
    )
}

//Inventory
let thomItems = [];
for (let i = 0; i< thomsCloset.length ;i++){
     for (let y=0; y <thomsCloset[i].length; y++){
         thomItems.push(thomsCloset[i][y])
     }
}
console.log(thomItems)