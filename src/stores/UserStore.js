import { makeObservable, observable, flow, runInAction, action } from 'mobx';
import axios from 'axios';

export default class UserStore {
  @observable
  state = {
    users: [],
    loading: false,
    error: null
  };

  constructor() {
    makeObservable(this);
  }

  // @flow
  // *getUsers() {
  //   try {
  //     this.state.loading = true;
  //     this.state.error = null;

  //     const res = yield axios.get('https://api.github.com/users');

  //     this.state.users = res.data;
  //     this.state.loading = false;
  //     this.state.error = null;
  //   } catch(err) {
  //     this.state.loading = false;
  //     this.state.error = err;
  //   }
  // }

  async getUsers() {
    try {
        this.state.loading = true;
        this.state.error = null;
      
      const res = await axios.get('https://api.github.com/users');

        this.state.users = res.data;
        this.state.loading = false;
        this.state.error = null;
    } catch(err) {
      this.state.loading = false;
      this.state.error = err;
    }
  }
}