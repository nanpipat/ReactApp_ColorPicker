import React, { useState } from 'react'
import { ChromePicker } from 'react-color';
import logo from './logo.svg';
import './App.css';

function App() {

  const [color, setColor] = useState("lightblue");
  const [hide, setHide] = useState(false)

  const pickerStyles = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px"
      }
    }
  };

  return (
    <div style={{backgroundColor: color}} className="App">
      <div className="container">
        {hide && (
          <ChromePicker
            styles={pickerStyles}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        <button onClick={() => setHide(!hide)}>
          {hide ? 'Close picker' : 'Open color picker'}
        </button>
      </div>
    </div>
  );
}

export default App;
