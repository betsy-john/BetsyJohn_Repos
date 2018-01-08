function mul(i,j) {
    return i*j;
        
    }
    
    function add(i,j) {
    
       return i+j;
    }
    
    
    function operation(func, a) {
        var c=a;
        function  func1(b){
        return func(c,b);
                     }
    
        return func1;
    }
    
    
   console.log(operation(mul, 340)(20));
    console.log(operation(add, 10)(20));
    