async function Food(){
    try{
        function orderPizza(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const pizzaDelivered=Math.random()>0.5;
                    if(pizzaDelivered){
                        resolve("Pizza has been delivered")
                    }else{
                        reject("Pizza delivery failed")
                    }
                },2000)
            })
        }

        function orderDEssert(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const desertDelivered=Math.random()>0.5;
                    if(desertDelivered){
                        resolve("Dessert has been delievered")
                    }else{
                        reject("Desert delievery failed")

                    }
                },1000)
            })
        }
        step1=await orderPizza()
        console.log(step1)
        step2=await orderDEssert()
        console.log(step2)

    }catch(error){
        console.log(error)
    }
}
Food()