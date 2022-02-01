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
      <li href="./${filename}.html">${listItem}</li>
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
