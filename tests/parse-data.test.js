import { describe, expect, it } from '@jest/globals';

import { parseData } from '../scripts/parse-data.js';

describe('tests for parse data', () => {
  it('takes a string and parses the data and returns a list of the numbers', () => {
    const data = `
      #1
          #2
          gs
        23
        24
        25
        ###
        aaa
    `;

    const expectedList = [23, 24, 25];

    const results = parseData(data);

    expect(results).toStrictEqual(expectedList);
  });
});
