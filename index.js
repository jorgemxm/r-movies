//-----------------------------------
// Json-server Config
//-----------------------------------
const server = require('./src/server')
const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('json-server: http://localhost:' + port)
})
