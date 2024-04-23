// Function to simulate buying a bike
function buyBike(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Bought Royal Enfield") // After 2 seconds, the promise is resolved with the message "Bought Royal Enfield"
        },2000)
    })
}

// Function to simulate planning a trip
function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Trip to Ladakh") // After 1 second, the promise is resolved with the message "Trip to Ladakh"
        },1000)
    })
}

// Function to simulate reaching Ladakh
function reachLadakh(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Reached Ladakh') // After 1 second, the promise is resolved with the message "Reached Ladakh"
        },1000)
    })
}

// Function to simulate visiting Pangong Lake
function visitPongongLake(){
    setTimeout(()=>{
        console.log('Visited Pangong Lake') // After 0.5 seconds, the message "Visited Pangong Lake" is logged to the console
    },500)
}

// The promises are chained together to simulate a sequence of events
buyBike()
    .then((result)=>{console.log(result) // Logs the result of buying a bike
    planTrip()
        .then((result)=>{console.log(result) // Logs the result of planning a trip
        reachLadakh()
            .then((result)=>{console.log(result) // Logs the result of reaching Ladakh
            visitPongongLake() // Calls the function to visit Pangong Lake
        })
            
    })
        
})
