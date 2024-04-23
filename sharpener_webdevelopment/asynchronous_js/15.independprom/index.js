const projectorPrmose=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rented=Math.random()>0.5;
        if(rented){
            resolve("Projector rented succesfully")
        }else{
            reject("Errr:Projectors out of stock")
        }
    },1000)
})

const pizzasPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let delivered=Math.random()>0.5;
        if(delivered){
            resolve("Pizzas delivered at time")
        }else{
            reject("Error:Pizzas not delivered on time")
        }
    },2000)
})
const friendsPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let available=Math.random()>0.5;
        if(available){
            resolve("Both friends available")
        }else{
            reject("Error:Both friends not available")
        }
    },3000)
})

Promise.all([projectorPrmose,pizzasPromise,friendsPromise])
    .then((res)=>{
        res.forEach((res)=>{
            console.log(res)
        })
    })
    .catch((error)=>{console.log(error)})