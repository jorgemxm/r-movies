//-----------------------------------
// JSON Server - Config
//-----------------------------------
const jsonServer = require('json-server');
const clone = require('clone');
const path = require('path');
const data = require(path.join(__dirname, '../db/movies_api.json'));
const history = require('connect-history-api-fallback');

const server = jsonServer.create();
const router = jsonServer.router(clone(data));

// Set default middlewares (logger, static, cors and no-cache)
// const middlewares = jsonServer.defaults();
// server.use(middlewares);

server.use(history());

server.use((req, res, next) => {
  if (req.path === '/') return next();
  router.db.setState(clone(data));
  next();
});

server.use(jsonServer.defaults({
  logger: process.env.NODE_ENV !== 'production'
}));

// Use default router
server.use('/api', router);

module.exports = server;
