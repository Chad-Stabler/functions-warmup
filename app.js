const colors = ['red', 'blue', 'green', 'yellow']

console.log(colors[1]);
// Using its index value in colors, console.log 'blue'

colors.push('purple');
console.log(colors[4]);
// add the value 'purple' to the end of the colors array
// console.log the result

const benny = {
  name: 'Benny',
  age: 6,
  breeds: ['Terrier', 'Chihauhau', 'Pekingese']
}

console.log(`${benny.name} ${benny.age}`);
// Using dot notation, console.log the name and age of Benny

console.log("============ Question 4 ============")
// Using dot notation, console.log any one of Benny's breeds

console.log("============ Question 5 ============")
// Add code to the whisper function so that it takes whatever string is given to it
// and returns an all lower case version

function whisper(word){
  // Your code here
}

console.log(`this should print true: ${whisper('Hello') === 'hello'}`)
console.log(`this should print true: ${whisper('BOOGERS') === 'boogers'}`)


console.log("============ BONUS      ============")

const dogs = [{
  name: 'Benny',
  age: 6,
  breeds: ['Terrier', 'Chihauhau', 'Pekingese']
},
{
  name: 'Finley',
  age: 2,
  breeds: ['Golden Retriever', 'Standard Poodle']
},
{
  name: 'Ruby',
  age: 4,
  breeds: ['Unknown Mix']
}]
console.log("============ BONUS -- 1 ============")
// Using index values and dot notation, console.log each dog's name

console.log("============ BONUS -- 2 ============")
// Using index values and dot notation, console.log the first breed of each dog

console.log("============ BONUS -- 3 ============")
// Using template literals, print the following string
// Benny is 6 years old
