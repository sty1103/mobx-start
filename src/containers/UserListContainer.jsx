import { useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import UserList from '../components/UserList';

const UserListContainer = ({ userStore }) => {
  const getUsers = useCallback( async () => {
    userStore.getUsers();
  }, [userStore]);

  const users = userStore.state.users;
  console.log(1);
  return <UserList getUsers={getUsers} users={users} />;
}

export default inject('userStore')(observer(UserListContainer));