import React from 'react';

const UserList: React.FC = () => {
  const users: { name: string; age: number }[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;