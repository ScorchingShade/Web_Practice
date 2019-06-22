function exp(a:number,b:number){

    return(a+b);
}

//runs the code with one optional param, ? defines optional param
function exp1(a:number, b?:number){

    console.log(a);
    console.log(b);
}

function holaBhola(...num:number[]){
    var sum1:number=0;
    var i;

    for(i=0;i<num.length;i++){
        sum1=sum1+num[i];
    }
    console.log(sum1)
}

holaBhola(32,323,232,23,23,1);

console.log(exp(1,23));
exp1(2);

var s = (c:number)=> console.log(c); //lambda function
s(10);


(function(){ //a function with no name

    console.log("Hi");
})();   //(); -> through this it will call itself.