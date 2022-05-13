import React, {useState} from 'react';
import { Square } from './Square';

export const Board = (props) => {
    const [XisNext, setX] = useState(true);

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

    let winner = calculateWinner(props.squares)

    let status = winner ? `Winner: ${winner}`: `Next Player: ${XisNext ? 'X':'O'}`;

    return (
    <div>
        <div className="status">{status}</div>
            <div className="board-row" key={0}>
                {[0,1,2].map((num) => <Square
                squares={props.squares}
                gameWon={winner}
                x={XisNext}
                setX={setX}
                index={num}
                hist={props.hist}
                setHist={props.setHist}/>)}
            </div>
            <div className="board-row" key={1}>
                {[3,4,5].map((num) => <Square
                squares={props.squares}
                gameWon={winner}
                x={XisNext}
                setX={setX}
                index={num}
                hist={props.hist}
                setHist={props.setHist}/>)}
            </div>
            <div className="board-row" key={2}>
                {[6,7,8].map((num) => <Square
                squares={props.squares}
                gameWon={winner}
                x={XisNext}
                setX={setX}
                index={num}
                hist={props.hist}
                setHist={props.setHist}/>)}
            </div>
      </div>
  );
};
