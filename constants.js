const IP = '135.23.222.131';
const PORT = 50542;
const MOVE_UP_KEY = "w";
const MOVE_LEFT_KEY = "a";
const MOVE_DOWN_KEY = "s";
const MOVE_RIGHT_KEY = "d";
const CTRL_C = '\u0003';
const message_map = {
  h: "Say: sup",
  b: "Say: bye",
  y: "Say: yum"
};

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  CTRL_C,
  message_map
};