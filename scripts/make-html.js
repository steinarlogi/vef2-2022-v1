export function makeHtml() {
  ret = `
    <p>
      Meðal tal gagnanna er ${medaltal},
    </p>
  `;
}

export function makeHtmlList(list) {
  let listString = '<ul>';

  for(const listItem of list) {
    const filename = listItem.split('.').splice(0, listItem.split('.').length-1);

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
        <link rel="stylesheet" href="styles/style.css">
      </head>


      <body>
        <header>
          <h1>Hér að neðan má sjá lista yfir skrárnar</h1>
        </header>

        <main>
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
  //Skilum upplýsingum um skjalið ef þð var ekki tómt eða
  //gallað. Annars bara paragraph sem segir að þetta sé gallað.

  if(stats.status == 0) {
    return `
      <p>
        Skjalið virðist hafa verið tómt eða skemmt. :(
      </p>
    `;
  }

  let htmlList = `
    <ul>
      <li><p>Stærsta gildi: ${stats.max}</p></li>
      <li><p>Minnsta gildi: ${stats.min}</p></li>
      <li><p>Summa talnanna: ${stats.sum}</p></li>
      <li><p>Dreifni gagnanna: ${stats.variance}</p></li>
      <li><p>Meðalgildi gagnanna: ${stats.mean}</p></li>
      <li><p>Miðgildi gagnanna: ${stats.median}</p></li>
      <li><p>Staðalfrávik gagnanna: ${stats.standardDeviation}</p></li>
      <li><p>Tölurnar eru á bilinu [${stats.min}, ${stats.max}]</p></li>
    </ul>
  `;

  return htmlList;
}

export function fileStatsTemplateHtml(statsHtml, content) {
  return `
    <h1>Tölfræðilegar niðurstöður úr skjalinu</h1>
    <div class="stats-results">
      ${statsHtml}
    </div>

    <h2>Innihald skjalsins eins og því var hlaðið upp má sjá hér að neðan</h2>
    <div class="file-content">
      <p>
        ${content}
      </p>
    </div>
  `;
}
