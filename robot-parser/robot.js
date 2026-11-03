const COMMAND = {
  "0X123": "moveForward",
  "0X789": "moveBackward",
  "0XABC": "stop",
};

export function parseRobotCommand(commandFlow) {
  const commands = [];
  const instructions = commandFlow.split(",");

  for (const instruction of instructions) {
    const parts = instruction.split(":");
    const code = parts[0];
    let count = 1;

    if (parts.length === 2) {
      count = Number(parts[1]);
    }

    for (let i = 0; i < count; i++) {
      commands.push({ name: COMMAND[code] });
    }
  }

  return commands;
}
