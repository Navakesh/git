function handleformsubmit(event){
    event.preventDefault();
    const productdetails={
        amount:document.getElementById('price').value,
        nameofproduct:document.getElementById('productname').value,
    }
    axios
        .post('https://crudcrud.com/api/b800fd4afb2c48d6bcdc00bf68fb8dee/productsdata',productdetails)
        .then((res)=>{display(res.data)})
        .catch((error)=>{console.log(error)})
        
    event.target.reset()
}
window.onload=function(){
    axios
        .get('https://crudcrud.com/api/b800fd4afb2c48d6bcdc00bf68fb8dee/productsdata')
        .then((res)=>{
            for(i=0;i<res.data.length;i++){
                display(res.data[i])
            }
        })
        .catch((error)=>console.log(error))
}

let totalValue = 0;
function display(details){
    const productslist=document.querySelector('ul')
    const productsdescript=document.createElement('li')
    productsdescript.textContent=`${details.amount} - ${details.nameofproduct} ${" "}`
    
    const deletbtn=document.createElement('button')
    deletbtn.textContent="Delete Product"
    productsdescript.appendChild(deletbtn)

    productslist.appendChild(productsdescript)

    totalValue += parseInt(details.amount);
    const calc=document.querySelector('h2')
    calc.textContent = `Total Value of Product: Rs ${totalValue}`;

    deletbtn.addEventListener('click',function(event){
        axios
            .delete(`https://crudcrud.com/api/b800fd4afb2c48d6bcdc00bf68fb8dee/productsdata/${details._id}`)
            .then((res)=>{
                productslist.removeChild(productsdescript)
                totalValue -= parseInt(details.amount);
                calc.textContent = `Total Value of Product: Rs ${totalValue}`
            })
    })

}