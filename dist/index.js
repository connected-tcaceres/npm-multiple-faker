const faker = require("faker");

const rows = 10;
const data = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};

const verifyFakerAttribute = (attr, attrData) => {};
  if (!faker[attr]) {
    throw new Error(`Faker attribute <<${attr}>> does not exist.`);
  }
  for (const subAttr of attributes[attr]) {
    if (!faker[attr][subAttr]) {
      throw new Error(
        `Faker sub-attribute <<${subAttr}>> of attribute <<${attr}>> does not exist.`
      );
    }
  }
}
const verifyFakerSubattributes = () => {};

const verifyFakerData = (data) => {
  for (const attr in data) {
    verifyFakerAttribute(attr, data[attr]);
  }
};

const createFakerArray = (rows, attributes) => {
  const data = [];
  for (let i = 0; i < rows; i++) {
    data[i] = {};
    for (const attr in attributes) {
      for (const subAttr of attributes[attr]) {
        data[i][subAttr] = faker[attr][subAttr]();
      }
    }
  }
  console.log("DATA :", data);
};
