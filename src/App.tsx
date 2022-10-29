import { useState } from 'react';
import './App.css';

function App() {
  const [reversedString, setReversedString] = useState<string>('');

  const handleUpdateValue = (e: any) => {
    const input = e.currentTarget.value;
    setReversedString(reverseString(input));
  };

  const reverseString = (str: string) => {
    return str.split('').reverse().join('');
  };

  return (
    <div className='app'>
      <h1>Hi. Enter in string and click button to reverse it.</h1>
      <input onChange={handleUpdateValue}></input>
      <p>{reversedString}</p>
    </div>
  );
}

export default App;
