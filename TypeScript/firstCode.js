var abc = /** @class */ (function () {
    function abc(a) {
        this.a = a;
    }
    abc.prototype.m = function () {
        console.log(this.a);
    };
    return abc;
}());
var k = new abc(10);
k.m();
