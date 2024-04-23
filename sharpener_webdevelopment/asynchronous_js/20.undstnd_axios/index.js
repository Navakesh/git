const postBtn=document.getElementById('post-btn');
const getBtn=document.getElementById('get-btn');
const putBtn=document.getElementById('put-btn');
const deleteBtn=document.getElementById('delete-btn');

postBtn.addEventListener('click',postTodo);
getBtn.addEventListener('click',getTodo);
putBtn.addEventListener('click',putTodo);
deleteBtn.addEventListener('click',deleteTodo)

function postTodo(){
    axios.post('https://crudcrud.com/api/05d7509e256d4f368effe1ad51c1e6a2/todo',
    {
        title:"MEET doctor",
        completed:false
    })
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
    
}
function getTodo(){
    axios.get("https://crudcrud.com/api/05d7509e256d4f368effe1ad51c1e6a2/todo")
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
}
function putTodo(){
    axios.put('https://crudcrud.com/api/05d7509e256d4f368effe1ad51c1e6a2/todo/66015a311492af03e8f101fc',
    {
        title:"MEET Doctor",
        completed:true,
    })
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
}
function deleteTodo(){
    axios.delete('https://crudcrud.com/api/05d7509e256d4f368effe1ad51c1e6a2/todo/660159ed1492af03e8f101f8')
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
}









