import { delay } from "../utils/delay";
import { getColors } from "../utils/getColors";

export const insertSort = async (data: number[], render: (data: number[], colors: string[]) => void) => {
  for (var i = 1; i < data.length; i++) {
    await delay(50);
    const colors = getColors(data.length);
    const k = data[i];
    var j = i - 1; 
    while (j >= 0 && data[j] > k) {
      data[j+1] = data[j];
      j--;
    }
    data[j+1] = k;
    colors[j+1] = "red";
    render(data, colors);
  }
  render(data, getColors(data.length));
}