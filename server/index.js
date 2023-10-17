const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: false}).then(() => {
server.listen(PORT, async() => {
  const infoDb = await axios.get('http://localhost:3001/countries')
  const db = infoDb.data === 'Not countries' && await axios.get('http://localhost:3001/countries/db')
  
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
