import { describe, expect, it } from '@jest/globals';

import { calculateStats } from '../scripts/calculate-stats.js';

describe('Tests for stats', () => {
  it('calculates the stats of a number list of equal length', () => {
    const numberList = [1,2,3,4];
    const expectedStats = {
      status: 1,
      max: 4,
      min: 1,
      sum: 10,
      variance: 1.6666666666666667,
      mean: 2.5,
      median: 2.5,
      standardDeviation: 1.2909944487358056,
    };

    const results = calculateStats(numberList);

    expect(results).toStrictEqual(expectedStats);
  }),
  it('calculates the stats of a number list of odd length', () => {
    const numberList = [1, 2, 3];
    const expectedStats = {
      status: 1,
      max: 3,
      min: 1,
      sum: 6,
      variance: 1,
      mean: 2,
      median: 2,
      standardDeviation: 1,
    };
    const results = calculateStats(numberList);

    expect(results).toStrictEqual(expectedStats);
  }),
  it('calculates the stats of an empty number list', () => {
    const numberList = [];
    const expectedStats = {
      status: 0,
    }

    const results = calculateStats(numberList);

    expect(results).toStrictEqual(expectedStats);
  })
});
