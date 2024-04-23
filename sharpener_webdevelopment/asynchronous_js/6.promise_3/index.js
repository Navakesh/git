function concertPassPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const pass=Math.random()>0.5;
            if(pass){
                resolve('Pass received')
            }else{
                reject("pass not received")
            }

        },3000)
    })
}
concertPassPromise()
    .then(function(result){
        console.log(result)
    })
    .catch(function(error){
        console.log(error)
    })