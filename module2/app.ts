// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[]
// let favoriteActivities: any[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby, hobby.toUpperCase())
}
