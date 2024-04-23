/* 1st problem-start 1 end
console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
})
console.log("end")*/

/* 2nd problem - start 1 end 2
console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)
})
promise1.then(res=>{
    console.log(res)
})
console.log('end')*/


/*3rd problem - start 1 3 end 2
console.log('start');
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)
    console.log(3)
})
promise1.then(result=>{
    console.log(result)
})
console.log('end')*/


/* 4th problem-start 1 end
console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
})
promise1.then(result=>{
    console.log(2)
})
console.log('end')*/



/* 5th problem-start middle 1 end success*/
console.log('start')
const fn = () => (
    new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
    })
)
console.log('middle')
fn().then(res => {
  console.log(res)
})
console.log('end')
