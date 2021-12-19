document.addEventListener('DOMContentLoaded', function(){
const todoForms = document.querySelector('#todoForm');
const lists = document.querySelector('#list');



const savedTodo = JSON.parse(localStorage.getItem('todos')) || [];
for(let i = 0; i<savedTodo.length; i++){
    let newTodo = document.createElement('li');
    newTodo.innerText = savedTodo[i].todo;
    newTodo.isCompleted = savedTodo[i].isCompleted ? true : false;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    if(newTodo.isCompleted){
        newTodo.style.textDecoration = 'line-through';
    } else if(deleteBtn.isCompleted){
        deleteBtn.parentElement.remove();
    }
    lists.appendChild(newTodo);
}

todoForms.addEventListener('submit', function(event){
    event.preventDefault();

    let newTodo = document.createElement('li');
    let newTodoValue = document.getElementById('todo').value;
    newTodo.innerText = newTodoValue;
    newTodo.isCompleted = false;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
    }
    
    todoForms.reset();

    lists.appendChild(newTodo);
    newTodo.appendChild(deleteBtn);

    

    savedTodo.push({ task: newTodo.innerText, isCompleted: false });

    localStorage.setItem('todos', JSON.stringify(savedTodo));
});

lists.addEventListener('click', function(event){
    let clickedLi = event.target;

    if(!clickedLi.isCompleted){
        clickedLi.style.textDecoration = 'line-through';
        clickedLi.isCompleted = true;
    } else if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
    } else {
        clickedLi.style.textDecoration = 'none';
        clickedLi.isCompleted = false;
    }

    for (let i = 0; i < savedTodo.length; i++){
        if(savedTodo[i].todo === clickedLi.innerText){
            savedTodo[i].isCompleted = !savedTodo[i].isCompleted;
            localStorage.setItem('todos', JSON.stringify(savedTodo));
        }
    }
});






});

    // if(event.target.tagName === 'LI'){
    //     event.target.style.textDecoration = 'line-through';
    // } else if(event.target.tagName === 'BUTTON'){
    //     event.target.parentElement.remove();
    // }