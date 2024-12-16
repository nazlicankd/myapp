import React, { useState } from 'react';
import axios from 'axios';

export default function Fruits() {
  const [fruits, setFruits] = useState([]);
  const [fruit, setFruit] = useState('');
  const [buyFruit, setBuyFruit] = useState('');
  const [stock, setStock] = useState();
  const [buyStock, setBuyStock] = useState();
  const [message, setMessage] = useState('');
  const [buyMessage, setBuyMessage] = useState('');

  const getFruits = async () => {
    try {
      const response = await axios.get('http://localhost:4000/fruits/get');
      setFruits(response.data);
    } catch (error) {
      setMessage(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/fruits/post', {
        fruit,
        stock,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const buyFruits = async () => {
    try {
      const response = await axios.post('http://localhost:4000/fruits/buy', {
        buyFruit,
        buyStock,
      });

      setBuyMessage(response.data.message);
    } catch (e) {
      console.log(e);

      setBuyMessage(e.response.data.message);
    }
  };
  return (
    <div>
      <div className='fruitbackground'>
        <div className='fruit-stock'>
          <h1>Meyve Envanteri</h1>
          <form>
            <input
              type='text'
              value={fruit}
              className='fruit-text'
              onChange={(e) => setFruit(e.target.value)}
            />
            <input
              type='number'
              value={stock}
              className='fruit-text'
              onChange={(e) => setStock(Number(e.target.value))}
            />
            <button
              type='button'
              className='fruit-buttons'
              onClick={handleSubmit}
            >
              Ekle
            </button>
            <button type='button' className='fruit-buttons' onClick={getFruits}>
              Meyveleri Goruntule
            </button>
          </form>
          <p>{message}</p>
          <h2>Meyve Bilgileri:</h2>
          <div className='fruit-style'>
            <table className='fruit-table-style'>
              <thead>
                <tr>
                  <th>Meyve</th>
                  <th>Stok</th>
                </tr>
              </thead>

              <tbody>
                {fruits?.map((fruit, index) => (
                  <tr>
                    <td>{fruit.fruit}</td>
                    <td>{fruit.stock}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th
                    colSpan={3}
                  >{`Toplam meyve sayiniz: ${fruits.length}`}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className='fruit-stock'>
          <h1>Meyve Satin Al</h1>
          <form>
            <input
              type='text'
              value={buyFruit}
              className='fruit-text'
              onChange={(e) => setBuyFruit(e.target.value)}
            />
            <input
              type='number'
              value={buyStock}
              className='fruit-text'
              onChange={(e) => setBuyStock(Number(e.target.value))}
            />
            <button type='button' className='fruit-buttons' onClick={buyFruits}>
              Satin Al
            </button>
          </form>
          <p>{buyMessage}</p>
        </div>
      </div>
    </div>
  );
}
