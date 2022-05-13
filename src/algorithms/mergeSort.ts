import { delay } from "../utils/delay";
import { getColors } from "../utils/getColors";

export const mergeSort = async (data: number[], render: (data: number[], colors: string[]) => void) => {
  await mergeSortInner(data, 0, data.length - 1, render);
  render(data, getColors(data.length));
}

const mergeSortInner = async (data: number[], p: number, r: number, render: (data: number[], colors: string[]) => void) => {
  await delay(25);
  if (p < r) {
    const q = Math.floor((p+r) / 2);
    await mergeSortInner(data, p, q, render);
    await mergeSortInner(data, q + 1, r, render);
    await merge(data, p, q, r, render);
  }
  render(data, getColors(data.length));
}

const merge = async (data: number[], p: number, q:number, r: number, render: (data: number[], colors: string[]) => void) => {
  const newData = [];
  const data1 = data.slice(p,q+1);
  const data2 = data.slice(q+1,r+1);
  
  while (data1.length > 0 || data2.length > 0) {
    if (data1.length > 0 && data2.length > 0) {
      if (data1[0] > data2[0]) newData.push(data2.shift()!);
      else newData.push(data1.shift()!);
    } else if (data1.length > 0) newData.push(data1.shift()!);
    else newData.push(data2.shift()!);

    await createRender(data, newData, p, [p + newData.length - 1], render);
  }

  data.splice(p, newData.length, ...newData);
}

const createRender = async (fullData: number[], newData: number[], start: number, changes: number[], render: (data: number[], colors: string[]) => void) => {
  await delay(25);
  var combinedData = [...fullData];
  combinedData.splice(start, newData.length, ...newData);
  const colors = getColors(fullData.length);
  changes.forEach(v => colors[v] = "red");
  render(combinedData, colors);
}