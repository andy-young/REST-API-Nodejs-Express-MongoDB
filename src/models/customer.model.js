let mongoose = require("mongoose");

const server = "ds221155.mlab.com:21155";
const database = "rest-api-workshop";
const user = "andy-young";
const password = "wkvFDx2yS5ZqH49";

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Customer", CustomerSchema);
