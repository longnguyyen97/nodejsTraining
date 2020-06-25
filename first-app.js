const person = {
    name: 'David',
    age: 22,
    greet: function() {
        console.log('Hi, my name is ' + this.name); //use the old school function declairable here to refers "this" to the object variable
    },
    greet1() {
        console.log('Hi, my name is ' + this.name); //still the same with the one above but without function
    },
    greet2: () => {
        console.log("My age is " + this.age); // the "this" is refers to the global scope, not to the object person here
    }
};

const hobbies = ['Sports', 'Reading'];
// for(let hobby of hobbies) // "let" here will store every element of hobbies array to "hobby"
// {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby =>  'Hobby: ' + hobby )); //map give you a new array to edit it whatever you one and 
console.log(hobbies);