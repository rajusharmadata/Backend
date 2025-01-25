// type - I How to export the file


const sum =(a,b) =>(a+b);
const mul = (a,b)=>(a*b);
const div = (a,b)=>(a/b);
const sub = (a,b)=>(a-b);
const PI = 7.13;

let obj = {
    sum:sum,
    mul:mul,
    div:div,
    sub:sub,
    PI:PI
};
module.exports = obj;


