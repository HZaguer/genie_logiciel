const COMMAND = {
  "0X123": "moveForward",
  "0X789": "moveBackward",
  "0XABC": "stop",
};

export function parseRobotCommand(commandFlow) {
  return commandFlow.split(",").map((code) => ({ name: COMMAND[code] }));
}

