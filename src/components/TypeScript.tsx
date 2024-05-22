import React from 'react';

interface Props {
    greeting: string;
    numberList: number[];
    calculateSum: (a: number, b: number) => number
}

const TypeScript: React.FC<Props> = ({ greeting, numberList, calculateSum }) => {
    return (
      <div>
        <h1>{greeting}</h1>
        <ul>
          {numberList.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <p>Sum of 5 and 10 is: {calculateSum(5, 10)}</p>
      </div>
    );
  };

export default TypeScript
