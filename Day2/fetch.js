fetch("https://fakestoreapi.com/products")
    .then((products)=>console.log(products.json()))
    .then((data)=>console.log(data))            
    .catch((error)=>console.log(error));

    const getData =async ()=>{
        const response=await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } 