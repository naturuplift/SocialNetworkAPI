// import model and datatypes from sequelize package
import mongoose from 'mongoose';
// import Reaction schema
import reactionSchema from './Reaction.js';

// Schema to create Thought model
const ThoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested reaction documents
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// create virtual property to get count of reactions
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Thought exported making it available for use in app
export default mongoose.model('Thought', thoughtSchema);