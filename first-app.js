const name = 'David'; //const don't change the value of its variable
let age = 22; //let can LET you change the value
const hasHobbies = true;

age = 30;

const summmarizeUser = (userName, userAge, userHasHobbies) => {
    return (
        'Name is ' + 
         userName + 
        ', age is ' + 
         userAge + 
        ' and the user has hobbies: ' 
        + userHasHobbies
        );
}

// const add = (a,b) => {
//     return a+b;
// }
//const addOne = a => a + 1;
const addRandom = () => 1+2;

console.log(addRandom());
console.log(summmarizeUser(name, age, hasHobbies));