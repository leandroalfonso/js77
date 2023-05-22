
const form = document.querySelector("#form");
const input = document.querySelector("#task");
const tasks = document.querySelector("#tasks");
let tarefas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `
    <span>${task}</span>
    <span class="marker verde"><i class="bi bi-check-circle-fill"></i></span>
    <button class="btn btn-success">Delete</button>
  `;

  const marker = li.querySelector(".marker");

  marker.addEventListener("click", function() {
    if (marker.classList.contains("verde")) {
      marker.classList.remove("verde");
      marker.classList.add("vermelho");
    } else if (marker.classList.contains("vermelho")) {
      marker.classList.remove("vermelho");
      marker.classList.add("amarelo");
    } else if (marker.classList.contains("amarelo")) {
      marker.classList.remove("amarelo");
      marker.classList.add("verde");
    }
  });

  tasks.appendChild(li);
  input.value = "";


  tarefas.push({ task });
  localStorage.setItem("tasks", JSON.stringify(tarefas));
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-success")) {
    const li = e.target.closest("li");
    const task = li.querySelector("span").textContent;
    const index = tarefas.findIndex((item) => item.task === task);
    if (index > -1) {
      tarefas.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tarefas));
    }
    li.remove();
  }
});

// Carregar tarefas salvas do localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tarefas = JSON.parse(savedTasks);
    tarefas.forEach((item) => {
      const { task, startTime } = item;
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `
      
        <span>${task}</span>
     
        <button class="btn btn-success">Delete</button>
      `;
      tasks.appendChild(li);
    });
  }
});