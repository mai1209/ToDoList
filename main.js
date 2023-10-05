const addForm = document.querySelector(".addForm");
const btn1 = document.querySelector(".btn1");
const toDo = document.querySelector(".toDo");
const inputDo = document.querySelector(".inputDo");
const caja = document.querySelector(".caja");

//donde se guarda el array de las lista de tareas
let taskList = [];

//funcion que retorna el html que se ve en la pantalla
const createTask = (task) => {
  return ` 
  <ul class="box">
  <li class="toDo"> ${task.name} </li>
  <img class="deleteBtn" src="icons8-basura-48.png" alt="borrar" data-id=" ${task.id} ">
</ul>

  `;
};

//funcion que hace el map del array de las lista de tareas
const renderTaskList = () => {
  caja.innerHTML = taskList.map((task) => createTask(task)).join(""); //practicar hacer los maps!!!!!!
};

const valid = (taskName) => {

  let isValid = true
  //validaciones del input
  if (taskName === "") {
    alert("llena el campo");
    isValid = false
  } else if (
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
  ) {
    alert("esta tarea ya existe");
    isValid = false
  }

  return isValid
};

//funciones que cumple el boton al hacer click
const handleTask = (e) => {
  e.preventDefault();
  const taskName = inputDo.value.trim();
  addForm.reset();

 if (valid(taskName)){
     //array con la informacion que tiene la lista de tareas
  taskList = [...taskList, { name: taskName, id: Date.now() }]; //no lo entendido bien ver...
  renderTaskList();
  }
 
  
 
};

const deleteTask = (e) => {
  if(!e.target.classList.contains('deleteBtn'))return;

  const filterId = Number(e.target.dataset.id)
  taskList = taskList.filter(task => task.id !== filterId)
  renderTaskList()
}

//funcion inicializadora
const init = () => {
  btn1.addEventListener("click", handleTask);
  caja.addEventListener("click", deleteTask)
};
init();
