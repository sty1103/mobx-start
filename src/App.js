import './App.css';
import { inject, observer } from 'mobx-react';
import UserListContainer from './containers/UserListContainer';

function App({personStore}) {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
      </header>
    </div>
  );
}

export default inject('personStore')(observer(App));