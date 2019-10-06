const faker = require("faker");

const rows = 10;
const attributes = {
  name: ["firstName", "lastName", "jobTitle", "poop"],
  phone: ["phoneNumber"],
  random: ["number"]
};

console.log(faker.name());

for (const attr in attributes) {
  if (!faker[attr]) {
    throw new Error(`Faker attribute of "${attr}" does not exist.`);
  }
  for (const subAttr of attributes[attr]) {
    if (!faker[attr][subAttr]) {
      throw new Error(`Faker attribute ${attr}'s sub-attribute of "${subAttr}" does not exist.`);
    }
  }
}

// const data = {};
// for (let i = 0; i < rows; i++) {
//   for (const attr in attributes) {
//     if (!faker[attr]) {
//       throw new Error(`Faker attribute of "${attr}" does not exist.`);
//     }
//     for (const subAttr of attributes[attr]) {
//       console.log(`SUB-ATTRIBUTE : ${subAttr}`);
//       console.log(`VALUE : ${faker[attr][subAttr]()}`);
//     }
//   }
// }
