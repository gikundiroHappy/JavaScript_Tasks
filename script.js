let addtodo = document.getElementById("addTodo");
let inputtext = document.getElementById("inputText");

let todos = [];

addtodo.addEventListener("click", () => {
  console.log("helo");
  todos.push({ name: inputtext.value, completed: false });
  localStorage.setItem("Todo list", JSON.stringify(todos));
  // alert("todo added");
  console.log(todos);
});
