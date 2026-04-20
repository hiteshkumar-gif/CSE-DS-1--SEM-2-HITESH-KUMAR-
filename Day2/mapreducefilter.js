const num = [1,2,3,4,5,6,7,8];
num.forEach((n)=>console.log(n));
const num2=num.map9((n)=>{return n*2});
console.log(num2);

const divisibleby2 =num.filter((n)=>n%2==0);
console.log(divisibleby2);                                        

const sumofnumarray =num.reduce((acc,val)=>acc+=val,0);
console.log(sumofnumarrray)