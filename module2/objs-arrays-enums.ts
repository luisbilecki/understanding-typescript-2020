
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Enum is the first custom type
enum Role  { ADMIN = 5, READ_ONLY = 100, AUTHOR = 201 } // an string is accepted as value too

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[],
//   role: [number, string]
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10

// person.role = [0, 'admin']

// let favoriteActivities: string[]
let favoriteActivities: any[] // really flexible, but is not recommended. We can use the any as a fallback.
favoriteActivities = ['Sports', 5, true, 5.0]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby, hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('is admin')
}
