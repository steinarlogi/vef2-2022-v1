import { describe, expect, it } from '@jest/globals';

import { makeHtmlName } from '../scripts/read-write.js';

describe('tests for read write file', () => {
  it('takes a file.txt name and returns file.html name', () => {
    const input = 'file.txt';
    const expected = 'file.html';

    const results = makeHtmlName(input);

    expect(results).toBe(expected
    );
  })
});
