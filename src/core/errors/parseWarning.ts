import logger from "typo-shield-logger";

export class ParseWarning {
  constructor(message: string) {
    logger.log(message, "warning");
  }
}
