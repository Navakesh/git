function handleform(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.useremail.value;
    const number=event.target.usernumber.value;

    const details={
        name,
        email,
        number
    }
    localStorage.setItem(details.email,JSON.stringify(details))
    event.target.username.value=" ";
    event.target.useremail.value=" ";
    event.target.usernumber.value=" "
    display(details)
    
};
function display(u){
    const ul=document.querySelector('ul')
    const li=document.createElement('li')
    li.innerHTML=`${u.name}-${u.email}-${u.number}`
   
    ul.appendChild(li)
}
