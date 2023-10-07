import './App.css';
import { useState } from 'react';
const Api = 'https://api.adviceslip.com/advice';

const App = () => {
  
  const [advice, setAdvice] = useState('');

  async function getAdvice(){
    const res = await fetch(Api);
    const data = await res.json();
    setAdvice(data.slip.advice)
  }

  return (
    <div className='adviceBox'>
      <h1>Advice!!</h1>
      <div>
        <h4>{advice}</h4>
      </div>
      <button className='button' onClick={getAdvice}>GET YOUR ADVICE</button>
    </div>
  );
}

export default App;
