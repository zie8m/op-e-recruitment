import getChunks from "./getChunks";

describe("getChunks utility:", () => {
  it("return proper amount of chunks", () => {
    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let expectedArr = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
    expect(getChunks(testArr, 6)).toEqual(expectedArr);
  });

  it("should work with objects", () => {
    let testArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    let expectedArr = [[{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 4 }]];
    expect(getChunks(testArr, 2)).toEqual(expectedArr);
  });

  it("should use the default parameter - 12", () => {
    let testArr = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ];
    let expectedArr = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    ];
    expect(getChunks(testArr)).toEqual(expectedArr);
  });

  it("should work properly if the complete length of an array is smaller than the specified chunk", () => {
    let testArr = [1, 2, 3, 4, 5, 6];
    let expectedArr = [[1, 2, 3, 4, 5, 6]];
    expect(getChunks(testArr, 7)).toEqual(expectedArr);
  });
});
