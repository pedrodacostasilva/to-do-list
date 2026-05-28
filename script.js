let listElement = document.querySelector("#app ul");
let input = document.querySelector("#app input");
let button = document.querySelector("#app button");

tarefas = JSON.parse(localStorage.getItem("@toDoList")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a")
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode(" Excluir");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo)

    linkElement.setAttribute("onclick", `deleteTodo(${posicao})`)

    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement)
    listElement.appendChild(liElement)
  });
}

renderTodos();

function addToDo() {
  if (input.value === "") {
    alert("Digite alguma tarefa");
    return false;
  } else {
    let newToDo = input.value;
    tarefas.push(newToDo);
    input.value = "";

    renderTodos();
    saveData();
  }
}

button.onclick = addToDo;


function deleteTodo(posicao) {
    tarefas.splice(posicao, 1);
    renderTodos();
    saveData();
}


function saveData() {
    localStorage.setItem("@toDoList", JSON.stringify(tarefas))
}