//Write a function that takes an argument and returns that argument.

function identity(arg) {
    
    return arg;


}
console.log('Function identity:');
console.log(identity(3));







//Write two binary functions, add and mul, that take two numbers and return their sum and product
function add(i, j) {
    return i + j;

}


function mul(i, j) {
    return i * j;
}
console .log('Function add and mul:')
console.log('Addition of the two numbers is ' + add(3, 4));
console.log('multiplication of the two numbers is ' + mul(3, 4));







//Write a function that takes an argument and returns a function that returns that argument.

function identityf(arg) {
    function idf() {
        return arg;
    }
    return idf();
}

var idf = identityf(3);
console.log('Functions identityf and idf:')
console.log(idf);







//write a function that adds from two invocations


function addf(a) {
    var c = a;
    function func(b) {
        return add(c, b);
    }

    return func;
}

console.log('Function addf:');
console.log(addf(3)(4));







//write a function that takes a binary function and makes it callable with two invocations

function applyf(func2) {
   
    function func1(a) {

        function func3(b) {
            return func2(a, b);
        }
        return func3;
    }

    return func1;
}
var addf = applyf(add);
console.log('Functions addf and applyf:' );
console.log(addf(3)(4));
console.log(applyf(mul)(5)(6));







//write a function that takes a function and an argument, and returns a function that cans supply a second argument


function curry(func4, a) {
    var c = a;
    function add3(b) {
        return func4(c, b);
    }

    return add3;
};
console.log('Function curry:');
var add3 = curry(add, 3)
console.log(add3(4));//output 7
console.log(curry(mul, 3)(4));//output 12










//without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function 
// //6
console.log("first method");
var inc=curry(add,1);
console.log('Inremented functions:');
console.log(inc(5));//6
console.log(inc(inc(5))); //7

console.log("second method");
  var inc= addf(1);
console.log(inc(5));//6
console.log(inc(inc(5))); //7

console.log("third method");
var res3= applyf(add);
var inc=res3(1);
console.log(inc(5));//6
console.log(inc(inc(5))); //7









//Write  methodize, a function that converts a binary function to a method.



function methodize(func) {
    function func5(Fnum) {
        return func(this, Fnum);
    }
    return func5;
};
console.log('Function methodize:')
Number.prototype.add = methodize(add);
console.log((3).add(4)); // 7









//write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.
// returns 121


function twice(BinFunc) {

    function double(arg1) {
        return BinFunc(arg1, arg1);
    }
    function square(arg1) {
        return BinFunc(arg1, arg1);
    }
    if (BinFunc == add) {
        return double;
    }
    else if (BinFunc == mul) {
        return square;

    }

}
console.log('Function twice:')
var double = twice(add);

console.log('The double of the value is ' + double(11)) // retuns 22

var square = twice(mul);

console.log('The square of the value is ' + square(11));//returns 121








//write a function composeu that takes two unary functions  and returns a unary function that can ball them both



function composeu(UnFunc1, UnFunc2) {
    function result(arg) {
        var res1 = UnFunc1(arg);
        var res2 = UnFunc2(res1);
        return (res2);
    }

    return result;

}
console.log('Function composeu :The double and the square of the number is : ')
console.log(composeu(double, square)(3)); // 36


