const todoList = [];

function addTodo(){
  const inputElement= document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  inputElement.value='';
}
function addKeydown(event){
  if(event.key==='Enter'){
    addTodo();
  }
}