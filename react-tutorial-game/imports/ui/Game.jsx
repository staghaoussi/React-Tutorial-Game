import React, { useEffect, useState } from 'react';
import { Board } from './Board';

export const Game = () => {
  const [hist, setHist] = useState({0:Array(9).fill(null)})



  // function that resets the board to the indicated move
  const gotoMove = key => {
      let newHist = {};
      [...Array(parseInt(key)+1).keys()].map(index => {
        newHist[index] = hist[index]
        console.log(index,key)
      })
      setHist(newHist)
  }

  // function that determines a winner
  const calculateWinner = squares =>  {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // if all indexes of a wining line equal each other than we know that we have a winner, return winning symbol
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // winner variable used to determine if winner exists
  const latest_board_ind = Object.keys(hist).length
  let winner = calculateWinner(hist[latest_board_ind-1])

  return (
    <div className="game">
        <div cl assName="game-board">
          <Board winner={winner} latest_board_ind={latest_board_ind} squares={hist[latest_board_ind-1]} hist={hist} setHist={setHist}/>
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
