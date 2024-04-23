function checkWeather(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const weather=Math.random()>0.5;
           if(weather){
            resolve("Let us go for picnic")
           }else{
            reject("Error:It is cloudy")
           }
        },3000)
    })
}
checkWeather()
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })