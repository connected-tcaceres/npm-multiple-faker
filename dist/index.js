const { verifyFakerData } = require("./functions/verify");
const { createFakerArray } = require("./functions/create");

const fakerArrayData = (rows, data) => {
  return verifyFakerData(data) ? createFakerArray(rows, data) : null;
};

module.exports = fakerArrayData;
