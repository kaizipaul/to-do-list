import './style.css';
import ToDoList, { input, listContainer } from './modules/todoClass.js';

const AddKey = document.querySelector('.fa-circle-plus');

// render all the the tasks when the page fully loads
document.addEventListener('DOMContentLoaded', () => {
  ToDoList.render();
});
// add a task when the enter button is pressed
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    ToDoList.new();
    listContainer.innerHTML = '';
    ToDoList.render();
    input.value = '';
  }
});
// add a task when the add button is clicked
AddKey.addEventListener('click', () => {
  ToDoList.new();
  listContainer.innerHTML = '';
  ToDoList.render();
  input.value = '';
});

// future update
// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('to-do')) {
//     event.target.parentElement.classList.add('backyellow');
//     Todolist.edit();
//   }
// });

const clearButton = document.querySelector('.clear-list');
// clear all tasks that are marked complete
clearButton.addEventListener('click', () => {
  listContainer.innerHTML = '';
  ToDoList.clear();
  ToDoList.render();
});