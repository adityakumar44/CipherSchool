// let arr=[10,20,30,300];
// console.log(arr);
// console.log(...arr);//spread operator
// rest...
let maxofnumber =(...number) => {
    let maximum = Number.MIN_VALUE;
    for(let number of number){
        maximum = Math.max(maximum, number);
    }
    return maximum;
}
console.log(maxofnumber(1,2,3,4,5,6,7,8,9,10));