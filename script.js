function print(){
    console.log("Hello World!");
}

function sum(){
    const n1 = parseInt(prompt("Enter Num1 :"));
    const n2 = parseInt(prompt("Enter Num2 :"));
    const summ = n1 + n2;
    return summ;
}

function calc(a ,b){
    const inp = prompt("Enter Operation To perform on Two Integers ");
    if (inp=="+"){
        return a + b;
    }
    else if(inp=="-"){
        return a - b;
    }
    else if(inp=="*"){
        return a * b;
    }
    else if(inp=="/"){
        return a / b;
    }
}

print();
console.log("Sum of the numbers = ", sum());
console.log("Operation performed = ", calc(5,6));