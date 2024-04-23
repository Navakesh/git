const li=document.querySelectorAll(".fruit")
//add editbutton on existing items
for(let i=0;i<li.length;i++){
    const addeditbutton=document.createElement('button')
    addeditbutton.className='edit-btn'
    addeditbutton.textContent='edit';
    li[i].appendChild(addeditbutton)
}

const inputText=document.querySelector('#fruit-to-add')
const form = document.querySelector('form')
//form eventlistner to grab the inputvalue
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(inputText.value===""){
        alert('please enter the fruit name')
    }else{
        display(inputText)
    }
    
    inputText.value="";    
})

const ul=document.querySelector('ul')
//displaay items on screen by appending to ul
function display(e){
    const li=document.createElement('li')   
    li.innerHTML=`${e.value}<button class=delete-btn>x</button> <button class=edit-btn>edit</button>`
    ul.appendChild(li)
    
}

//delete functionality
 ul.addEventListener('click',function(d){
    if(d.target.classList.contains('delete-btn')){
        ul.removeChild(d.target.parentElement) 
    }       
})

