// import datatypes from mongoose package
import mongoose from 'mongoose';

// Schema to create User model
const UserSchema = new mongoose.Schema(
  // Schema definition
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Use regex to validate email
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    // Array of ids thoughts created by user
    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    // Array of ids user's friends
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  // Schema options
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// create virtual property to get count of friends
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// User exported making it available for use in app
export default mongoose.model('User', UserSchema);