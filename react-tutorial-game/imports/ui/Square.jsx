import React, {useState} from 'react';

export const Square = (props) => {

  const handleClick = e => {
    e.preventDefault()
    if(props.gameWon){return}

    // copy array
    var newSquares = {...props.squares}
    newSquares[props.index] = props.x ? 'X':'O';
    props.setX(!props.x)
    let array = [];

    // map does not iterate objects, only arrays, return new updated game array
    Object.keys(newSquares).map(ind => (array.push(newSquares[ind])))

    // updating board history
    hist_ind = Object.keys(props.hist).length
    newHist = {...props.hist}
    newHist[hist_ind] = array

    props.setHist(newHist)
  }

  return (
    <button className="square" onClick={(e) => { handleClick(e) }}>
        {props.squares[props.index]}
    </button>
  );
};
