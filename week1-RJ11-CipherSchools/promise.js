let promise = new Promise((fulfilled, notFulfilled)=>{
    let num1=10;
    let num2=15;
    let sum =num1+num2;
    if(sum >24){
        fulfilled();
    }else{
        notFulfilled(new Error());
    }
});
myPromise
    .then(() => {
    console.log("Promise was fulfilled");
})
.catch(() => {
    console.log("Promise was not fulfilled");

});