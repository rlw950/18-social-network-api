const { ObjectId } = require('bson');
const { Schema, model, Mongoose, Types } = require('mongoose');
const { stringify } = require('querystring');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true,
            validate: [({ length }) => length <= 128, 'Thought must be less than 128 characters.']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        userName: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

var Schema = Mongoose.Schema,
ObjectId = Schema.ObjectId;

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: stringify,
            required: true,
            validate: [({ length }) => length <= 280, 'Reaction Body must be less than 128 characters.']
        },
        userName: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;