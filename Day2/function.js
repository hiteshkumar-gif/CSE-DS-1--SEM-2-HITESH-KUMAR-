//1.with function keyword
function add(a,b){
    return a+b;
}
console.log(add(3,4));
//2.arrow function
const addfun = (a,b)=>{
    return(a+b)
}
console.log(addfun(7,5));
//3.anonymous function and iife(immediately invoked function expression)
(()=>console.log("HEY"))();
(function greet(){
    console.log("hello");
})()