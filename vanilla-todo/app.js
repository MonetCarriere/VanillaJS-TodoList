//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);






function addTodo(e) {
    //Prevent natural behaviour
    e.preventDefault();
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        item.remove()
    }

    //check mark
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement
        todoclassList.toggle('completed')
    }


}
















// shift + alt + down (to duplicate code)
/*

In the addTodo function, you're basically trying to acheive THIS:

<div class="todo">
    <li class="todo-item">hey</li>
        <button class="completed-btn"></button>
        <button class="trash-btn"></button>
</div>

...that's going to go under the <ul class= "todo-list">

*/