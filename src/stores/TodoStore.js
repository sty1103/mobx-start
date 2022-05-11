import { observable } from 'mobx';

export default class TodoStore {
  @observable
  todos = [];
}