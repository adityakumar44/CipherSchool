let details ={
    name: "Aditya",
    age: 24,
    address: {
        street:"Brooklyn",
        city: "New York",
        state: "NY",
        passportDetails: {
            passportNumber: "1234567A",
        },
    },
};
// let myName= details.name;
// let age= details.age;
let { name : myName, age} =details;
console.log(myName, age);