const ul=document.querySelector('ul')
//function grabs the values when form gets submited by clicking submit button
function handleform(event){
    event.preventDefault()
    const name=event.target.username.value;
    const email=event.target.useremail.value;
    const number=event.target.usernumber.value;
    const userdetails={
        name,
        email,
        number
    };
    localStorage.setItem(userdetails.email,JSON.stringify(userdetails));
    event.target.username.value="";
    event.target.useremail.value="";
    event.target.usernumber.value="";
    display(userdetails);
}
//To get items from localstorage on page loading   //replica for windowm.onload -->document.addEventListener('DOMContentLoaded',function(){
window.onload = function() {
    // Loop over all keys in local storage
    for (let i = 0; i < localStorage.length; i++) {
        // Get key
        let key = localStorage.key(i);
        // Get the corresponding value
        let value = JSON.parse(localStorage.getItem(key));
        // Display the item
        display(value);
    }
};

// To display on the screen appending to ul
function display(u){
    const li=document.createElement('li')
    li.dataset.email=u.email
    li.innerHTML=`${u.name}-${u.email}-${u.number}<button class=delete>DELETE</button>`;
    ul.appendChild(li)
   /*  li.addEventListener('click',function(e){
        if(e.target.classList.contains('delete')){
            ul.removeChild(e.target.parentElement)
            localStorage.removeItem(e.target.parentElement.dataset.email)
        }
    } )  or */ 
    li.querySelector('.delete').addEventListener('click',function(e){
        ul.removeChild(e.target.parentElement)
        localStorage.removeItem(e.target.parentElement.dataset.email)
    
} )
    
}

// To delete adding eventlistener to ul
/* ul.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
    ul.removeChild(e.target.parentElement)
        console.log(e.target.parentElement)
        localStorage.removeItem(e.target.parentElement.dataset.email)
    }
})  */