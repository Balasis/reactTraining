import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);

  function increase(){
    setScore(score + 1);
  }

  function reset(){
    setScore(0);
  }
    return (
        <div style={{ padding: 20 }}>
        <h1>Score: {score}</h1>

            <button onClick ={increase}>
                +1
            </button>
            <button onClick={reset} style={{ marginLeft: 10 }}>
                Reset
            </button>
        </div>
    );
}

export default App;