// function declaration 
/* function add(first, second){
    const total =  first + second;
    return total;
} */



// function expression 
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
// function expression with anonymous function
const add2 = function (first, second) {
    const total = first + second;
    return total;
}



function add3(first, second) {
    const total = first + second;
    return total;

}


function add4(first, second) {
    return first + second;

}


const add5 = function (first, second) {
    return first + second;
}
const add6 = (frist, second) => frist + second
const result = add6(10, 20);
console.log(result);


const add = (frist, second) => {

    const total = frist + second
    return total;
};

const num = add(323, 44)
console.log(num);


// interview question: differences between
// function declaration, function expression and arrow function