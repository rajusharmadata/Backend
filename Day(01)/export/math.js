// // type - I How to export the file

//

// let obj = {
//     sum:sum,
//     mul:mul,
//     div:div,
//     sub:sub,
//     PI:PI
// };
// module.exports = obj;

// // Type second
// const sum =(a,b) =>(a+b);
//  const mul = (a,b)=>(a*b);
// const div = (a,b)=>(a/b);
// const sub = (a,b)=>(a-b);
//  const PI = 7.13;

//  module.exports = {
//        sum:sum,
//        mul:mul,
//       div:div,
//       sub:sub,
//     PI:PI
//     };

// type three
// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.div = (a, b) => a / b;
// module.exports.sub = (a, b) => a - b;
// module.exports.PI = 7.13;


// type four
// it is not commanly use 
exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.div = (a, b) => a / b;
exports.sub = (a, b) => a - b;
exports.PI = 7.13;
// this positon give a error 
exports = 6;
// this is understand like variable is the exports so , not use exports only ok;

console.log(exports);