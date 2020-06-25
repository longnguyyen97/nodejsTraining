const name = 'David'; //const don't change the value of its variable
let age = 22; //let can LET you change the value
const hasHobbies = true;

function summmarizeUser(userName, userAge, userHasHobbies)
{
    return (
        'Name is' + 
         userName + 
        ', age is ' + 
         userAge + 
        ' and the user has hobbies: ' 
        + userHasHobbies
        );
}

console.log(summmarizeUser(name, age, hasHobbies));