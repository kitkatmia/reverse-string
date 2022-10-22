import { stdout } from 'process';
import {useState} from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [reversedString, setReversedString] = useState<string>("");
  const handleUpdateValue = (e: any): void => {
    const input = e.currentTarget.value;
    setInputValue(input);
  };

  const reverseString = (): void => {
    let reverseString = "";
    for (let i = 0; i < inputValue.length; i++) {
      reverseString = inputValue.charAt(i) + reverseString;
    }
    setReversedString(reverseString);
  }

  return (
    <div className="App">
      <h1>Hi. Enter in string and click button to reverse it.</h1>
      <input onChange={handleUpdateValue} value={inputValue}></input>
      <button onClick={reverseString}>Reverse String</button>
      <p>{reversedString}</p>
    </div>
  );
}

export default App;
