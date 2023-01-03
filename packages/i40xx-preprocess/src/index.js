import { readFileSync } from 'node:fs';
import * as path from 'node:path';

import { extractDirectives } from './workers/directives.js';

/*
 * Transform single file
 */
const transformSourceCode = (sourceCode, { defines }) => sourceCode.replace(
  /\$(\w+)/g,
  (match, identifier) => defines.get(identifier),
);

/*
 * Opens assembly source code and returns preprocessed listing
 */
export function preprocessFile(filePath) {
  const unvisited = [filePath];
  const sourceCodeFiles = new Map();
  const defines = new Map();

  while (unvisited.length) {
    const currentPath = unvisited.shift();
    const codeRaw = readFileSync(currentPath, 'utf-8');
    const { directives, sourceCode } = extractDirectives(codeRaw);
    sourceCodeFiles.set(currentPath, sourceCode);

    for (const directive of directives) {
      const [, includePath] = directive.match(/^%include "(.+)"$/) || [];
      if (includePath) {
        const fullPathForInclude = path.resolve(path.dirname(currentPath), includePath);
        if (!sourceCodeFiles.has(fullPathForInclude)) {
          unvisited.push(fullPathForInclude);
        }
        continue;
      }

      const [, identifier, replacement] = directive.match(/^%define (\w+)\s+(\w+)$/) || [];
      if (identifier && replacement) {
        defines.set(identifier, replacement);
      }
    }
  }

  return [...sourceCodeFiles.values()].map((sourceCode) => transformSourceCode(sourceCode, { defines })).join('\n');
}
