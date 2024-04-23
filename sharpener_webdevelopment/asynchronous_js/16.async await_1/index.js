async function boardingnbus(){
    try {
        function boardBusAt10(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const busArrivesAt10=Math.random()>0.5;
                    if(busArrivesAt10){
                        resolve("Board the bus")
                    }else{
                        reject("Error:Bus is late")
                    }
                },3000)
            })
        }
        const step1=await boardBusAt10() ;
        console.log(step1)   
        
    } catch (error) {
        console.log(error)
    }
}
boardingnbus()