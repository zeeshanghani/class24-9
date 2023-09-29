"use strict";
let myPromise = new Promise((resolve, reject) => {
    console.log("promise pending");
    setTimeout(() => {
        // var data=["Adnan arrange class "];
        var data = "";
        if (data) {
            console.log("promise resolcve");
            return resolve(data);
        }
        else {
            console.log("promise reject ");
            return reject(new Error("ap ka data nhi mill raha"));
        }
    }, 2000);
});
myPromise.then((res) => console.log(res)).catch((error) => console.log(error));
var students = ["Adnan", "Asif", "GHani", "Sabri"];
students.forEach((elem) => {
    console.log(elem.toUpperCase());
});
