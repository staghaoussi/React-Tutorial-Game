import React, { useEffect, useState } from 'react';
import { Board } from './Board';

export const Game = () => {
  const [hist, setHist] = useState({0:Array(9).fill(null)})
  const latest_board_ind = Object.keys(hist).length

  const gotoMove = key => {
      let newHist = {};
      [...Array(parseInt(key)+1).keys()].map(index => {
        newHist[index] = hist[index]
        console.log(index,key)
      })
      setHist(newHist)
  }

  return (
    <div className="game">
        <div className="game-board">
          <Board squares={hist[latest_board_ind-1]} hist={hist} setHist={setHist}/>
        </div>
        <div className="game-info">

          {Object.keys(hist).map(board => {
            if(board == 0){
              return <li className="noStyle" key={board}><button className="myButton" onClick={() => gotoMove(board)}>{`Restart`}</button></li>
            }
            return <li className="noStyle" key={board}><button className="myButton" onClick={() => gotoMove(board)}>{`${board} <- Go to Move`}</button></li>

          })}

        </div>
    </div>
  );
};
