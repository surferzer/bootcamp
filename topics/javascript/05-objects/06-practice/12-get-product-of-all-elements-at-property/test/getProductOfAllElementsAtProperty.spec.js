const Assert = require('chai').assert;
const getProductOfAllElementsAtProperty = require('../solution/getProductOfAllElementsAtProperty');

describe('getProductOfAllElementsAtProperty()', () => {
  it("deve devolver 0, para { koy: [1, 2, 3] } y 'key'", () => {
    const obj = {
      koy: [1, 2, 3],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deve devolver 0, para { key: 'nope' } y 'key'", () => {
    const obj = {
      key: 'nope',
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deve devolver 0, para { key: [] } y 'key'", () => {
    const obj = {
      key: [],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 0);
  });

  it("deve devolver 24, para { key: [1, 2, 3, 4] } y 'key'", () => {
    const obj = {
      key: [1, 2, 3, 4],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 24);
  });

  it("deve devolver 60, para { key: [1, 5, 6, 2, 1] } y 'key'", () => {
    const obj = {
      key: [1, 5, 6, 2, 1],
    };
    const output = getProductOfAllElementsAtProperty(obj, 'key');

    Assert.deepEqual(output, 60);
  });
});
