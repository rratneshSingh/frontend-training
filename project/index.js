const todoList = [];

class Todo {

    title;
    description;
    date;

    constructor(title, description, date) {
        this.date = date;
        this.title = title;
        this.description = description;
    }
}


function addTask() {
    const titleNode = document.getElementById('title');
    const descNode = document.getElementById('desc');
    const dateNode = document.getElementById('date');

    const todo = new Todo(titleNode.value, descNode.value, dateNode.value);
    todoList.push(todo);

    titleNode.value = '';
    descNode.value = '';
    dateNode.value = '';
    refreshList();
}

function refreshList() {
    const div = document.getElementById('task_list');
    div.innerHTML = null;
    todoList.forEach((todo, index)=>{
        const p = document.createElement('p');
        p.innerHTML = ( index + 1 ) + ' - Title: ' + todo.title + ', Description: ' + todo.description + ', Date: ' + todo.date;
        const clearBtn = document.createElement('button');
        clearBtn.addEventListener('click', removeTodo);
        clearBtn.index = index;
        clearBtn.innerText = 'Remove';
        p.appendChild(clearBtn);
        div.appendChild(p);
    })
}

function removeTodo(e) {
    const index = e.target.index;
    todoList.splice(index, 1);
    refreshList();
}