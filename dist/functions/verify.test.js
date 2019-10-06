const { verifyFakerData } = require("./verify");
const { data, data1, data2 } = require("./mockData");

describe("throws error if invalid attribute/subattribute is included", () => {
  it("fails if fake attribute is included", () => {
    verifyFakerData(data);
  });
  it("fails if fake sub-attribute is included", () => {
    verifyFakerData(data1);
  });
});

describe("returns true if all attributes/sub-attributes are valid", () => {
  it("passes when attributes are valid", () => {
    verifyFakerData(data2);
  });
});
