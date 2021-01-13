/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 * will be used to take in keyboard commands to control snake
 */

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
 };

const setupInput = function() {
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