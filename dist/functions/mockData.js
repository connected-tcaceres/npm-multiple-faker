const data = {
  name: ["firstName", "lastName", "jobTitle"],
  testing: ["phoneNumber"],
  random: ["number"]
};

const data1 = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number", "testing"]
};

const data2 = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};

const rows = 1;
const rows2 = 2;
const rows3 = 100;

module.exports = { data, data1, data2, rows, rows2, rows3 };
