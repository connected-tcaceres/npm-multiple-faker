const faker = require("faker");

const rows = 10;
const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};

for (const attr in attributes) {
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

const 
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
