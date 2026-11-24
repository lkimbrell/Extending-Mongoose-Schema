const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function formatWebsite(url) {
    if (typeof url !== 'string' || url.length === 0 || url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
        return url;
    }

    return 'http://' + url;
}

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        trim: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    },
    website: {
        type: String,
        set: formatWebsite,
        get: formatWebsite
    }
});

UserSchema.set('toJSON', { getters: true });

mongoose.model('User', UserSchema);