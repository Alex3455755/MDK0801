
import './App.css';
import About from './about';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { getData, SetData } from './switch';
/* import { useState } from 'react'; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}



function Main(){

  return(
    <div className="App">
      <h2>Введите слова</h2>
      <textarea>

      </textarea>
      <button onClick={() =>{
        SetData({name: "Jhon"});
        window.location.href = 'http://localhost:3000/about';
        console .log(getData());
      }}>Начать тест</button>
    </div>
  );
}


export default App;
