function handleformsubmit(event){
    event.preventDefault();
    const userdetails={
        'name':event.target.username.value,
        'email':event.target.useremail.value,
        'number':event.target.phone_num.value
    }
    axios
        .post('https://crudcrud.com/api/5b09404cada647a7846672b5939235c0/appointment',userdetails)
        .then((res)=>display(res.data))
        .catch((error)=>console.log(error))
    event.target.reset()
}

window.onload=function(){
    axios
        .get('https://crudcrud.com/api/5b09404cada647a7846672b5939235c0/appointment')
        .then((res)=>{
            for(let i=0;i<res.data.length;i++){
                display(res.data[i])
            }
        })
        .catch((error)=>{console.log(error)})
}

function display(userdetails){
    const setlist =document.querySelector('ul')
    const setitem=document.createElement('li')
    //setitem.innerHTML=`${userdetails.name}-${userdetails.email}-${userdetails.number}`
    //setitem.innerText=`${userdetails.name}-${userdetails.email}-${userdetails.number}`
    //setitem.appendChild(document.createTextNode(`${userdetails.name}-${userdetails.email}-${userdetails.number} `))
    setitem.textContent=`${userdetails.name}-${userdetails.email}-${userdetails.number}`

    const deltebtn=document.createElement('button')
    deltebtn.textContent="delete"
    setitem.appendChild(deltebtn)

    const editbtn=document.createElement('button')
    editbtn.innerText="edit"
    setitem.appendChild(editbtn)

    setlist.appendChild(setitem)
    /*
    const together=`${userdetails.name}-${userdetails.email}-${userdetails.number}`
    setitem.innerHTML=together+`<button class="delete-btn">delete</button> <button>edit</button>`
    setlist.appendChild(setitem)   
    const deltebTn=document.querySelector('.delete-btn')
    */
    /* deltebtn.addEventListener('click',function(event){
        setlist.removeChild(event.target.parentElement)
        localStorage.removeItem(userdetails.email)
    })*/
    deltebtn.onclick=(()=>{    
        axios
            .delete(`https://crudcrud.com/api/5b09404cada647a7846672b5939235c0/appointment/${userdetails._id}`)
            .then((res)=>{
                console.log(res);
                setlist.removeChild(setitem)
            })
            .catch((error)=>{console.log(error)})
    })
    editbtn.addEventListener('click',function(event){
        axios
            .delete(`https://crudcrud.com/api/5b09404cada647a7846672b5939235c0/appointment/${userdetails._id}`)
            .then((res)=>{
                console.log(res);
                setlist.removeChild(setitem)
            })
            .catch((error)=>{console.log(error)})

        document.getElementById('username').value=userdetails.name;
        document.getElementById('useremail').value=userdetails.email;
        document.getElementById('phone_num').value=userdetails.number;
    })    
}
