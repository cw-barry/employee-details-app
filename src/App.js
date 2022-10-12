import { useState } from 'react';
import Card from './components/Card/Card';
import dataFromFile from './helpers/data';

function App() {
  const [data, setData] = useState(dataFromFile);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    let newIndex = index + 1;
    if (newIndex > data.length - 1) newIndex = 0;
    setIndex(newIndex);
  };
  const handlePrev = () => {
    let newIndex = index - 1;
    if (newIndex < 0) newIndex = data.length - 1;
    setIndex(newIndex);
  };
  return (
    <div className="team-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Hello Team</h2>
          <p className="text-center">Employee Details</p>
        </div>
        <div className="row justify-content-md-center people mb-0">
          <Card {...data[index]} />
        </div>
        <div className="row justify-content-md-center mt-0">
          <button onClick={handlePrev} className="m-2">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <span>{index}</span>
          <button onClick={handleNext} className="m-2">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
