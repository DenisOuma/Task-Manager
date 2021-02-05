// defining a user interface variables
const taskForm = document.querySelector('.task-form');
const clearBtn =   document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task'); 

//submit event
taskForm.addEventListener('submit',function(e) {
    if(taskInput.value === ''){
        alert('Please enter a Task!')
        return  
    }
    const inputLi = document.createElement('li');
    inputLi.className = 'collection-items';
    inputLi.appendChild(document.createTextNode(taskInput.value));
    // delete Icon
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = '<i class = "fa fa-remove"></i>'
    inputLi.appendChild(deleteLink);
    taskList.appendChild(inputLi);

    // Storing Tasks in Local Storage
    storeTasksInLocalStorage(taskInput.value);
    taskInput.value = ''; 
    // clearing the Inputed
    const listItem = document.querySelectorAll('i');
    addEventListenerListItems(listItem);
    e.preventDefault()
})

function addEventListenerListItems(listItem){
    const tasks = localStorage.getItem('tasks');
    console.log(tasks)
listItem.forEach(listItem=>{
        listItem.addEventListener('click',e=>{
            let v = e.target.parentNode.parentNode.textContent
           

            e.target.parentNode.parentNode.remove()
            let f = JSON.parse(tasks).filter(task=> v !== task)
            localStorage.setItem("tasks",JSON.stringify(f))
        })
    })
}

document.addEventListener('DOMContentLoaded', function(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        
        console.log('here')
    }

    // Looping Functional
    tasks.forEach(function(task){
        const inputLi = document.createElement('li');
    inputLi.className = 'collection-items';
    inputLi.appendChild(document.createTextNode(task));
    // delete Icon
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = '<i class = "fa fa-remove"></i>'
    inputLi.appendChild(deleteLink);
    taskList.appendChild(inputLi);

    })
    const listItem = document.querySelectorAll('i');
        console.log(listItem);
        addEventListenerListItems(listItem);
})

function storeTasksInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Working on the Local Storage




clearBtn.addEventListener('click', function(){
    const list = document.querySelectorAll('li')
    console.log(list.value)
    

    for(var i=0; i<list.length; i++){
        if(list[i].textContent === filter.value){
            list[i].remove();
        }
    }
        
    
})




// console.log(inputLi);
    // taskList.appendChild(inputLi);