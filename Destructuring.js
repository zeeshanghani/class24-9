"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = ["zeeshan", 23, "abc@ElementInternals.com"];
console.log(arr[0]);
let [name, age, email] = arr;
console.log(name);
console.log(email);
let obj = {
    name1: "zeeshan",
    lastName: "ghani",
    age: 40,
    hobies: ["criket", "footbal",]
};
let { name1, lastName, hobies } = obj;
console.log(hobies[1]);
console.log(hobies[1], age); //keys ko aik hi dafa show karwany ko concet bolty hain
