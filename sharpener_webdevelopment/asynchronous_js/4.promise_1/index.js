function bookSearchPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const booksearch=Math.random()>0.5;
            if(booksearch){
                resolve("Book found")
            }else{
                reject("Book not found")
            }

        },3000)
    })
}
bookSearchPromise()
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })