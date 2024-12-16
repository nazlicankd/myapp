import React from 'react';
import { useState } from 'react';
export default function MantiHome() {
  const [message, setmessage] = useState('henuz siparis yok');
  const [message1, setmessage1] = useState('henuz siparis yok');
  const [counter, setcounter] = useState(0);

  const orderPizza = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve([{ name: 'susuli pizza' }, { name: 'pizza margarita' }]);
        } else {
          reject('Sorry, we ran out of ingredients.');
        }
      }, 20000);
    });
  };

  const orderPasta = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false;
        if (success) {
          resolve([{ name: 'susuli makarna' }, { name: 'makarna margarita' }]);
        } else {
          reject('Sorry, we ran out of ingredients.');
        }
      }, 500);
    });
  };
  orderPizza().then((pizza) =>
    setmessage(
      `iste yemekleriniz afiyet olsun: ${pizza[0].name} , ${pizza[1].name}`
    )
  );

  orderPasta()
    .then((pizza) =>
      setmessage1(
        `iste yemekleriniz afiyet olsun: ${pizza[0].name} , ${pizza[1].name}`
      )
    )

    .catch((error) => setmessage(`cok uzgunuz: ${error}`));

  return (
    <div>
      <div>{message}</div>
      <div>{message1}</div>
      <div>{counter}</div>
      <button onClick={() => setcounter(counter + 1)}> sayi arttir</button>
    </div>
  );
}
