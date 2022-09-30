/* eslint-disable linebreak-style */
import Todolist, {
  list,
} from './listClass.js';

export default function checkIfDone() {
  const listFiltered = list.filter((obj) => obj.complete !== true);
  localStorage.setItem('listStorage', JSON.stringify(listFiltered));
  Todolist.createList();
  window.location.reload();
}
