import { join } from 'path';

import {
  makeHtmlList,
  indexTemplate,
  makeStatsHtmlList,
  fileStatsTemplateHtml,
} from './scripts/make-html.js';
import { parseData } from './scripts/parse-data.js';
import { calculateStats } from './scripts/calculate-stats.js';
import { readFolder, getStringFromFile, writeToHtmlFile } from './scripts/read-write.js';

const PATH = './data';
const OUTPUTDIR = './dist';

async function main() {
  const files = await readFolder(PATH);
  const filelistHtml = makeHtmlList(files);

  await writeToHtmlFile(OUTPUTDIR, 'index.txt', indexTemplate(filelistHtml));

  for (const file of files) {
    const data = await getStringFromFile(PATH, file);
    
    const numberList = parseData(data);
    const stats = calculateStats(numberList);

    const statsListHtml = makeStatsHtmlList(stats);

    const resultsHtml = fileStatsTemplateHtml(
      statsListHtml,
      data.replaceAll('\n', '<br>'),
    );

    await writeToHtmlFile(OUTPUTDIR, file, resultsHtml);
  }

}

main().catch((err) => console.log(err));
