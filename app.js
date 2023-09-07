// problem: 1 

// Remove falsy values from array 

let array = ['a',false,'b',NaN, 0, undefined, 'c',null,'','d']
//passing Boolean to array.filter() will remove falsy value from array
let newArray=array.filter(Boolean)
// console.log(newArray)


// problem: 2 

//Convert any value to boolean(true or false)

let value = 'hero'
console.log(!!value)