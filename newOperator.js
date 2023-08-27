// Constructor pattern
var ref;
function Person(name, description){
    // creates this = {}

    // assignes properties
    this.name = name;
    this.description = description;

    ref = this
    // return this automatically if no non-primitive is return manually 
    // return 2   // primitive, this get returned
    // return [1,2,3] // non-primitive, array got returned
}

const Mayank = new Person("Mayank", "hello");
console.log(Mayank) // returns true 