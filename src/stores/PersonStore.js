import { observable } from 'mobx';

export default class PersonStore {
  @observable
  name = 'Jeong';
  
  @observable
  age = 33;
}