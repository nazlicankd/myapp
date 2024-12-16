import React, { useState } from 'react';
import axios from 'axios';
export default function HastaKayit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [symtom, setSymtom] = useState('');
  const [message, setMessage] = useState('');
  const [patients, setPatients] = useState([]);
  const handleHastaKayit = async () => {
    try {
      const { data } = await axios.post('http://localhost:4000/patients', {
        doctorId: 1000,
        name: name,
        age: age,
        symtom: symtom,
      });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  const handleHastaGetir = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/doctors/1000');
      console.log('Backend Response:', data);
      setPatients(data);
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    } //axios la ilgili end point yoksa hata verecek try catch a
  };

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
            type='number'
            value={age}
            className='IntroduceYourselfD'
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <input
            type='text'
            value={symtom}
            className='IntroduceYourselfD'
            onChange={(e) => {
              setSymtom(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button onClick={handleHastaKayit} className='introduceYourself'>
            Hastayi Kaydet
          </button>

          <button onClick={handleHastaGetir} className='clear'>
            Hastalar
          </button>
        </div>
        {message}
      </div>
      <h2>Hasta Bilgileri:</h2>
      <div className='hasta-style'>
        <table className='table-style'>
          <thead>
            <tr>
              <th>adi</th>
              <th>yasi</th>
              <th>semptomlari</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.symtom}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3}>{`toplam hasta sayiniz: ${patients.length}`}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
