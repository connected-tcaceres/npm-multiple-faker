const { verifyFakerData } = require("./verify");
const { data1, data2, data3 } = require("./mockData");

describe("throws error if invalid attribute/subattribute is included", () => {
  it("fails if fake attribute is included", () => {
    expect(() => {
      verifyFakerData(data1);
    }).toThrow();
  });
  it("fails if fake sub-attribute is included", () => {
    expect(() => {
      verifyFakerData(data2);
    }).toThrow();
  });
});

describe("returns true if all attributes/sub-attributes are valid", () => {
  it("passes when attributes are valid", () => {
    expect(verifyFakerData(data3)).toBe(true);
  });
});
