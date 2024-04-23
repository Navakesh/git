function buyBike(call){
    setTimeout(()=>{
        console.log("Bought Royal Enfield Himalayan")
        call()
    },2000)
        
}

function planTrip(){
    setTimeout(()=>{
        console.log("Trip to ladakh planned")
    },1000)
}


buyBike(planTrip)

