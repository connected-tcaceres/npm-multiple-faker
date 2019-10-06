const faker = require("faker");

const verifyFakerAttribute = (attr, subattrData) => {
  if (!faker[attr]) {
    throw new Error(`Faker attribute <<${attr}>> does not exist.`);
  }
  for (const subattr of subattrData) {
    verifyFakerSubattribute(attr, subattr);
  }
};

const verifyFakerSubattribute = (attr, subattr) => {
  if (!faker[attr][subattr]) {
    throw new Error(`Faker sub-attribute <<${subattr}>> of attribute <<${attr}>> does not exist.`);
  }
};

const verifyFakerData = (data) => {
  for (const attr in data) {
    verifyFakerAttribute(attr, data[attr]);
  }
  return true;
};

module.exports = { verifyFakerData };
