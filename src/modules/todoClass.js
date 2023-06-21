export const fromStorage = JSON.parse(localStorage.getItem('listStorage')) || [];
export const input = document.querySelector('.text-field');
export const listContainer = document.querySelector('.todolist');

export default class ToDoList {
  constructor(id, description, complete) {
    this.id = id;
    this.description = description;
    this.complete = complete;
  }

  static render = () => {
    fromStorage.forEach((task) => {
      const taskCard = document.createElement('li');
      taskCard.id = task.id;
      taskCard.classList.add('list-item');
      taskCard.innerHTML = `<input type=checkbox class="check-box"><p>${task.description}</p><button class="delete-btn">delete me</button>`;
      listContainer.appendChild(taskCard);
    });

    const checkBox = document.querySelectorAll('.check-box');

    checkBox.forEach((box, id) => {
      box.addEventListener('change', () => {
        if (box.checked === true) {
          fromStorage[id].complete = true;
        } else {
          fromStorage[id].complete = false;
        }
        localStorage.setItem('listStorage', JSON.stringify(fromStorage));
      });
    });

    const deleteBtn = document.querySelectorAll('.delete-btn');

    deleteBtn.forEach((del, id) => {
      del.addEventListener('click', () => {
        ToDoList.delete(id);
      });
    });
  }

  static new = () => {
    const newToDo = new ToDoList(Date.now(), input.value, false);

    if (input.value !== '') {
      fromStorage.push(newToDo);
      localStorage.setItem('listStorage', JSON.stringify(fromStorage));
    }
  }

  static delete = (index) => {
    if (index !== -1) fromStorage.splice(index, 1);
    localStorage.setItem('listStorage', JSON.stringify(fromStorage));
    listContainer.innerHTML = '';
    ToDoList.render();
  }

  static clear = () => {
    const isTaskDone = fromStorage.filter((task) => task.complete);
    isTaskDone.forEach((todo) => {
      const index = fromStorage.findIndex((isDone) => isDone.id === todo.id);
      fromStorage.splice(index, 1);
    });
    localStorage.setItem('listStorage', JSON.stringify(fromStorage));
  }
}