type LogType = "error" | "warning" | "success" | "info";

export class Logger {
  log(message: string, type: LogType = "info") {
    const colors = {
      error: "\x1b[41m%s\x1b[0m",
      warning: "\x1b[43m%s\x1b[0m",
      success: "\x1b[42m%s\x1b[0m",
      info: "\x1b[44m%s\x1b[0m",
    };

    const titles = {
      error: "[ERROR]",
      warning: "[WARNING]",
      success: "[SUCCESS]",
      info: "[INFO]",
    };

    console.log(colors[type], titles[type], message);
  }
}

export default new Logger();
