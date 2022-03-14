import React, {useState} from 'react';
import './App.css';
import DisplaySquares from './components/DisplaySquares';
import InputForm from './components/InputForm';

function App() {

  const squaresArray = [
    {
      color: 'red',
      size: '100px'
    },
    {
      color: 'blue',
      size: '100px'
    },
    {
      color: 'purple',
      size: '100px'
    }
  ]

  const [squares, setSquares] = useState(squaresArray);

  const addSquare = (newSquare) => {
    setSquares([
      ...squares,
      newSquare
    ]);
  }

  return (
    <div className="App">
      <InputForm addSquare={addSquare}/>
      <DisplaySquares squares={squares}/>
    </div>
  );
}

export default App;
