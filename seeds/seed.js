// import the mongoose package
import mongoose from 'mongoose';
// import models for seeding data
import { User, Thought } from '../models/index.js';

// define seeds users and thoughts
const users = [
    {
        username: 'userOne',
        email: 'userone@example.com'
    },
    {
        username: 'userTwo',
        email: 'usertwo@example.com'
    },
  ];
const thoughts = [
    {
        thoughtText: 'Here is a cool thought by userOne.',
        username: 'userOne',
        reactions: [{ reactionBody: 'Great thought!', username: 'userTwo' }]
    },
    {
        thoughtText: 'Another thought by userTwo.',
        username: 'userTwo',
        reactions: [{ reactionBody: 'Interesting take!', username: 'userOne' }]
    },
];
  
const seedDatabase = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // insert the seeds
    await User.insertMany(users);
    const createdThoughts = await Thought.insertMany(thoughts);

    console.log('Database seeded!');
    process.exit(0);
};

// executes the seedDatabase function
seedDatabase().catch(err => {
    console.error('Failed to seed database:', err);
    process.exit(1);
});