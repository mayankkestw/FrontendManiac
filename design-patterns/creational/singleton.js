// Only single instance of a class throughtout app

const Singleton = (function(){
    let instance;

    function createObject(){
        const obj = new Object();
        return obj
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = createObject()
            }

            return instance
        }
    }
})()

const dummy1 = Singleton.getInstance();
const dummy2 = Singleton.getInstance();

console.log(dummy1===dummy2);
