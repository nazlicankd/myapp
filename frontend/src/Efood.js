import React, { useState } from 'react';

export default function Efood() {
  const [mesaj, setMesaj] = useState(
    'Henuz siparis gelmemisken counter ile oynayayim bari.'
  );

  const [counter, setCounter] = useState(0);

  const orderPizza = () => {
    return new Promise((resolve, reject) => {
      console.log('Preparing your pizza...');
      setTimeout(() => {
        // set timeoua'a takima, neye bunun promise ile bi alaksai yok, zaman suren islemleri simule etmis olduk sadece
        const success = true; // Simulate success or failure
        if (success) {
          resolve([{ name: 'karides' }, { name: 'borek' }]);
        } else {
          reject('Sorry, we ran out of ingredients. 😢');
        }
      }, 20000); // Simulate 2 seconds of waiting
    });
  };

  // Using the Promise
  orderPizza() //siparisimi veririim
    .then(
      (
        pizza //eger siparisim basarili bir sekilde hazirlanirsa bunu calistir
      ) =>
        setMesaj(
          `iste yemekleriniz afiyet olsun: ${pizza[0].name}, ${pizza[1].name}`()
        ).catch((error) => setMesaj(`cok uzgunuz:  ${error}`))
    ); // hayir bir )sourn ollur ve soparisim hazilanamazsa bunu calisti.

  //derim ve yoluma devam ederim, baska islemler yaparim.

  return (
    <div>
      <div>{mesaj}</div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>sayi arttir</button>
    </div>
  );
}
