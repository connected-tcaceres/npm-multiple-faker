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

module.exports = { data, data1, data2 };
