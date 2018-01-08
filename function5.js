function mul(i) {

    var k = i;
    function mul1(j) {
        return k * j;
    }
    return mul1;
}

function add(i) {

    var k = i;
    function add1(j) {
        return k + j;
    }
    return add1;
}


function operation(func, a) {



    return func(a)
}


console.log(operation(mul, 10)(20));
console.log(operation(add, 10)(20));

