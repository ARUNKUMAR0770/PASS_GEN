import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [IncludeUppercase, setIncludeUppercase] = useState(true);
  const [IncludeLowercase, setIncludeLowercase] = useState(true);
  const [IncludeNumber, setIncludeNumber] = useState(true);
  const [IncludeSymbol, setIncludeSymbol] = useState(true);
  const [copyinput, setCopyInput] = useState("");

  function GeneratePass() {
    let charset = "";
    if (IncludeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (IncludeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (IncludeNumber) charset += "0123456789";
    if (IncludeSymbol) charset += "!@#$%^&*()_+";

    if (charset.length === 0) {
      alert("Please select at least one character set option.");
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const passIndex = Math.floor(Math.random() * charset.length);
      password += charset[passIndex];
    }
    setCopyInput(password);
  }

  const copyClipBoard = () => {
    navigator.clipboard.writeText(copyinput);
    alert("Password Copied");
  };

  return (
    <div className="app-container">
      <h1>Strong Password Generator</h1>
      <div className="input-container">
        <label htmlFor="length">Password Length</label>
        <input
          type="number"
          id="length"
          value={length}
          min="1"
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      <div className="input-container">
        <input type="checkbox" id="uppercase" checked={IncludeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
        <label htmlFor="uppercase">Include Uppercase</label>
      </div>
      <div className="input-container">
        <input type="checkbox" id="lowercase" checked={IncludeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
        <label htmlFor="lowercase">Include Lowercase</label>
      </div>
      <div className="input-container">
        <input type="checkbox" id="numbers" checked={IncludeNumber} onChange={(e) => setIncludeNumber(e.target.checked)} />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="input-container">
        <input type="checkbox" id="symbol" checked={IncludeSymbol} onChange={(e) => setIncludeSymbol(e.target.checked)} />
        <label htmlFor="symbol">Include Symbols</label>
      </div>
      <div className="button">
        <button onClick={GeneratePass}>Generate Password</button>
      </div>
      <div className="copy-container">
        <input type="text" value={copyinput} readOnly />
        <button onClick={copyClipBoard}>Copy</button>
      </div>
    </div>
  );
}

export default App;
