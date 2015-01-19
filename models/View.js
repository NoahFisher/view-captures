var Mongoose = require('mongoose');

exports.ViewSchema = new Mongoose.Schema({
  uuid: { type : String, required : true },
  page: { type : String, required : true },
  url: { type : String, required : true },
});

