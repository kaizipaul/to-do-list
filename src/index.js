/* eslint-disable linebreak-style */
import './style.css';

const list = [
  {
    description: 'Do some laundry',
    completed: false,
    index: 1,
  },
  {
    description: 'Send email to Joffrey',
    completed: false,
    index: 2,
  },
  {
    description: 'Do some house chores',
    completed: false,
    index: 3,
  },
  {
    description: 'Buy groceries',
    completed: false,
    index: 4,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('.todolist');
  list.forEach((list) => {
    const listHtml = `<li class="list-item" id="${list.index}"> <div><i class="fa-regular fa-square-full"></i> <span class="task">${list.description}</span></div><i class="fa-solid fa-ellipsis-vertical"></i></li>`;
    listContainer.insertAdjacentHTML('beforehand', listHtml);
  });
});