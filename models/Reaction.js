// import datatypes from mongoose package
import mongoose from 'mongoose';
// import moment library to farmat local timestamp
import moment from 'moment-timezone';

// Schema to create Reaction model
const ReactionSchema = new mongoose.Schema(
  // Schema definition
  {
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).tz('America/Halifax').format('YYYY-MM-DD HH:mm:ss'),
    },
  },
  // Schema options
  {
    toJSON: {
      getters: true,
    },
    id: false,
    versionKey: false
  }
);

// Reaction exported making it available for use in app
export default ReactionSchema;