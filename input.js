const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, CTRL_C, message_map } = require('./constants');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 * will be used to take in keyboard commands to control snake
 */

// Stores the active TCP connection object
let connection;

const handleUserInput = function(key) {
  if (key === CTRL_C) {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } 
  for (const mappedKey in message_map) {
    if (key === mappedKey) {
      connection.write(message_map[mappedKey])
    }
  }
 };

const setupInput = function(conn) {
  connection = conn;
  // stdin configuration
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handling ctrl + c user input
  stdin.on('data', handleUserInput)
  return stdin;
};

module.exports = { setupInput };