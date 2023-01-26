//  let arr =[1,2,3,4,5,6];
// let arr2=[];
// for(let i = 0; i < arr.length; i++){
//     arr2[i] = arr[i] * arr[i];
// }
// console.log(arr2);

let arr=[1,2,3,4,5];

let functionformap = (element) => element*element;

let newarry=arr.map(functionformap);
console.log(newarry);