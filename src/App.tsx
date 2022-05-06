import React, { useState } from 'react';
import { insertSort } from './algorithms/insertSort';
import { mergeSort } from './algorithms/mergeSort';
import './App.css';
import { Bar } from './components/Bar';
import { getColors } from './utils/getColors';

function App() {
  const [fullCount, setFullCount] = useState(100);
  const [arr, setArr] = useState<number[]>([]);
  const [bars, setBars] = useState<JSX.Element[]>([]);

  const shuffle = () => {
    var newArr = [];
    for (var i = 1; i <= fullCount; i++) {
      newArr.push(i);
    }  
    newArr = newArr.sort((a,b) => 0.5 - Math.random());
    setArr(newArr);
    return newArr;
  }

  const render = (data: number[], colors: string[]) => {
    var newBars = [];
    for (var i = 0; i < data.length; i++) {
      newBars.push(<Bar size={data[i]} fullCount={data.length} key={i} color={colors[i]}/>)
    }
    setBars(newBars);
  }

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number.parseInt(ev.target.value);
    if (!isNaN(v))
      setFullCount(v);
  }

  const handleCreateDataClick = () => {
    const d = shuffle();
    render(d,getColors(d.length));
  }

  const handleInsertSortClick = () => {
    insertSort(arr, render);
  }

  const handleMergeSortClick = () => {
    mergeSort(arr, render);
  }

  return (
    <div className="App">
      <div style={{background:"gray", marginLeft: "auto", marginRight: "auto", padding: "20px", display: "flex", flexDirection: "row", columnGap: "3px", alignItems: "end"}}>
        {bars}
      </div>
      <div>
        <input value={fullCount} onChange={handleChange}/>
        <button onClick={handleCreateDataClick}>Create Data</button>
        <button onClick={handleInsertSortClick}>Insert Sort</button>
        <button onClick={handleMergeSortClick}>Merge Sort</button>
      </div>
    </div>
  );
}

export default App;
