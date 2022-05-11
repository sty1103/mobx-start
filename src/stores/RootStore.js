import PersonStore from './PersonStore';
import TodoStore from './TodoStore';
import UserStore from './UserStore';

export default class RootStore {
  constructor() {
    this.personStore = new PersonStore();
    this.todoStore = new TodoStore();
    this.userStore = new UserStore();
  }
}