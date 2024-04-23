async  function weathercondition(){
    try{
        function checkWeather(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const isSunny=Math.random()>0.5;
                    if(isSunny){
                        resolve("Let us go for picnic")
                    }else{
                        reject("Error:It is cloudy")
                    }
                },3000)
            })
        }
        step1=await checkWeather()
        console.log(step1)

    }catch(error){
        console.log(error)
    }
}
weathercondition()