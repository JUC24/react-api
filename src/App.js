import './App.css';
import { useEffect,useState } from 'react';
const Api = 'https://api.adviceslip.com/advice';

const App = () => {
  
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice(){
    const res = await fetch(Api);
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount((count)=> count + 1)
  }

  useEffect(function () {
    getAdvice()
  }, []);

  return (
    <div className='adviceBox'>
      <h1>Advice!!</h1>
      <div>
        <h4>{advice}</h4>
      </div>
      <button className='button' onClick={getAdvice}>GET YOUR ADVICE</button>
      <h4>you have read <strong>{count}</strong> pieces of advice</h4>
    </div>
  );
}

export default App;
