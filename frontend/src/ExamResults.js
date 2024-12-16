import React from 'react';
import './App.css';

export default function ExamResults({ student }) {
  const student1 = {
    name: 'Nazlican',
    age: 27,
    points: [50, 60, 70],
  };
  const student2 = {
    name: 'Hasan',
    age: 27,
    points: [50, 60, 80],
  };
  const student3 = {
    name: 'Alim',
    age: 27,
    points: [50, 60, 90],
  };
  const student4 = {
    name: 'Yaprak',
    age: 27,
    points: [50, 60, 20],
  };
  const student5 = {
    name: 'Zeynep',
    age: 27,
    points: [50, 60, 10],
  };

  const average1 =
    (student1.points[0] + student1.points[1] + student1.points[2]) / 3;
  student1.average = average1;
  const average2 =
    (student2.points[0] + student2.points[1] + student2.points[2]) / 3;
  student2.average = average2;

  const average3 =
    (student3.points[0] + student3.points[1] + student3.points[2]) / 3;

  student3.average = average3;
  const average4 =
    (student4.points[0] + student4.points[1] + student4.points[2]) / 3;
  student4.average = average4;
  const average5 =
    (student5.points[0] + student5.points[1] + student5.points[2]) / 3;
  student5.average = average5;
  const averagesum = (average1 + average2 + average3 + average4 + average5) / 5;

  const issuccess = (student, averagescore) => {
    //arrow function yada lamda function
    const { average: studentAverage } = student; // destuction of object
    // const studentAverage2 = student.average; // normal declaration

    if (studentAverage >= averagescore) {
      return 'gectiniz';
    } else {
      return 'kaldiniz';
    }
  };

  return (
    <div>
      <div className='examresultboard'>
        <div className='studentsdegree'>
          <h3>Exam Results</h3>
        </div>
        <div className='studentsdegree'>{`Sn ${student1.name} yasiniz ${
          student1.age
        } ortalamaniz ${average1} siz ${issuccess(student1, averagesum)}`}</div>
        <div className='studentsdegree'>
          {' '}
          {`Sn ${student2.name} yasiniz ${
            student2.age
          } ortalamaniz ${average2} siz ${issuccess(
            student2,
            averagesum
          )}`}{' '}
        </div>
        <div className='studentsdegree'>
          {' '}
          {`Sn ${student3.name} yasiniz ${
            student3.age
          } ortalamaniz ${average3} siz ${issuccess(student3, averagesum)}`}
        </div>
        <div className='studentsdegree'>
          {`Sn ${student4.name} yasiniz ${
            student4.age
          } ortalamaniz ${average4} siz ${issuccess(
            student4,
            averagesum
          )}`}{' '}
        </div>
        <div className='studentsdegree'>
          {' '}
          {`Sn ${student5.name} yasiniz ${
            student5.age
          } ortalamaniz ${average5} siz ${issuccess(student5, averagesum)}`}
        </div>
        <div className='studentsdegree'>
          {' '}
          {`Bu sinifin not ortalamasi: ${averagesum}`}
        </div>
      </div>
    </div>
  );
}
