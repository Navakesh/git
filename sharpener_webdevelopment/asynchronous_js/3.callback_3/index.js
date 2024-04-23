function learnJavaScript(callback){
    setTimeout(()=>{
        console.log("JavaScript Learned");
        callback();
    },2000)
}

function LearnReact(){
    setTimeout(()=>{
        console.log("React Learned")
    },1000)
}

learnJavaScript(LearnReact)