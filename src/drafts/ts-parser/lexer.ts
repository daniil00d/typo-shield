import { RowSeparator, Tab } from './constants';
import { DSL, DSLTree } from './types';

abstract class ALexer {
  abstract getLexemes(dsl: DSL): DSL[];
  abstract normalizeDSL(subTreeDSL: DSL[]): DSL[];
  abstract recParser(subTreeDSL: DSL[]): DSLTree;
}

export class Lexer extends ALexer {
  public normalizeDSL(subTreeDSL: DSL[]): DSL[] {
    return subTreeDSL.map((tree) => tree.replace(Tab, ''));
  }

  public getLexemes(dsl: DSL): DSL[] {
    return dsl
      .split(RowSeparator)
      .map((row) => row.replace(Tab, ''))
      .filter((row) => row);
  }

  public recParser(subTreeDSL: DSL[]): DSLTree {
    // как правило, всегда первый элемент - это корень дерева
    const root = subTreeDSL[0];

    // берем все остальное поддерево без корня
    const otherLexemes = subTreeDSL.slice(1);

    // если поддерево пустое, то просто возвращаем корень как {root}
    if (otherLexemes.length === 0) {
      return { root };
    }

    // извлекаем индексы всех ближайших корней поддерева
    const indexes = otherLexemes.reduce((ind, lex, index) => {
      if (lex.match(/^\s\s[|:><@A-Za-z]/)?.length) {
        return [...ind, index];
      }

      return ind;
    }, [] as number[]);

    // объявляем главное дерева как ветвь дерева на предыдущем этапе рекурсии
    const mainTree = {
      root,
      subtree: [] as string[][],
    };

    // заполняем ветви в виде поддеревьев
    indexes.forEach((ind, index) => {
      const subArrayOfSubTrees = otherLexemes.slice(ind, indexes[index + 1]);
      mainTree.subtree.push(this.normalizeDSL(subArrayOfSubTrees));
    });

    return {
      ...mainTree,
      subtree: mainTree.subtree.map((sub: any) => this.recParser(sub)),
    };
  }
}
