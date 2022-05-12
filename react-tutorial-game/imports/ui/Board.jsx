import React, {useState} from 'react';
import { Square } from './Square';

export const Board = () => {
    const [squares, setsq] = useState(Array(9).fill(null))
  return (
    <div>
        <div className="status">{`Next Player: ${1+2}`}</div>
            <div className="board-row" key={0}>
                {[0,1,2].map((num) => <Square val={squares[num]} index={num} setsq={setsq}/>)}
            </div>
            <div className="board-row" key={1}>
                {[3,4,5].map((num) => <Square val={squares[num]} index={num} setsq={setsq}/>)}
            </div>
            <div className="board-row" key={2}>
                {[6,7,8].map((num) => <Square val={squares[num]} index={num} setsq={setsq}/>)}
            </div>
      </div>
  );
};
