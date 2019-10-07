# MASS DATA GENERATOR

This package utilizes the [Faker](https://www.npmjs.com/package/faker) npm package to generate random data depending on user input.

---

## API

---

```
const multiple-faker = require('multiple-faker')

const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  testing: ["phoneNumber"],
  random: ["number"]
};

const numRows = 3

const generatedData = multiple-faker(numRows,attributes);


```
