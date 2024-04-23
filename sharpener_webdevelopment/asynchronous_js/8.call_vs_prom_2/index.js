function boilWater(){
    return new Promise((solve,reject)=>{
        setTimeout(()=>{
            solve("Water boiled")
        },2000)
    })
}

function addCoffeePowder(){
    return new Promise((solve,reject)=>{
        setTimeout(()=>{
            solve("Added coffee powder")
        },500)
    })
}
function brewCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Brewed my coffee")
        },1000)
    })
}

function haveCoffee(){
    setTimeout(()=>{
        console.log("Enjoying my cofee")
    },3000)
    
}
boilWater().then((result)=>{
    console.log(result)
    addCoffeePowder().then((result)=>{
        console.log(result)
        brewCoffee().then((result)=>{
            console.log(result)
            haveCoffee()
        })
    })
})
