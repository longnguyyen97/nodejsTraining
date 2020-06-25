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

const printName = ({ name }) => 
{
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name,age); 

// const copiedPersion = {...person};
// console.log(person);

const hobbies = ['Sports', 'Reading'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2); //this right here log 2 individual values from hobbies array via array destruturing

// // for(let hobby of hobbies) // "let" here will store every element of hobbies array to "hobby"
// // {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby =>  'Hobby: ' + hobby )); //map give you a new array to edit it whatever you one and 
// // console.log(hobbies);
// //const copiedArray = hobbies.slice(); // slice coppies an array, we can pass arguments to narrow down the range of elements we want
// const copiedArray = [...hobbies]; //created new array where the first element is the OLD array
// // "..." take the array or objects after the operator and pull out all the elements or properties and put it whatever around that spread operator
// console.log(copiedArray);

// const toArray = (...args) => // rest operators here will take all arguments we specified not matter how many of it and bundle it to an array
// {
//     return args;
// };
// console.log(toArray(1,2,3,4,5,6));