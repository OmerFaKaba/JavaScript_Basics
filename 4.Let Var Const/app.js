// Var -- Let -- Const


/*
------------- SCOPE -------------

-> Global Scope
-> Function Scope
-> Block Scope


*/ 


// var var_name = 10;

// console.log(var_name);


var a = 5; // Global Scope



if(true){
    console.log(a);
}
function method1(){
    console.log(a);
}

method1();



function method2(){
    var num = 10; // Function Scope
    console.log(num);
}
method2();
// console.log(num); - num is not defined


function method3(){
    if(true){
        //Block Scope
    }
    while(true){
        //Block Scope
    }
    for(let i = 0; i<10;i++){
        //Block Scope
    }
}