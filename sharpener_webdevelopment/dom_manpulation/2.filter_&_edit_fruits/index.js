//add editbutton on existing items
const li=document.querySelectorAll(".fruit")
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
    li.className='fruit'
    li.innerHTML=`${e.value}<button class=delete-btn>x</button> <button class=edit-btn>edit</button>`
    ul.appendChild(li)
}

//delete functionality
ul.addEventListener('click',function(d){
    if(d.target.classList.contains('delete-btn')){
        ul.removeChild(d.target.parentElement) 
    }       
})

//edit functionality
ul.addEventListener('click',function(d){
    if(d.target.classList.contains('edit-btn')){            
        inputText.value=d.target.parentElement.firstChild.textContent    
        ul.removeChild(d.target.parentElement)
    }
})

//filter functionality
const filter=document.querySelector('#filter')
filter.addEventListener('keyup',function(f){
    const li=document.querySelectorAll(".fruit") // Move this line here
    const text=f.target.value.toLowerCase()
    for(let i=0;i<li.length;i++){
        gotfruit=li[i].firstChild.textContent.toLocaleLowerCase();
        if(gotfruit.indexOf(text)===-1){
            li[i].style.display='none'
        }else{
            li[i].style.display='flex'
        }
    }
})





