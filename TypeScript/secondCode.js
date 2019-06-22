function exp(a, b) {
    return (a + b);
}
//runs the code with one optional param, ? defines optional param
function exp1(a, b) {
    console.log(a);
    console.log(b);
}
function holaBhola() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum1 = 0;
    var i;
    for (i = 0; i < num.length; i++) {
        sum1 = sum1 + num[i];
    }
    console.log(sum1);
}
holaBhola(32, 323, 232, 23, 23, 1);
console.log(exp(1, 23));
exp1(2);
var s = function (c) { return console.log(c); }; //lambda function
s(10);
(function () {
    console.log("Hi");
})(); //(); -> through this it will call itself.
