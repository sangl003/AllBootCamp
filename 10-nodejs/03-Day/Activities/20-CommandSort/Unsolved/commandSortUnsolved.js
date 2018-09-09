// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
const arr =[];
const arg = process.argv;

for (i = 2; i < arr.length;i++){
    arr.push(arg[i]);
}

console.log(arg.sort().join(","));

