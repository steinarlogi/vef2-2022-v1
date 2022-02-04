import { readFile, readdir, writeFile } from 'fs/promises';
import { join } from 'path';

export function makeHtmlName(name) {
  return `${name.split('.').splice(0, name.split('.').length - 1)}.html`;
}

export async function readFolder(path) {
  const files = await readdir(path);
  return files
}

export async function getStringFromFile(path, file) {
  const buff = await readFile(join(path, file));
  return buff.toString('utf-8');
}

export async function writeToHtmlFile(outputDir, fileName, content) {
  await writeFile(join(outputDir, makeHtmlName(fileName)), content);
}
