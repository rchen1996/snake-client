const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
 const connect = function() {
   const conn = net.createConnection({
     host: IP,
     port: PORT
   });
   // interpret incoming data as text
   conn.setEncoding('utf8');

   conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RBC');
    // conn.write('Move: up');
    // for (let i = 1; i < 500; i++) {
    //   setTimeout(() => {
    //     conn.write('Move: up');
    //   }, 50 * i);
    // }
   });

   conn.on('data', (data) => {
     console.log(data);
   });

   return conn;
 };

 module.exports = { connect }