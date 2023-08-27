/**
 * A closure is the combination of a function bundled together with references to its surrounding
 * state (the lexical environment). It gives you access to the outer function scope from an inner
 * function. In Javascript, closures are created every time a function is created, at function
 * creation time.
 */

// addBaseNum ( closure )
function createBase(baseNum){
    return function(num){
        return num+baseNum;
    }
}

const addTen = createBase(10);
console.log(addTen(5))
console.log(addTen(12))

// print number 1 to 5 using closure
for(var i=1; i<=5; i++){
    ((i) => {
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    })(i);
}



// pub-sub pattern ( closure example )

const pubSub = function(){
    const subscribers = {};

    function publish(eventName, data){
        if(!subscribers[eventName]){
            return
        }
        subscribers[eventName].forEach(callback => {
            callback(data)
        });
    }

    function subscribe(eventName, callback){
        if(!subscribers[eventName]){
            subscribers[eventName] = []
        }
        subscribers[eventName].push(callback)
    }

    return { publish, subscribe };
}

const PS = new pubSub();
PS.publish("party 1", "yoyo")
PS.subscribe("party 1")