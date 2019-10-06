import uuid from 'uuid';

export function sum(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const somethingNotNumber = numbers.some(number => {
    return typeof number !== 'number';
  });

  if (somethingNotNumber) {
    throw new Error('I want numbers');
  }

  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
}

export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('numbers required');
  }
  return a * b;
}

export function personMaker(name, age) {
  if(!name || !age){
    return null
  }

  else if(typeof name !== 'string'){
    throw new Error(' ')
  }

  else if(typeof age !== 'number'){
    throw new Error(' ')
  }

  else if(typeof age < 0 ){
    throw new Error(' Use positive number')
  }
  
  return {
    id: uuid(),
    name,
    age,
  };
}

// BUILD YOUR OWN UTILITY FUNCTIONS AND TEST THEM OUT!