function exp(a:number,b:number){

    return(a+b);
}

//runs the code with one optional param, ? defines optional param
function exp1(a:number, b?:number){

    console.log(a);
    console.log(b);
}

console.log(exp(1,23));
exp1(2);