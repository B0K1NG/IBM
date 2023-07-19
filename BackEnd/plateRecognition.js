const axios = require('axios');

const API_TOKEN = '34643bbacfc81f13cc73ee6abd99bafd54731481';

async function performPlateRecognition(imageUrl) {
  const url = 'https://api.platerecognizer.com/v1/plate-reader';
  const headers = {
    'Authorization': `Token ${API_TOKEN}`,
    'Content-Type': 'application/json',
  };
  const data = {
    'url': imageUrl,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error performing plate recognition:', error);
    throw error;
  }
}

const imageUrl = 'https://ibb.co/w4tyPCy';
performPlateRecognition(imageUrl)
  .then(result => {
    console.log('Plate recognition result:', result);
    // Process the plate recognition result as needed
  })
  .catch(error => {
    console.error('Error performing plate recognition:', error);
  });
