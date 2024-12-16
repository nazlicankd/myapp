import React from 'react';

export default function ES6deneme() {
  const salary1 = 350;
  const salary2 = 400;

  const TotalSalary = (salary1 = 0, salary2 = 0) => {
    return salary1 + salary2;
  };

  const customer = {
    name: 'Nazlican',
    age: 28,
    amounts: [1000, 2000],
  };

  const { name: firstname, age } = customer;
  const [amount1, amount2] = customer.amounts;

  return (
    <div>
      <div className='geneldiv'>{firstname}</div>
      <div className='geneldiv'>{age}</div>
      <div className='geneldiv'>{`birinci deger: ${amount1} ikincideger: ${amount2}`}</div>
      <div>{`su anki toplam meblaniz: ${TotalSalary(
        salary1,
        salary2
      )} tl.`}</div>
      <div>{`su anki toplam meblaniz: ${TotalSalary(salary1)} tl.`}</div>
      <div>{`su anki toplam meblaniz: ${TotalSalary()} tl.`}</div>
    </div>
  );
}
