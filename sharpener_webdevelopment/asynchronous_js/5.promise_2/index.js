function loanSanctionPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const meassage=Math.random()>0.5;
            if(meassage){
                resolve("Loan sanctioned")
            }else{
                reject("Loan not sanctioned")
            }
        },3000)
    })
}
loanSanctionPromise()
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })