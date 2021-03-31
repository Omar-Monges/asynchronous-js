function sum(num1, num2) {
    return num1 + num2;
}
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
// debugger;
console.log(calc(5, 8, sum));
let date = (callback) => {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000);
}
function printDate (dateNow){
    console.log(dateNow)
}
date(printDate);