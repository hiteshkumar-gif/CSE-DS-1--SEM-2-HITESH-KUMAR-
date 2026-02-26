/*//data types in javascript
//primitive data types
let name="hitesh";
console.log(typeof name);
let age=19;
console.log(typeof age);
let isstudent = true;
console.log(typeof isstudent);
let score;
console.log(typeof score);
//non primitive user defined
//object creation
let car=null;
console.log(typeof car);
let person={name:"hitesh kumar",age:19};
console.log(typeof person);
console.log(person);*/
//arithmetic operator
/*let a=10;
let b=5;
console.log(a+b);//15
console.log(a-b);//5
console.log(a*b);//50
console.log(a/b);//2
console.log(a%b);//0
console.log(++a);//11
console.log(a++);//11
console.log(--a);//11
console.log(a--);//11*/
/*//assignment
let a=10;
console.log(a+=3);
console.log(a-=3);
console.log(a*=3);
console.log(a/=3);*/
//comparison
/*let a=45;
let b="45";
console.log(a==b);//only value checking
console.log(a===b);//data type checking
console.log(a!=b);//data type
console.log(a!==b);//value
console.log(a>b);
console.log(a<b);*/
/*//string operator
let a="hitesh";
let b=" kumar";
console.log(a+b);*/
/*//ternary opereator
let age=19;
let status =(age>18)?"adult":"minor";
console.log(status);*/
//condition
/*let age=10;
if(age>18){
    console.log("drive");
}
else if(age>=50){
    console.log("not drive");
}
else{
    console.log("no valid drive");
}*/
//switch statement
let day="monday";
switch(day){
    case "monday":
        console.log("start of week");
        break;
    case "tuesday":
        console.log("second day of week");
        break;
    case "wednesday":
        console.log("third day of week");
        break;
    case "thursday":
        console.log("fourth day of week");
        break;
    case "friday":
        console.log("fifth day of week");
        break;
    case "saturday":
        console.log("sixth day of week");
        break;
    case "sunday":
        console.log("end day of week");
        break;
    default:
        console.log("enter correct day");
}

