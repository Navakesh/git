function writeLetter(callback){
    setTimeout(()=>{
        console.log("Wrote Letter");
        callback();
    },2000)
    

}

function postLetter(){
    setTimeout(function(){
        console.log("Letter posted")
    },1000)
}

writeLetter(postLetter)