import './style.css';
import ToDoList, { input, listContainer } from './modules/todoClass.js';

// import checkIfDone from './modules/clearItems.js';

const AddKey = document.getElementById('add-button');

document.addEventListener('DOMContentLoaded', () => {
  ToDoList.render();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    ToDoList.new();
    listContainer.innerHTML = '';
    ToDoList.render();
    input.value = '';
  }
});

AddKey.addEventListener('click', () => {
  ToDoList.new();
  listContainer.innerHTML = '';
  ToDoList.render();
  input.value = '';
});

// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('to-do')) {
//     event.target.parentElement.classList.add('backyellow');
//     Todolist.edit();
//   }
// });

const clearButton = document.querySelector('.clear-list');

clearButton.addEventListener('click', () => {
  listContainer.innerHTML = '';
  ToDoList.clear();
  ToDoList.render();
});