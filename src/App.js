import { useState } from 'react';
import Card from './components/Card/Card';
import dataFromFile from './helpers/data';

function App() {
  const [data, setData] = useState(dataFromFile);
  const [people, setPeople] = useState(data.slice(0, 5));
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    let newIndex = index + 5;
    if (newIndex > data.length - 1) newIndex = 0;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };
  const handlePrev = () => {
    let newIndex = index - 5;
    if (newIndex < 0) newIndex = data.length - 5;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };
  return (
    <div className="team-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Team </h2>
          <p className="text-center">Clarusway Company Employee Details</p>
        </div>
        <div className="row people">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
