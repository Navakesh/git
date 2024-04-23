/* 1st problem-start end 1 2
console.log('start')
Promise.resolve(1).then((res) => {
  console.log(res)
})
Promise.resolve(2).then((res) => {
  console.log(res)
})
console.log('end');
*/


/* 2nd problem-start end resolve setTimeout
console.log("start")
setTimeout(()=>{
    console.log("setTimeout")
})
Promise.resolve().then(()=>{
    console.log("resolve")
})
console.log("end")
*/

/* 3rd problem- 1 2 4 timerstart timerend success
const promise=new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(()=>{
        console.log("timeStart");
        resolve("success")
        console.log("timerEnd")
    },0)
    console.log(2)
})
promise.then((res)=>{
    console.log(res)
})
console.log(4)
*/

/* 4th problem - timer1 promise1 timer2
const timer1=setTimeout(()=>{
    console.log("timer1")
    const promise1=Promise.resolve().then(()=>{
        console.log("promise1")
    })
},0)
const timer2=setTimeout(()=>{
    console.log("timer2")
},0)
*/


/* 5th problem -start end promise1 timer1 promise2 timer2
console.log("start");
const promise1=Promise.resolve().then(()=>{
    console.log("promise1");
    const timer2=setTimeout(()=>{
        console.log("timer2")
    },0)
});

const timer1=setTimeout(()=>{
    console.log("timer1");
    const promise2=Promise.resolve().then(()=>{
        console.log('promise2')
    })
},0)
console.log("end")
*/
