const { verifyFakerData } = require("./verify");
const { data, data1, data2 } = require("./mockData");

describe("throws error if invalid attribute/subattribute is included", () => {
  it("fails if fake attribute is included", () => {
    expect(() => {
      verifyFakerData(data);
    }).toThrow();
  });
  it("fails if fake sub-attribute is included", () => {
    expect(() => {
      verifyFakerData(data1);
    }).toThrow();
  });
});

describe("returns true if all attributes/sub-attributes are valid", () => {
  it("passes when attributes are valid", () => {
    expect(verifyFakerData(data2)).toBe(true);
  });
});
