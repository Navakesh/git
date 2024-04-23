function orderFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let fooddelivery=Math.random()>0.5;
            if (fooddelivery){
                resolve("Food delivered")
            }else{
                reject("Food not delivered")
            }
        },2000)
    })
}
function orderDesert(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let desertdelivery=Math.random()>0.5;
            if(desertdelivery){
                resolve("Dessert delivered")
            }else{
                reject("Desert not delivered")
            }
        },2000)
    })
        
}
orderFood()
    .then((result)=>{
        console.log(result)
        return orderDesert()
    })
    
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })