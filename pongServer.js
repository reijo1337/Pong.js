/**
 * Pong.js
 * @author Martin Richard
 *
 * Pong server root
 */

var Pong = require('./lib/pong.js');

var port = process.env.PORT || 8000

var pong = new Pong();
pong.init(port);
