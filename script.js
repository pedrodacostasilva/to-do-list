let listElement = document.querySelector("#app ul");
let input = document.querySelector("#app input");
let button = document.querySelector("#app button");

tarefas = [];

function renderTodos() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    liElement.appendChild(tarefaText);
    listElement.appendChild(liElement)
  });
}

function addToDo() {
  if (input.value === "") {
    alert("Digite alguma tarefa");
    return false;
  } else {
    let newToDo = input.value;
    tarefas.push(newToDo);
    input.value = "";

    renderTodos();
  }
}

button.onclick = addToDo;
