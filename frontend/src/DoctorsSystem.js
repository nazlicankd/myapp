import React from 'react';
import { useState } from 'react';

export default function DoctorsSystem() {
  const [doctors, setdoctors] = useState([
    {
      id: 7326,
      name: 'Dr. Chasan',
      patients: [
        {
          id: 10,
          name: 'Nazlican',
        },
        {
          id: 20,
          name: 'Ali',
        },
        {
          id: 20,
          name: 'Ali',
        },
        {
          id: 20,
          name: 'Ali',
        },
        {
          id: 20,
          name: 'Ali',
        },
      ],
    },

    {
      id: 27632,
      name: 'Dr. Zeus',
      patients: [
        {
          id: 30,
          name: 'Chamide',
        },
        {
          id: 40,
          name: 'Cihat',
        },
        {
          id: 40,
          name: 'Zeynep',
        },
      ],
    },
    {
      id: 363238723,
      name: 'Dr. Clara',
      patients: [
        {
          id: 30,
          name: 'Chamide',
        },
        {
          id: 40,
          name: 'Cihat',
        },
      ],
    },
  ]);

  // bu method en az hastaya sahip olan doktoru buluyor
  //  doctorid parametresini kullanmamizin sebebi en az hastaya sahip olan doktoru ararken
  // olaki izin almak isteyen doktorun en az hastaya sahipse onu elemek icin kullaniyoruz
  // yani parametredeki doktorid izin almak isteyen doktorun id si oluyor
  const checkPatientsLength = (doctorid) => {
    // bu objeyi flag olarak kullaniyoruz
    // yani en az hastaya sahip olan doktorun bilgilerini buraya aktarmak icin kullancagiz
    let doctorwithMorePatients = {
      doctorId: null,
      // 99999999 tanimlamamizin sebebi if dogru bir seklide compare yapsin diye bu value yu verdik
      patientsNum: 99999999,
    };
    // burada forEach kullanara doktorlari tek tek tariyoruz
    doctors.forEach((doctor) => {
      // if in mantigi
      // eger taranan doktorun hasta sayisi flaga atadigimiz doktordan az ise
      // ve taranan doktor izin almak isteyen degilse flaga doktoru aktariyoruz
      if (
        doctor.patients.length < doctorwithMorePatients.patientsNum &&
        doctor.id !== doctorid
      ) {
        // burada flaga doktor id si ve hasta sayisi aktariliyor
        doctorwithMorePatients.doctorId = doctor.id;
        doctorwithMorePatients.patientsNum = doctor.patients.length;
      }
    });
    // burada findIndex methodunu kullanarak en az hastaya sahip olan doktorun indexini buluyoruz
    // yani doctors arrayinde kacinci siradaki elemen (doktor) oldugunu buluyoruz
    let doctorIndex = doctors.findIndex(
      (doctor) => doctor.id === doctorwithMorePatients.doctorId
    );
    // buldugumuz indexi return ediyoruz
    return doctorIndex;
  };

  // bu method hastalari aktarmak icin kullaniyoruz
  //  parametredeki doktorId izin almak isteyen doktorun id si oluyor
  // bu hem checkPatientsLength cagirirken isimize yariyor hemde izin almak isteyen doktorun indexini bulmak icin isimize yariyor
  const migratePatients = (doctorId) => {
    // burada selectedDoctor degiskenine checkPatientsLength methodunun return edecegi value yu aktariyoruz
    // yani en az hastaya sahip olan doktorun indexini selectedDoctor degiskeninde tutmus oluyoruzs
    const selectedDoctor = checkPatientsLength(doctorId);
    // burada findIndex methodunu kullanarak izin almak isteyen doktorun indexini buluyoruz
    // yani doctors arrayinde kacinci siradaki elemen (doktor) oldugunu buluyoruz
    let doctorIndex = doctors.findIndex((doctor) => doctor.id === doctorId);
    // burada doctors arrayini en az hastaya shaip oland doktorun
    // yani doctors[selectedDoctor] cunku demin dedigimiz gibi selectedDoctor en az hastaya sahip olan doktorun indexidir
    // ve .patients diyerek o doktorun patients arrayine push metodunu kullanarak
    // izin almak isteyen doktorun hastalarini aktariyoruz --> ...doctors[doctorIndex].patients
    doctors[selectedDoctor].patients.push(...doctors[doctorIndex].patients);
    // burada izin alan doktorun hasta sayisini/ arrayini sifirliyoruz
    // daha dogrusu bos bir array aktariyoruz
    doctors[doctorIndex].patients = [];
    // console.log ize updated doctors arrayini console yazdiriyoruz
    console.log(doctors);
  };

  return (
    <div className='background'>
      <div className='doctorlist'>
        {/* map methodunu kullanarak dtek tek doktorlarin bilgilerini yazdiriyoruz */}
        {doctors.map((doctor) => (
          <div>
            <div className='doctors'>{doctor.name}</div>
            <div>
              <div className='patientslist'>
                {/* yukardaki maptan current/su an olan doktorun hastalarini map ile yazdiriyoruz */}
                {doctor.patients.map((patient) => (
                  <div className='patients'>{patient.name}</div>
                ))}
                {/* onClick attribute unu kullanarak  migratePatients methodunu user her button a bastiginda methodi calistiriyoruz*/}
                {/* migratePatients methodunun parametreleri var diye oncesinde bir arrow function yaratiyoruz () => */}
                {/* parametreleri olmasaydi methodun ismini yazmamiz kafi idi */}
                <button onClick={() => migratePatients(doctor.id)}>Hit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
