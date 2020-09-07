const userName = 'Luis'
// userName = 'Luis Bilecki'
let age = 30

age = 29

var result
// function add (a: number, b: number) {
//   result = a + b
//   return result
// }

if (age > 20) {
  let isOld = true
  console.log(isOld)
}

// console.log(isOld)

// console.log(add(3, 4))

// const add = (a: number, b: number = 1) => a + b

// const printOutput: (a: number | string) => void = output => console.log(output)

// const button = document.querySelector('button')

// if (button) {
//   button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5))

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies)

const person = {
  name: 'Luis',
  age: 27
}

const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)
