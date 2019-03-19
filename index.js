"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./react-xfields.cjs.production.js");
} else {
  module.exports = require("./react-xfields.cjs.development.js");
}
