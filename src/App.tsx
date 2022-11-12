import { useEffect, useState } from 'react';
import { bubbleSort } from './algorithms/bubbleSort';
import { insertSort } from './algorithms/insertSort';
import { mergeSort } from './algorithms/mergeSort';
import './App.css';
import { Bar } from './components/Bar';
import { getColors } from './utils/getColors';

function App() {
  const [fullCount, setFullCount] = useState(100);
  const [arr, setArr] = useState<number[]>([]);
  const [bars, setBars] = useState<JSX.Element[]>([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    handleCreateDataClick();
  }, []);

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

  const handleCreateDataClick = () => {
    const d = shuffle();
    render(d,getColors(d.length));
  }

  const handleInsertSortClick = async () => {
    setRunning(true);
    await insertSort(arr, render);
    setRunning(false);
  }

  const handleMergeSortClick = async () => {
    setRunning(true);
    await mergeSort(arr, render);
    setRunning(false);
  }

  const handleBubbleSortClick = async () => {
    setRunning(true);
    await bubbleSort(arr, render);
    setRunning(false);
  }

  return (
    <div className="App">
      <div style={{background:"gray", marginLeft: "auto", marginRight: "auto", padding: "20px", display: "flex", flexDirection: "row", columnGap: "3px", alignItems: "end"}}>
        {bars}
      </div>
      <div>
        <button onClick={handleCreateDataClick} disabled={running}>Shuffle</button>
        <button onClick={handleInsertSortClick} disabled={running}>Insert Sort</button>
        <button onClick={handleMergeSortClick} disabled={running}>Merge Sort</button>
        <button onClick={handleBubbleSortClick} disabled={running}>Bubble Sort</button>
      </div>
    </div>
  );
}

export default App;
