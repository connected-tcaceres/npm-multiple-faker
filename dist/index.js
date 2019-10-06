const faker = require("faker");

const rows = 10;
const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};

for (let i = 0; i < rows; i++) {
  console.log(`ROW NUMBER : ${i}`);
  for (const attr in attributes) {
    console.log(`ATTRIBUTE : ${attr}`);
    for (const subAttr of attributes[attr]) {
      console.log(`SUB-ATTRIBUTE : ${subAttr}`);
      console.log(`VALUE : ${faker[attr][subAttr]()}`);
    }
  }
}
