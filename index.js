//-----------------------------------
// Server Config
//-----------------------------------
const server = require('./src/server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`json-server: http://localhost:${ PORT }`);
});
