const faker = require("faker");

const rows = 10;
const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};

for (let i = 0; i < rows; i++) {
  for (const attr in attributes) {
    console.log(attr);
  }
}
