// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest)

const { expect } = require("@jest/globals")
const { array } = require("prop-types")
const { boolean } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("capSentence", () => {
  test("returns the two strings into a sencetance and capitilizes the names" ,() => {
      expect(capSentence(people)).toEqual([["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]])

  })
})


var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]





// b) Create the function that makes the test pass.

const capSentence = (array) => { array.map(this.name[0]).toUpperCase()
  people: function {
    return '${this.name} is a ${this.occupation}'
  }
 
}

//created a function that will map through the array 
//using .touppercase at value index 0 to make the letter the first letter of each name upper case. 
// used sting interpulation to try and join it back together 









// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("rmvStrngDiv3", () => {
  test("returns array of numbers without the string and boolean values with intengers divided by 3", () => {
    expect(rmvStrngDiv3(hodgepodge1).toEqual([2, 0, -1, 0]))
    expect(rmvStrngDiv3(hodgepodge2).toEqual([2, 1, -1]))

  })
})



var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]





// b) Create the function that makes the test pass.
 // creat a function that revmoves the the strings and boolean values from 
 //the function must also leave the remainders when divided by three 

 const rmvStrngDiv3 = array.filter(array => {
   return newArray = ! "" || boolean
   return newArray = % 3
 })
// i believe that my logic is good because im trying to filter through my array to remove the stringd and booleans then use the modulo to get the reminders of 3 



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// a) Create a test with an expect statement using the variables provided.
describe("cub3", () => {
  test("returns array of numbers added and cubed by three", () => {
    expect(cub3(cubeAndSum1).toEqual([99]))
    expect(cub3(cubeAndSum2).toEqual([1125]))

  })
})




// b) Create the function that makes the test pass.
// create a function that will iterate through the array add all the values in the array. 
// use map to iterate  through the array 
// use map.cube to to multiply the new number by itself 3 times 
const cub3 = array.map(index(0),index =>{
  return newArray = (index(0) + index(1) + index(2)).math.cube(newArray)
})