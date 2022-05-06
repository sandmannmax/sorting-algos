import { FC } from "react";

interface BarProps {
  size: number;
  fullCount: number;
  color: string;
}

export const Bar: FC<BarProps> = props => {
  const width = 500 / props.fullCount;
  const height = 100 / props.fullCount * props.size;

  return (
    <div style={{backgroundColor: props.color,width,height}}></div>
  );
}