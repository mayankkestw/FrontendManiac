/**
 * Notes
 * 1. This refers to an object
 * 2. The value of this depends on how the function is invoked
 * 
 * Behaviour of this in a Function: this refers to window object
 * Behaviour of this in a object: this refers to the object
 * 
 * Arrow Functions: Arrow Functions don't have defined this. Instead they treat
 * it as a variable and they try to get the value lexically (inherit from parent scope)
 * **/

// const person = {
//     name: 'mayank',
//     getName: function(){
//         return `${this.name}`
//     }
// }

// console.log(person.getName())


// function logging(){
//     console.log(this)
// }

// logging()


// const person = {
//     name: 'mayank',
//     getName: () => {
//         return `${this}`
//     }
// }

// console.log(person.getName()) // window Object

function User(){
    this.name = "mayank"
    this.score = 20
    this.sayUser = function(){
        console.log(this.name)

        // change this to arrow function
        innerFunction = () => {
            console.log(this.name)
        }

        innerFunction()
    }
}

let newUser = new User()
newUser.sayUser()