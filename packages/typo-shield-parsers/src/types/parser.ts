export type ParserListenerOptions = {
  /**
   * Затирание директив с одинаковыми именами
   *
   * @default 'none'
   */
  overrideDirectives?: "override" | "merge" | "none";
};
