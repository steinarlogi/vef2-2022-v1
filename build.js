import { readFile, readdir, writeFile } from 'fs/promises';

import { join } from 'path';

import { makeHtml, makeHtmlList, indexTemplate } from './scripts/make-html.js';
import { parseData } from './scripts/parse-data.js';

const PATH = './data';
const OUTPUTDIR = './dist';

async function main() {
  const files = await readdir(PATH);
  const filelistHtml = makeHtmlList(files);

  for(const file of files) {
    const data = await readFile(join(PATH, file));

    const stats = parseData(data.toString('utf-8'));
  }

  const outputPath = join(OUTPUTDIR, "index.html");
  await writeFile(outputPath, indexTemplate(filelistHtml));
}

main().catch((err) => console.log(err));
