// Currying

const addNums = a => b => c => d => a + b + c + d

console.log(addNums(1)(2)(3)(4))

// Advanced Currying

const multiply = (a, b, c, d) => a * b * c * d

const curriedFun = (fn) => {
    return function curried(...args){
        if(args.length>=fn.length){
            return fn.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

const curryMulti = curriedFun(multiply)
console.log(curryMulti(1)(2)(3)(4))
console.log(curryMulti(1,2)(3,4))