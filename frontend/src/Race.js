import React from 'react';
import './App.css';

export default function Race({ racer1, racer2 }) {
  const findwinner = function () {
    let rasewinner;
    if (racer1.point > racer2.point) {
      rasewinner = racer1.name;
    } else {
      rasewinner = racer2.name;
    }
    return rasewinner;
  };

  return (
    <div>
      <div className='raceboard'>
        <div className='racereinfo1'>
          <h1>{racer1.name}</h1>
          <br></br>
          <h1>{racer1.age}</h1>
        </div>
        <div className='racereinfo1'>
          <h1>{racer2.name}</h1>
          <br />
          <h1>{racer2.age}</h1>
        </div>
        <div className='racereinfo1'>
          <h1>{racer1.point}</h1>
        </div>
        <div className='racereinfo1'>
          <h1>{racer2.point}</h1>
        </div>
        <div className='racewinner'>
          <p>{findwinner()}</p>
        </div>
      </div>
    </div>
  );
}
