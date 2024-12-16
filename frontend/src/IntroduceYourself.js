import React from 'react';
import { useState } from 'react';

export default function IntroduceYourself() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [greeting, setGreeting] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <div className='introduceYourselfBG'>
        <div>
          <input
            type='text'
            value={name}
            className='IntroduceYourselfD'
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>{' '}
        </div>
        <div>
          <input
            type='text'
            value={surname}
            className='IntroduceYourselfD'
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <input
            type='text'
            value={age}
            className='IntroduceYourselfD'
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            onClick={() => {
              setGreeting(
                `benim adim ${name}, soyadim ${surname}, yasim ${age}`
              );
            }}
            className='introduceYourself'
          >
            Introduce Yourself
          </button>
          <button
            onClick={() => {
              setGreeting(``);
              setName(``);
              setAge(``);
              setSurname('');
            }}
            className='clear'
          >
            Clear
          </button>
        </div>
        {greeting}
      </div>
    </div>
  );
}
