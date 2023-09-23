export class ParseWarning {
  constructor(message: string) {
    console.log("\x1b[43m%s\x1b[0m", `[Warning] ${message}`);
  }
}
