import React from 'react'

function filterNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
  }

  const EvenNumbers: React.FC<{ numbers: number[] }> = ({ numbers }) => {
    const evenNumbers: number[] = filterNumbers(numbers);
  
    return (
      <div>
        <h2>Even Numbers</h2>
        <ul>
          {evenNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EvenNumbers;