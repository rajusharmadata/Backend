// let n = 5;
// for(let i = 0; i<n;i++){
//     console.log("Backend is start");
// }
// console.log("buy");

// console.log(process.argv);

let args = process.argv;

for(let i = 2;i<args.length;i++){
    console.log("Hello to " ,args[i]);
}

