const axios = require('axios');

const accessToken = '7ff92ff133c126ff466be7f3e0ab96351605ceef';

async function shortenUrl(url) {
  try {
    const response = await axios.post(
      'https://api-ssl.bitly.com/v4/shorten',
      {
        long_url: url
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.link;
  } catch (error) {
    console.error('Error al recortar el enlace:', error.message);
    return null;
  }
}
const longUrl = 'https://www.example.com';

shortenUrl(longUrl)
  .then(shortUrl => {
    if (shortUrl) {
      console.log('Enlace recortado:', shortUrl);
    } else {
      console.log('No se pudo recortar el enlace.');
    }
  })
  .catch(error => {
    console.error('Error al recortar el enlace:', error.message);
  });
