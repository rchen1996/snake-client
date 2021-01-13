/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 * will be used to take in keyboard commands to control snake
 */

// Stores the active TCP connection object
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "h") {
    connection.write("Say: sup");
  } else if (key === "b") {
    connection.write("Say: bye");
  } else if (key === "y") {
    connection.write("Say: yum");
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