/*
    name and citizienship no


    name : must be filled
    cn : must be 11 chars
 
 
*/


let name = prompt("please enter your name :");
let cn = prompt("Please enter your citiziensjip number");

function check(name ,cn){

    if(name!=""){
        if(cn.length==11){
            console.log("Login Succesfully")
        }else{
            console.log("Your citizienship number must be 11 chars!!")
        }
    }else{
        console.log("Name must be filled")
    }
}

check(name,cn);