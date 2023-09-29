"use strict";
let x = 10.9332445;
let y = Math.round(x); //agr value 0.1 to 0.4 tak ki ho to 10 show hoga or agr 0.5 to 0.9 ho to 11 show hoga
console.log(x);
console.log(y);
let y1 = Math.ceil(x); // math.ceil mai .1 to .9 tak ki jo bhi value ho gi wo us ko up kr ky round kr dy ga 10.1==>11 
console.log(x);
console.log(y1);
let y2 = Math.floor(x); // math.floor mai .1 sy .9 tak ki jo bhi value ho gi wo us ko ignore kr dy ga
console.log(x);
console.log(y2);
let y3 = Math.trunc(x);
console.log("Math.trunc =", y3);
let y4 = Math.pow(2, 2);
console.log(y4);
let y5 = Math.sqrt(100);
console.log(y5);
let y6 = Math.min(43, 23, 55, 776, 554, 332, 99);
console.log(y6);
let y7 = Math.max(43, 23, 55, 776, 554, 332, 99);
console.log(y7);
