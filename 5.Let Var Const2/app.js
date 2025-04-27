// Var - Let - Const



// var : function scope (so many space in ram)
//let/const : block scope
function say_hello(){
    var say = "Hello World!" // function scope 
    if(true){
        var b = 10; // function scope
        let c = 15; // block slope
        console.log(b);
    }
    console.log(say);
    //console.log(c); //error
}
say_hello();


// var a = 5;
// var a = 10;
// console.log(10);

if(true){
    let a =5;
    //let a =10; - error
    a=10;
    console.log(a); 
}

if(true){
    const a =5;
    
    //a=10; // a is constant can not changeable
    console.log(a); 
}


const user = {
    username :"ömer ",
    password : "123"
}

//user = {}
user.username="faruk";
console.log(user)

