import React, {useState} from 'react';
import { Square } from './Square';

export const Board = (props) => {
    const [XisNext, setX] = useState(true);



    let status = props.winner ? `Winner: ${props.winner}`: `Next Player: ${XisNext ? 'X':'O'}`;

    let isTied = true

    for(let i=0;i<9;i++){
        if(props.squares[i] === null){
            isTied = false
        }
    }
    if(isTied){status = "Tied, restart to play again"}
    return (
        <div className='gameboard'>
            <div className="status">{status}</div>
            <div className="board-row" key={0}>
                {[0,1,2].map((num) => <Square
                squares={props.squares}
                gameWon={props.winner}
                x={XisNext}
                setX={setX}
                index={num}
                hist={props.hist}
                setHist={props.setHist}/>)}
            </div>
            <div className="board-row" key={1}>
                {[3,4,5].map((num) => <Square
                squares={props.squares}
                gameWon={props.winner}
                x={XisNext}
                setX={setX}
                index={num}
                hist={props.hist}
                setHist={props.setHist}/>)}
            </div>
            <div className="board-row" key={2}>
                {[6,7,8].map((num) => <Square
                squares={props.squares}
                gameWon={props.winner}
                x={XisNext}
                setX={setX}
                index={num}
                hist={props.hist}
                setHist={props.setHist}/>)}
            </div>
        </div>
  );
};
