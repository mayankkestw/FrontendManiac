// Object.assign creates a shallow copy
const sourceObject = { a: 1, b: 2 };
const shallowCopy = Object.assign({}, sourceObject);

console.log(shallowCopy); // { a: 1, b: 2 }


// spread operator creates a shallow copy
const sourceObject = { a: 1, b: 2 };
const shallowCopy = { ...sourceObject };

console.log(shallowCopy); // { a: 1, b: 2 }

// Object.create creates shallow copy a new object based on prototype (__proto__ will hold the a:1 and b:2 in newObject - prototype chain)
const myObject = { a: 1, b: 2 };
const newObject = Object.create(myObject);

console.log(newObject.a); // 1
console.log(newObject.b); // 2

// Deep copy
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }

  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }

  return newObj;
}

const sourceObject = { a: 1, b: { c: 2, d: { e: 3 } } };
const deepCopyObject = deepCopy(sourceObject);

console.log(deepCopyObject);

