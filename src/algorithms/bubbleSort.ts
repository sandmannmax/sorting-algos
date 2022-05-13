import { delay } from "../utils/delay";
import { getColors } from "../utils/getColors";

export const bubbleSort = async (data: number[], render: (data: number[], colors: string[]) => void) => {
  var bubbles = 1;
  while (true) {
    var switched = false;
    for (var i = 0; i < data.length - bubbles; i++) {
      const colors = getColors(data.length);
      await delay(10);
      if (data[i] > data[i+1]) {
        const s = data[i+1];
        data[i+1] = data[i];
        data[i] = s;
        switched = true;
      }
      colors[i] = "red";
      colors[i+1] = "red";
      render(data, colors);
    }
    if (!switched) break;
    bubbles++;
  }
  await delay(25);
  render(data, getColors(data.length));
}