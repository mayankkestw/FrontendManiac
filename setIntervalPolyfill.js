/**
 * A polyfill implementation for setInterval and clearInterval functions
 */

const createSetIntervalPolyfill = () => {

    let intervalId = 0;
    let intervalMap = {};

    const setIntervalPolyfill = (callbackFn, delay = 0, ...args) => {
        /**
         * @param callbackFn: callback - function
         * @param delay: time - number
         * @param args: rest arguments
         * @returns id
         */
        if(typeof callbackFn !== 'function'){
            throw new Error("callbackFn is not a function")
        }

        let id = intervalId++
        const repeat = () => {
            intervalMap[id] = setTimeout(() => {
                callbackFn(...args);
                if(intervalMap[id]){
                    repeat();
                }
            }, delay)
        }
        repeat();

        return id;
    }

    const clearIntervalPolyfill = (intervalId) => {
        /**
         * @param intervalId: unique id - number
         * @returns null
         */
        clearTimeout(intervalId);
        delete intervalMap[intervalId];
    }

    return {
        setIntervalPolyfill, clearIntervalPolyfill
    }
}


const { setIntervalPolyfill, clearIntervalPolyfill } = createSetIntervalPolyfill()



let c = 0

function greet(){
    c++;
    if(c<=3){
        console.log("hello");
    }else{
        clearIntervalPolyfill(intervalID)
    }
}

var intervalID = setIntervalPolyfill(greet, 1000)



