// Polyfills

const testObj = {
    name: "mayank"
}

function logging(message){
    console.log(message, this.name)
}

// call
Function.prototype.myCall = function(obj, ...args){
    obj.fn = this
    return obj.fn(...args)
}
logging.myCall(testObj, "hello")


// apply
Function.prototype.myApply = function(obj, args){
    obj.fn = this
    return obj.fn(...args)
}
logging.myApply(testObj, ["hello"])


// bind
Function.prototype.myBind = function(obj, ...args){
    obj.fn = this
    return function(){
        return obj.fn(...args)
    }
}
const newLogger = logging.myBind(testObj, "hi")
newLogger()

// map

Array.prototype.myMap = function(fn){
    const res = [];
    for(let i=0; i<this.length; i++){
        res.push(fn(this[i]))
    }
    return res
}

const arr1 = [1,2,3,4,5]
console.log(arr1.myMap(num=>num*2))


// filter

Array.prototype.myFilter = function(fn){
    const res = [];
    for(let i=0; i<this.length; i++){
        if(fn(this[i])){
            res.push(this[i])
        }
    }
    return res
}

const arr2 = [undefined, 0, "happy", '', 3, null]
console.log(arr2.myFilter((item)=>item))


// reduce

Array.prototype.myReduce = function(fn, init){
    let res;
    if(init!==undefined){
        res = init
    }else{
        res = this[i]
    }

    for(let i=0; i<this.length; i++){
        res = fn(res, this[i])
    }

    return res
}

const arr3 = [1,2,3,10,12]
console.log(arr3.myReduce((acc, num)=>acc * num, 1))


// Debouncing
function debounce(fn, wait){
    let timeout;
    
    return function(...args){
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            fn.apply(this, args)
        }, wait)
    }
}


// Throttling
function throttle(fn , wait){
    let shouldWait = false;
    
    return function(...args){
        if(shouldWait) return;
                
        fn.apply(this, args)
        shouldWait = true
        setTimeout(()=>{
            shouldWait = false
        }, wait)
    }
}
