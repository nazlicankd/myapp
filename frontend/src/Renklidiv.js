import React from 'react';
import './App.css';

export default function Renklidiv({ renk1, renk2 }) {
  return (
    <div
      className='geneldiv'
      style={{
        backgroundColor: renk1,
        color: renk2,
      }}
    >
      Ben alim, bu divi yarattim.
    </div>
  );
}
