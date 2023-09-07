//--------------------------------------------
// problem: 1 

// Remove falsy values from array 

let array = ['a',false,'b',NaN, 0, undefined, 'c',null,'','d']
//passing Boolean to array.filter() will remove falsy value from array
let newArray=array.filter(Boolean)
// console.log(newArray)

//-------------------------------------------
// problem: 2 

//Convert any value to boolean(true or false)

let value = 'hero'
// console.log(!!value)



//-------------------------------------------
// problem: 3 

//Resizing any array 
let letter = ['a','b','c','d','e']
letter.length = 3
// console.log(letter)


//-------------------------------------------
// problem: 4 

//How to flatter a multi-dimensional array

let num = [1, 2, [3, 4], 5, 6, [[7], 8]]
let newNum = num.flat(Infinity)
// console.log(newNum)


//-------------------------------------------
// problem: 5

//Short conditionals

const captain = "Sakib";

//-------&&-------
//Instead of doing this
 if(captain === "Sakib"){
    console.log('ok')
 }
 //we can use &&
 captain === "Sakib" && console.log('ok')

 //-----||-------
 //Instead of doing this
 if(captain !== "Sakib"){
    console.log('Not ok')
 }
 //we can use &&
 captain !== "Sakib" && console.log('Not ok')



 //-------------------------------------------
// problem: 6

//Replace all occurances of a string
const quote = "React is a JS framework & this framework is the most popular front-end framework right now"

//Replace all occurances of 'framework' with 'library'.
const newQuote = quote.replace(/framework/g,"library")
// console.log(newQuote)

