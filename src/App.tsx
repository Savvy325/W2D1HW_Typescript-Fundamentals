import React from 'react';
import TypeScript from './components/TypeScript';
import ColorList from './components/ColorList';
import FilterNumbers from './components/FilterNumbers'
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <TypeScript greeting="Hello, TypeScript!" numberList={[5, 10, 15]} calculateSum={(a, b) => a + b} />
      <ColorList />
      <FilterNumbers numbers={[1, 6, 13, 22, 5]}/>
      <UserList />
    </div>
  );
}

export default App;