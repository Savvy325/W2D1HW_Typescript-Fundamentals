import React from 'react';

const ColorList: React.FC = () => {
  const colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple'];

  return (
    <div>
      <h2>Colors</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList
