import { useEffect } from 'react';

export default function UserList({ getUsers, users }) {
  useEffect(() => {
    getUsers();
    console.log('useEffect');
  }, [getUsers]);
  console.log('UserList');
  // getUsers();
  // console.log(users);
  return (
    <div>
      <ul>
        {users.map((user) => <li key={user.id}>{user.login}</li>)}
      </ul>
    </div>
  );
}