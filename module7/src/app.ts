// MainType<GenericType>
// const names: Array<string> = [];
// // names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000);
// })

// promise.then(data => {
//   // data.split(' ')
// })

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: 'Luís', hobbies: ['Sport'] },
  { age: 27 }
);
console.log(mergedObj)
