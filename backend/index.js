const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const PORT = 4000;

app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your client's domain
    methods: 'GET, POST, PUT, DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

const doctors = {
  1000: {
    patients: [
      { name: 'alim', age: '35', symtom: 'upamuk kalpli' },
      { name: 'nazlican', age: '35', symtom: 'ben' },
      { name: 'yaprak', age: '35', symtom: 'tatli' },
    ],
  },
  1001: {
    patients: [
      { name: 'nurcan', age: '35', symtom: 'sinir' },
      { name: 'engin', age: '35', symtom: 'merakli' },
      { name: 'tamar', age: '35', symtom: 'kivircik' },
    ],
  },
  1002: {
    patients: [
      { name: 'gulcan', age: '35', symtom: 'kil donmesi' },
      { name: 'adem', age: '35', symtom: 'okb' },
      { name: 'lidya', age: '35', symtom: 'sekerlik' },
    ],
  },
};

const fruits = [];

app.post('/fruits/post', (req, res) => {
  const fruit = req.body;
  const findFruit = fruits.find((f) => f.fruit === req.body.fruit);
  if (findFruit) {
    findFruit.stock += req.body.stock;
  } else {
    fruits.push(fruit);
  }

  console.log(fruits);
  res.status(200).json({ message: 'The fruit added successfully' });
});

app.post('/fruits/buy', (req, res) => {
  const fruit = req.body;
  const findFruit = fruits.find((f) => f.fruit === req.body.buyFruit);
  if (findFruit && fruit.buyStock <= findFruit.stock) {
    findFruit.stock -= req.body.buyStock;
    res.status(200).json({ message: 'You buy the fruit successfully' });
  } else {
    res.status(400).json({ message: 'Not enough stock!' });
  }

  console.log(fruits);
});

app.get('/fruits/get', (req, res) => {
  res.send(fruits);
});

app.get('/doctors/:doctorId/', (req, res) => {
  const doctorId = req.params.doctorId;
  const doctor = doctors[doctorId];

  if (doctor) {
    res.send(doctor.patients);
  } else {
    res.status(404).json({ message: 'Doktor bulunamadı' });
  }
});

// POST metodu ile hasta ekleme
// POST metodu ile hasta ekleme (ID gövdede)
app.post('/patients', (req, res) => {
  console.log(req.body);

  const { doctorId, ...patientData } = req.body;

  const doctor = doctors[doctorId];
  //console.log(doctor);

  if (doctor) {
    doctor.patients.push(patientData);
    res.json({ message: 'Hasta eklendi' });
  } else {
    res.status(404).json({ message: 'Doktor bulunamadı' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
