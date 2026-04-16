const mypromise = new promise((resolve,reject)=>{
    let age=19;
    if(age>=18){
        resolve("eligible for vote. ")
    }else{
        reject("not eligible for vote")
    }
})
console.log(mypromise);
