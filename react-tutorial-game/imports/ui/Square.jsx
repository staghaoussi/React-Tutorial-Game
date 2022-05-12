import React, {useState} from 'react';

export const Square = (props) => {
    const [sq_clicked, setsq] = useState(false);

  return (
    <button className="square" onClick={() => { setsq(!sq_clicked) }}>
        {sq_clicked ? "X":props.val}
    </button>
  );
};
