const ul =document.querySelector('ul')
function handleFormSubmit(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.useremail.value;
    const number=event.target.userphone.value;
    const details={
        name,
        email,
        number
    };
    localStorage.setItem(details.email,JSON.stringify(details))
    event.target.username.value="";
    event.target.useremail.value="";
    event.target.userphone.value="";
    display(details)
    
}
window.onload=function(){
    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        const value=JSON.parse(localStorage.getItem(key))
        display(value)
    } 
};
function display(u){
    const li=document.createElement('li');
    li.dataset.email=u.email
    li.innerHTML=`${u.name}-${u.email}-${u.number}  <button class=delete>delete</button> <button class=edit>edit</button>`
    ul.appendChild(li)
}

ul.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        ul.removeChild(e.target.parentElement)
        localStorage.removeItem(e.target.parentElement.dataset.email)
    }
})

ul.addEventListener('click',function(e){
    if(e.target.classList.contains('edit')){
        ul.removeChild(e.target.parentElement)   
        const locakstorage_id=e.target.parentElement.dataset.email    
        const c_localstorage_id=JSON.parse(localStorage.getItem(locakstorage_id))
        document.getElementById('username').value=c_localstorage_id.name
        document.getElementById('useremail').value=c_localstorage_id.email;
        document.getElementById('userphone').value=c_localstorage_id.number

        localStorage.removeItem(locakstorage_id)

    }
})

