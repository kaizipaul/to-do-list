/* eslint-disable linebreak-style */
import './style.css';
import Todolist, {
  addListItem,
} from './modules/listClass.js';

import checkIfDone from './modules/clearItems.js';

const AddKey = document.getElementById('add-button');

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

const clearButton = document.querySelector('.clear-list');

clearButton.addEventListener('click', () => {
  checkIfDone();
});