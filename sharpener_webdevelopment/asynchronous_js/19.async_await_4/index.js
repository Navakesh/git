async function trip(){
    try{
        function checkCar(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const carReady=Math.random()>0.5;
                    if(carReady){
                        resolve("Car is ready")
                    }else{
                        reject("Error:Car needs maintenance")
                    }
                },1000)
            })
        }
        function packForPicnic(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const itemsPacked=Math.random()>0.5;
                    if(itemsPacked){
                        resolve("Packed everything for picnic")
                    }else{
                        reject("Error:Not have some essentials")
                    }
                },0)
            })
        }
        step1=await checkCar()
        console.log(step1)
        step2=await packForPicnic()
        console.log(step2)

    }catch(error){
        console.log(error)

    }
}
trip()