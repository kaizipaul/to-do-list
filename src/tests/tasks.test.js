import Todolist, { list } from '../modules/listClass.js';

describe('check if addToList and deleteItem methods work', () => {
  document.body.innerHTML = '<li class="list-item" id="0"><div class="inline"><input type="text" id="input-task" class="input-task" placeholder="Add task..."><input id="box-check" type="checkbox" name="checkbox" class="check-box"/> </div> <input type="text" class="to-do input-text" value="go to shop"/><div class="ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-trash-can icon delete"></i></div></li>';

  test('check if addToList method is working properly', () => {
    const addInput = document.getElementById('input-task');
    addInput.value = 'general kenobi';
    const addToList = Todolist.addToList();
    // assert
    expect(addToList).toEqual({
      description: 'general kenobi',
      complete: false,
      index: 0,
    });
  });

  test('check if task is added to local storage successfully', () => {
    const object = {
      description: 'go to gym',
      complete: false,
      index: 0,
    };
    localStorage.setItem('listStorage', JSON.stringify([object]));
    const storage = localStorage.getItem('listStorage');

    expect(storage).toEqual(
      JSON.stringify([
        {
          description: 'go to gym',
          complete: false,
          index: 0,
        },
      ]),
    );
  });

  test('check if the clear function works properly', () => {
    const checkClear = jest.fn(() => list.filter((obj) => obj.complete !== true));

    const task1 = {
      description: 'go to gym',
      complete: true,
      index: 1,
    };

    const task2 = {
      description: 'eat lunch',
      complete: true,
      index: 2,
    };

    const task3 = {
      description: 'do the dishes',
      complete: false,
      index: 3,
    };

    const task4 = {
      description: 'go to practise',
      complete: false,
      index: 4,
    };

    list.push(task1);
    list.push(task2);
    list.push(task3);
    list.push(task4);

    const clearCompleted = checkClear();

    expect(clearCompleted[0].complete).toBeFalsy();
    expect(clearCompleted[1].complete).toBeFalsy();
    expect(clearCompleted).toHaveLength(2);
    expect(clearCompleted[0].description).toBe('do the dishes');
    expect(clearCompleted[1].description).toBe('go to practise');
  });
});