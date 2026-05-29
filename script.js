let input = document.querySelector("#input");
let button = document.querySelector("#button");
let list = document.querySelector("#list");

tarefas = JSON.parse(localStorage.getItem("@ToDoList"))  || [];

function addToDo() {
  event.preventDefault();

  if (input.value === "") {
    alert("Digite uma tarefa");
    return false;
  } else {
    tarefas.push(input.value);

    input.value = "";
  }

  renderTodos();
}

button.addEventListener("click", addToDo);

function renderTodos() {
  let ul = document.querySelector("#list ul");
  ul.innerHTML = "";

  tarefas.map((todo, posicao) => {
    let liElement = document.createElement("li");
    liElement.innerText = todo;

    ul.appendChild(liElement);

    let linkElement = document.createElement("a");
    linkElement.innerText = " Excluir";
    linkElement.setAttribute("href", "#");

    linkElement.setAttribute("onclick", `deleteToDo(${posicao})`);

    liElement.appendChild(linkElement);

    saveData();
  });
}

function deleteToDo(posicao) {
  tarefas.splice(posicao, 1);
  renderTodos();
}

renderTodos();

function saveData() {
    localStorage.setItem("@ToDoList", JSON.stringify(tarefas));
}
