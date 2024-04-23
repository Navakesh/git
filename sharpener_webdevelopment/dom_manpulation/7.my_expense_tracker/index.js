function handleform(event) {
    event.preventDefault();
    const eamount = event.target.amount.value;
    const edescription = event.target.description.value;
    const ecategory = event.target.category.value;
    const expensdetails = {
        eamount,
        edescription,
        ecategory,
    };
    localStorage.setItem(edescription, JSON.stringify(expensdetails));
    display(expensdetails);
    event.target.amount.value = '';
    event.target.description.value = '';
    event.target.category.value = 'fuel';
}

window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        display(value);
    }
};

function display(d) {
    const ul = document.querySelector('.list-group');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.dataset.desc = d.edescription;
    li.innerHTML = `
        <span class="font-weight-bold">${d.eamount}</span> - ${d.edescription} - ${d.ecategory} 
        <button type="button" class="btn btn-danger delete-btn float-right">Delete</button> 
        <button type="button" class="btn btn-secondary edit-btn float-right mr-2">Edit</button>`;
    ul.appendChild(li);
}

const ul = document.querySelector('.list-group');
ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const listItem = e.target.parentElement;
        const description = listItem.dataset.desc;
        ul.removeChild(listItem);
        localStorage.removeItem(description);
    }
    if (e.target.classList.contains('edit-btn')) {
        const listItem = e.target.parentElement;
        const description = listItem.dataset.desc;
        const expenseData = JSON.parse(localStorage.getItem(description));

        document.getElementById('amount').value = expenseData.eamount;
        document.getElementById('description').value = expenseData.edescription;
        document.getElementById('category').value = expenseData.ecategory;

        // Remove the old data entry from localStorage
        localStorage.removeItem(description);
        ul.removeChild(listItem);
    }
});
