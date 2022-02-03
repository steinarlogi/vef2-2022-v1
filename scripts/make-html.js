export function makeHtmlList(list) {
  let listString = '<ul>';

  for (const listItem of list) {
    const filename = listItem.split('.').splice(0, listItem.split('.').length - 1);

    listString += `
      <li> <a href="./${filename}.html">${listItem}</a></li>
      `;
  }

  listString += '</ul>';

  return listString;
}

export function indexTemplate(fileList) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Hlaða inn skrám</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../styles/style.css">
      </head>

      <body>
        <header>
          <h1>Hér að neðan má sjá lista yfir skrárnar</h1>
        </header>

        <main>
          <p>Smelltu á skráarheiti til þess að sjá upplýsingar um skránna
          ${fileList}
        </main>

        <footer>
          <p>Verkefni 1 í vefforritun 2</p>
        <footer>
      </body>

    </html>

  `;
}

export function makeStatsHtmlList(stats) {
  // Skilum upplýsingum um skjalið ef þð var ekki tómt eða
  // gallað. Annars bara paragraph sem segir að þetta sé gallað.

  if (stats.status === 0) {
    return `
      <p>
        Skjalið virðist hafa verið tómt eða skemmt. :(
      </p>
    `;
  }

  const htmlList = `
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

  return htmlList;
}

export function fileStatsTemplateHtml(statsHtml, content) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Upplýsingar um skránna</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../styles/style.css">
        <link rel="stylesheet" href="../styles/grid.css">
      </head>

      <body>
        <header>
          <h1>Tölfræðilegar niðurstöður úr skjalinu</h1>
        </header>
        <main>
          <div class="stats-results">
            ${statsHtml}
          </div>

          <h2>Innihald skjalsins eins og því var hlaðið upp má sjá hér að neðan</h2>
          <div class="file-content">
            <p>
              ${content}
            </p>
          </div>
        </main>
      </body
    </html>
  `;
}
