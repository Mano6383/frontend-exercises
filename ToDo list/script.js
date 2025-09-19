let input = document.querySelector('.input')
let category = document.querySelector('.priority')
let btn = document.querySelector('.addBtn')
let studyworks = document.querySelector('.studywork .taskList')
let daytodayworks = document.querySelector('.daytodaywork .taskList')
let personalworks = document.querySelector('.personalwork .taskList')
let todos = []

window.onload = function(){
    let storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos!==null){
        todos = storedTodos
        for(let i=0;i<todos.length;i++){
            addto(todos[i])
        }
    }
}

btn.addEventListener('click', () => {
    if(input.value=="" || category.value==""){
        alert("Please enter the task and select category")
        return
    }

    let todo = {
        text: input.value,
        category: category.value
    }

    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    addto(todo)

    input.value = ""
    category.value = ""
})

function addto(todo){
    let list = document.createElement('li')
    list.innerHTML = todo.text

    if(todo.category=="Study")
        studyworks.appendChild(list)
    if(todo.category=="Work")
        daytodayworks.appendChild(list)
    if(todo.category=="Personal")
        personalworks.appendChild(list)

    
    list.addEventListener('click',()=>{
        list.style.textDecoration = "line-through"
        list.style.color = "grey"
    })

    list.addEventListener('dblclick',()=>{
        list.remove()
        remove(todo.text)
    })
}

function remove(todoText){
    todos = todos.filter(t => t.text !== todoText)
    localStorage.setItem("todos", JSON.stringify(todos))
}
