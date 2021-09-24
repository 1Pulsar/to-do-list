let taskList = document.getElementById("task-list");
let inputTask = document.getElementById("input-task");
let addTaskButton = document.getElementById("add-task-button");
let todos
function toLocal() {
    todos = taskList.innerHTML
    localStorage.setItem('todos', todos)
    }

addTaskButton.addEventListener("click", function() {
    if (inputTask.value !== "") {
        taskList.innerHTML += '<li class="decorate"><input type="checkbox" class="check-box"> <span class="task"><p>' + inputTask.value + '</p></span> <button class="delete-btn">–</button></li>';
        toLocal()
        inputTask.value = "";
    }
})

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains('delete-btn') ) {
        event.target.parentElement.remove()
        toLocal()
    } else if (event.target.classList.contains('check-box') && !event.target.nextSibling.nextSibling.classList.contains('finished') ) {
        event.target.nextSibling.nextSibling.classList.add('finished')
        event.target.setAttribute('checked', '')
        toLocal()
        // event.target.nextSibling.classList.replace('check-box', 'finished')
    } else if (event.target.classList.contains('check-box') && event.target.nextSibling.nextSibling.classList.contains('finished') ) {
        event.target.nextSibling.nextSibling.classList.remove('finished')
        event.target.removeAttribute('checked', '')
        toLocal()
    }
})

if (localStorage.getItem('todos')) {
    taskList.innerHTML = localStorage.getItem('todos')
}
/*taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains('check-box') && !event.target.nextSibling.nextSibling.classList.contains('finished') ) {
        event.target.nextSibling.nextSibling.classList.add('finished')
       // event.target.nextSibling.classList.replace('check-box', 'finished')
    } else if (event.target.classList.contains('check-box') && event.target.nextSibling.nextSibling.classList.contains('finished') ) {
        event.target.nextSibling.nextSibling.classList.remove('finished')
    }
})

 */