function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    return y;
}

var result = x()
//console.log(a);
result();


//! clouser a fn bind together with its lexical environment