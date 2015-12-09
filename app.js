/*modified from https://github.com/cyrilf/ngChat.git*/

/**
 * Require dependencies
 */
var app            = module.exports = require('express')();
var http           = require('http');
var server         = http.createServer(app);

/**
 * Require our files
 */
var appManager     = require('./utils/appManager');
var routeManager   = require('./utils/routeManager');
var socketManager  = require('./utils/socketManager');
var conf           = require('./public/javascripts/conf').Conf;

/**
 * App configuration
 */
appManager.configure(app);

/**
 * Routes
 */
routeManager.init(app);

/**
 * Configure socket.io and
 * create a socket on a client connection
 */
socketManager.configure(server);

/**
 * Launch server
 */
var port = process.env.PORT || conf.port;
server.listen(port, function() {
  console.log("nuconferencechat is ready",
    server.address().address, server.address().port);
});