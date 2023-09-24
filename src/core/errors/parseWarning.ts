import { logger } from "../../utils/logger";

export class ParseWarning {
  constructor(message: string) {
    logger.log(message, "warning");
  }
}
