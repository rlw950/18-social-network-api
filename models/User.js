const { match } = require('assert');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
        {
            type: Schema.Types.ThoughtId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.UserId,
            ref: 'User'
        }
    ],
});

UserSchema.virtual('friendCount').get(function () {
    return this.friends.slice(0, this.friends.length);
});

const User = model('User', UserSchema);

module.exports = User;