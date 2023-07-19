const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { calculateCarFee, calculateMotorcycleFee, calculateBusFee } = require('./calculateFee'); // Update the path to the actual location of the file

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/plate-recognition', async (req, res) => {
  const { imageUrl, enteredTimestamp, exitedTimestamp, vehicleType } = req.body;

  const duration = new Date(exitedTimestamp) - new Date(enteredTimestamp);

  let parkingFee = 0;
  if (vehicleType === 'car') {
    parkingFee = calculateCarFee(duration);
  } else if (vehicleType === 'motorcycle') {
    parkingFee = calculateMotorcycleFee(duration);
  } else {
    parkingFee = 0;
  }

  const response = await axios.post('https://api.platerecognizer.com/v1/plate-reader', {
    image_url: imageUrl
  }, {
    headers: {
      'Authorization': '34643bbacfc81f13cc73ee6abd99bafd54731481'
    }
  });

  const plateNumber = response.data.results[0].plate;

  res.status(200).json({ plateNumber, parkingFee });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
