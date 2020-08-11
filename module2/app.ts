const person: {
  name: string;
  age: number;
  hobbies: string[],
  role: [number, string]
} = {
// const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

// person.role.push('admin')
// person.role[1] = 10

person.role = [0, 'admin']

let favoriteActivities: string[]
// let favoriteActivities: any[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby, hobby.toUpperCase())
}
