var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name : String
});

User = mongoose.model('User', userSchema);

module.exports = User;