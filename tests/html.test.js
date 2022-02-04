import { describe, expect, it } from '@jest/globals';

import {
  makeHtmlList,
  indexTemplate,
  makeStatsHtmlList,
  fileStatsTemplateHtml,
} from '../scripts/make-html.js';

describe('html test', () => {
  it('Makes a html list from a js list', () => {
    const list = ['1.txt', '2.txt'];
    const results = makeHtmlList(list);

    expect(results).toBe(`<ul><li><a href="./1.html">1.txt</a></li><li><a href="./2.html">2.txt</a></li></ul>`);
  }),
  it('makes the index template', () => {
    const content = 'content';
    const expected = `
    <!doctype html>
    <html>
      <head>
        <title>Hlaða inn skrám</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./styles/style.css">
      </head>

      <body>
        <header>
          <h1>Hér að neðan má sjá lista yfir skrárnar</h1>
        </header>

        <main>
          <p>Smelltu á skráarheiti til þess að sjá upplýsingar um skránna
          ${content}
        </main>

        <footer>
          <p>Verkefni 1 í vefforritun 2</p>
        <footer>
      </body>

    </html>
    `;

      const results = indexTemplate(content);

      expect(results).toBe(expected);
  }),
  it('makes the stats html if the file has contents', () => {
    const stats = {
      status: 1,
      max: 2,
      min: 3,
      sum: 4,
      variance: 5,
      mean: 6,
      median: 7,
      standardDeviation: 8,
    };

    const expected = `
    <div class="grid">
      <div class="row">
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Stærsta gildi</h4> <p>${stats.max}</p>
          </div>
        </div>
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Minnsta gildi</h4> <p>${stats.min}</p>
          </div>
        </div>
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Summa talnanna</h4> <p>${stats.sum}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Dreifni gagnanna</h4> <p>${stats.variance}</p>
          </div>
        </div>
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Meðalgildi gagnanna</h4> <p>${stats.mean}</p>
          </div>
        </div>
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Miðgildi gagnanna</h4> <p>${stats.median}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Staðalfrávik gagnanna</h4> <p>${stats.standardDeviation}</p>
          </div>
        </div>
        <div class="col col-4 col-12-s">
          <div class="stat-card">
            <h4>Svið</h4> <p>[${stats.min}, ${stats.max}]</p>
          </div>
        </div>
      </div>
    </div>
  `;

    const results = makeStatsHtmlList(stats);

    expect(results).toBe(expected);
  }),
  it('makes the stats html if the file has no contents', () => {
    const stats = {
      status: 0,
    };

    const expected = `
      <p>
        Skjalið virðist hafa verið tómt eða skemmt. :(
      </p>
    `;

    const results = makeStatsHtmlList(stats);

    expect(results).toBe(expected);
  }),
  it('puts the file stats and file contents in the html template', () => {
    const content1 = 'content1';
    const content2 = 'content2';

    const expected = `
    <!doctype html>
    <html>
      <head>
        <title>Upplýsingar um skránna</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./styles/style.css">
        <link rel="stylesheet" href="./styles/grid.css">
      </head>

      <body>
        <header>
          <h1>Tölfræðilegar niðurstöður úr skjalinu</h1>
        </header>
        <main>
          <div class="stats-results">
            ${content1}
          </div>

          <h2>Innihald skjalsins eins og því var hlaðið upp má sjá hér að neðan</h2>
          <div class="file-content">
            <p>
              ${content2}
            </p>
          </div>
        </main>
      </body
    </html>
  `;

    const results = fileStatsTemplateHtml(content1, content2);

    expect(results).toBe(expected);
  })
});
