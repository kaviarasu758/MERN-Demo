var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
var User = mongoose.model("users", userSchema);
module.exports = User;
