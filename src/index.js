/* eslint-disable linebreak-style */
import './style.css';
import Todolist, {
  addListItem, list,
} from './modules/listClass.js';

const AddKey = document.getElementById('add-button');
const clearButton = document.querySelector('.clear-list');

document.addEventListener('DOMContentLoaded', () => {
  Todolist.createList();
});

addListItem.addEventListener('keypress', (event) => {
  if (event.key === 'enter') {
    Todolist.addToList();
    Todolist.createList();
    addListItem.value = '';
  }
});

AddKey.addEventListener('click', () => {
  Todolist.addToList();
  Todolist.createList();
  document.querySelector('input-text').value = '';
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('to-do')) {
    event.target.parentElement.classList.add('backyellow');
    Todolist.edit();
  }
});

clearButton.addEventListener('click', () => {
  const listFiltered = list.filter((obj) => obj.complete !== true);
  localStorage.setItem('listStorage', JSON.stringify(listFiltered));
  Todolist.createList();
  window.location.reload();
});