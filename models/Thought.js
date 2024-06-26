// import datatypes from mongoose package
import mongoose from 'mongoose';
// import Reaction schema
import ReactionSchema from './Reaction.js';
// import moment library to farmat local timestamp
import moment from 'moment-timezone';

// Schema to create Thought model
const ThoughtSchema = new mongoose.Schema(
  // Schema definition
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).tz('America/Halifax').format('YYYY-MM-DD HH:mm:ss'),
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested reaction documents
    reactions: [ReactionSchema],
  },
  // Schema options
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
    versionKey: false
  }
);

// create virtual property to get count of reactions
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Thought exported making it available for use in app
export default mongoose.model('Thought', ThoughtSchema);