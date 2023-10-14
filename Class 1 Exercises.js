/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

let smallPizzaDiameter = 13
let largePizzaDiameter = 17

console.log(("The area of the small pizza is "),Math.round(smallPizzaArea = Math.PI * ((smallPizzaDiameter/2)**2)))
console.log(("The area of the large pizza is "),Math.round(largePizzaArea = Math.PI * ((largePizzaDiameter/2)**2)))

// 2. What is the cost per square inch of each pizza?
const smallPizzaCost = 16.99
const largePizzaCost = 19.99

smallPizzaCostPerSquareInch = smallPizzaCost / smallPizzaArea
largePizzaCostPerSquareInch = largePizzaCost / largePizzaArea

console.log(("The cost per square inch of the small pizza is $"), (smallPizzaCostPerSquareInch).toFixed(2))
console.log(("The cost per square inch of the large pizza is $"), (largePizzaCostPerSquareInch).toFixed(2))

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
console.log(`Math.round(Math.random()*13)`)

// 4. Draw 3 cards and use Math to determine the highest
// card
Card1 = Math.round(Math.random()*13)
Card2 = Math.round(Math.random()*13)
Card3 = Math.round(Math.random()*13)
console.log(("Card 1 is: "),(Card1))
console.log(("Card 2 is: "),(Card2))
console.log(("Card 3 is: "),(Card3))
console.log(("The highest card is "),Math.max(Card1,Card2,Card3))
/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = 'Mick E.'
let lastName = 'Mouse'
let streetAddress = '101 Magic Kingdom Way'
let city = 'Anaheim'
let state = 'CA'
let zipCode = '90210'
let address = (`${firstName} ${lastName}\n${streetAddress}\n${city}, ${state} ${zipCode}`)
console.log(address)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

console.log(address.indexOf(firstName))
console.log(address.indexOf(lastName))
const extractFirstName = address.slice(0, 6);
const getfirstName = address.indexOf(firstName);
console.log(extractFirstName)
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2020, 3, 1);
const startDate = new Date(2020, 0, 1);
startDateInMs = startDate.getTime(startDate)
endDateInMs = endDate.getTime(endDate)
console.log(("The start date in miliseconds since 1/1/70 is: "), startDateInMs)
console.log(("The end date in miliseconds since 1/1/70 is: "), endDateInMs)
let midpoint = ((startDate.getTime() + endDate.getTime()) / 2);
new Date((startDate.getTime() + endDate.getTime()) / 2);
console.log(`let midpoint = ((startDate.getTime() + endDate.getTime()) / 2)`)
console.log(("The midpoint between 1/1/2020 and 4/1/2020 is: "), new Date(midpoint))