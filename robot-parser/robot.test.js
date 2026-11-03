import { test } from "node:test";
import assert from "node:assert";
import { parseRobotCommand } from "./robot.js";

test("0X123 code generates 'move forward' command", function () {
  const commands = parseRobotCommand("0X123");

  assert.equal(commands.length, 1);
  assert.equal(commands[0].name, "moveForward");
});
