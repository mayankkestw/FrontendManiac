// Memoize

const addThreeNums = (a, b, c) => a + b + c

const memoize = (fn) => {
    const cache = {}

    return (...args) => {
        const hash = JSON.stringify(args)
        if(hash in cache){
            console.log("returning from cache")
            return cache[hash]
        }else{
            console.log("computing value")
            const res = fn.apply(this, args)
            cache[hash] = res
            return res
        }
    }
}

const addThreeNumbers = memoize(addThreeNums)
console.log(addThreeNumbers(1, 2, 3))
console.log(addThreeNumbers(1, 2, 3))

// Output

// computing value
// 6
// returning from cache
// 6