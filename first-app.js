const person = {
    name: 'David',
    age: 22,
    greet() {
        console.log('Hi, my name is ' + this.name);
    }
};
person.greet();