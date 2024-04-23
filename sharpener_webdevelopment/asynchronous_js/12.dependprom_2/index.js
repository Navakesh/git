function goForpicnic(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let sunny=true;
            if(sunny){
                resolve("weather is sunny")
            }else{
                reject("not go for picnic")
            }
        },2000)
    })
}

function checkCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let carcondition=Math.random()>0.5;
            if(carcondition){
                resolve("Car is ready")
            }else{
                reject("Error:Car needs maintenance")
            }
        },2000)
    })
}

function packForPicnic(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let packed=Math.random()>0.5;
            if(packed){
                resolve("Packed everything for picnic")
            }else{
                reject("Error:Not have some essentials")
            }
        })
    })
}
goForpicnic()
    .then((result)=>{
        console.log(result)
        return checkCar()
    })
    .then(result=>{
        console.log(result)
        return packForPicnic()
    })
    .then((result)=>{
        console.log(result)
        console.log("Go for picnic")
    })
    .catch((error)=>{
        console.log(error)
        console.log("Picnic cancelled")
    })