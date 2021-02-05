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
    taskInput.value = ''; 
    // clearing the Inputed
    const listItem = document.querySelectorAll('i');
    listItem.forEach(listItem=>{
        listItem.addEventListener('click',e=>{
            e.target.parentNode.parentNode.remove()
        })
    })
    e.preventDefault()
})



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