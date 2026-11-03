export function parseRobotCommand(commandFlow) {
  if (commandFlow === "0X789") {
    return [{ name: "moveBackward" }];
  }
  if (commandFlow === "0XABC") {
    return [{ name: "stop" }];
  }
  return [{ name: "moveForward" }];
}
