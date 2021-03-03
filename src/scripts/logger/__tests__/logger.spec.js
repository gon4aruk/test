import { createLogger } from "../logger";

it("shound return stored logs", () => {
  const logger = createLogger("user login");
  expect(logger.getLogs()).toEqual([]);
});

it("shound save log message", () => {
  const logger = createLogger("user login");
  logger.log("login success");

  expect(logger.getLogs()).toEqual(["log - user login - login success"]);
});

it("shound save error message", () => {
  const logger = createLogger("user login");
  logger.error("login failed");

  expect(logger.getLogs()).toEqual(["error - user login - login failed"]);
});
