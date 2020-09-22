"use strict";
// create a function that return whether a servedOrders array is first-come-first-served.
//below should be true. Comment if you would like to test condition for false and uncomment line 10-13. 
const takeOutOrders = [17, 8, 24];
const dineInOrders = [12, 19, 2];
let servedOrders = [17, 8, 12, 19, 24, 2];
//below should be false - uncomment to try but don't forget to comment out line 6-8.
/*const takeOutOrders: Array<number> = [1, 3, 5];
const dineInOrders: Array<number> = [2, 4, 6];
let servedOrders: Array<number> = [1, 2, 4, 6, 5, 3]; */
const orderChecker = (takeOutOrders, dineInOrders, servedOrders) => {
    let answer = true;
    servedOrders.forEach((order) => {
        if (order === takeOutOrders[0]) {
            takeOutOrders.shift();
        }
        else if (order === dineInOrders[0]) {
            dineInOrders.shift();
        }
        else {
            answer = false;
            return 0;
        }
    });
    return answer;
};
console.log(orderChecker(takeOutOrders, dineInOrders, servedOrders));
