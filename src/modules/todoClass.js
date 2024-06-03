/* eslint-disable max-len */
export const fromStorage = JSON.parse(localStorage.getItem('listStorage')) || [];
export const input = document.querySelector('.text-field');
export const listContainer = document.querySelector('.todolist');

export default class ToDoList {
  constructor(id, description, complete, createdAt, updatedAt) {
    this.id = id;
    this.description = description;
    this.complete = complete;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static render = () => {
    fromStorage.forEach((task) => {
      const taskCard = document.createElement('li');
      taskCard.id = task.id;
      taskCard.classList.add('list-item');
      taskCard.innerHTML = `<div class="task-main"><div class="task-column flex"><input type=checkbox class="check-box"><input class="edit-input" type="text" placeholder="Edit Task✒️..." required><p class="task-description">${task.description}</p><p class="created-at">created: ${task.createdAt}</p><p class="created-at">updated: ${task.updatedAt ? task.updatedAt : 'never'}</p></div></div><div class="edit-delete flex"><i class="fa-solid fa-file-pen edit-btn"></i><i class="fa-solid fa-trash delete-btn"></i></div>`;
      listContainer.appendChild(taskCard);
    });

    const checkBox = document.querySelectorAll('.check-box');
    const taskDescription = document.querySelectorAll('.task-description');

    checkBox.forEach((box, id) => {
      box.addEventListener('change', () => {
        if (box.checked === true) {
          fromStorage[id].complete = true;
          taskDescription[id].classList.add('active');
        } else {
          fromStorage[id].complete = false;
          taskDescription[id].classList.remove('active');
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

    const editBtn = document.querySelectorAll('.edit-btn');
    const editInput = document.querySelectorAll('.edit-input');

    editBtn.forEach((edit, id) => {
      edit.addEventListener('click', () => {
        ToDoList.edit(id);
      });
    });

    editInput.forEach((input, id) => {
      input.addEventListener('blur', () => {
        ToDoList.saveEdit(id, input.value);
      });
    });
  }

  static new = () => {
    const date = new Date().toString().slice(4, 21);
    const newToDo = new ToDoList(Date.now(), input.value, false, date, null);

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

  static edit = (index) => {
    const taskDescription = document.querySelectorAll('.task-description')[index];
    const editInput = document.querySelectorAll('.edit-input')[index];
    taskDescription.style.display = 'none';
    editInput.style.display = 'block';
    editInput.focus();
  }

  static saveEdit = (index, newDescription) => {
    fromStorage[index].description = newDescription;
    fromStorage[index].updatedAt = new Date().toString().slice(4, 21);
    localStorage.setItem('listStorage', JSON.stringify(fromStorage));
    listContainer.innerHTML = '';
    ToDoList.render();
  }
}