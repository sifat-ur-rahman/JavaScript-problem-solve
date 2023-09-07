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