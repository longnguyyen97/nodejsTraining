const fetchData = callback => 
{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve('Done');
        }, 1500);
    });
    return promise;
}
setTimeout(() => {
    console.log('timer is done');
    fetchData().
    then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
},2000);

//javascript and node in general does not block your code until that is done, indeed here it will recognize this so-called "callback"
//function, which should execute in the future, it should call back once it is done so once this timer expired, it will recognize that 
//and then immediately move onto the next line 

console.log('Hello');
console.log("hi!");