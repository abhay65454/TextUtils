// Module2.js

// Import the data from Module1
import data from './module1.mjs';

// Use the data in your component
const Module2 = () => {
  return (
    <div className='container'>
      <h1>Module 2</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Occupation: {data.occupation}</p>
    </div>
  );
};

export default Module2;
