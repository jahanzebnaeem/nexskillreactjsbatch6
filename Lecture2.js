// 3+3
// // this is a comment

// /* this is a mulitline
// comment */
// debugger;
// function add() {
//     return 2+4;
// }

// console.log(add());

// a = 2;
// // a++;
// a = a + 1;
// console.log(a);

// console.log(2**0.5);

// function add() {
//     console.log(2+2);
// }

// var value = parseInt(prompt("Enter value"));

// // console.log(typeof(value));

// function add(newValue) {
    
//     console.log(newValue + 2);
// }

// add(value);

// function add() {
//     return 3+3;
// }

// console.log(add());


function calculate(val1, val2, name) {
    
    if (name === 'add') {
        return add(val1, val2)
    }
}

function add(val1, val2) {
    return val1+val2;
    
}

console.log(calculate(2,3, 'add'));