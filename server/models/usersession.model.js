const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var userSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

var UserSession = mongoose.model('UserSession', userSessionSchema, 'usersession');

module.exports = UserSession;