// import the mongoose package
import mongoose from 'mongoose';
// import models for seeding data
import { User, Thought } from '../models/index.js';

// define seeds users
const usersData = [
    {
        username: 'userOne',
        email: 'userone@example.com'
    },
    {
        username: 'userTwo',
        email: 'usertwo@example.com'
    },
    {
      username: 'userThree',
      email: 'userthree@example.com'
    }
];
// define seeds thoughts
const thoughtsData = [
    {
        thoughtText: 'Here is a cool thought by userOne.',
        username: 'userOne',
        reactions: [
            {
                reactionBody: 'Great thought!',
                username: 'userTwo'
            },
            {
                reactionBody: 'Absolutely love this!',
                username: 'userThree'
            }
        ]
    },
    {
        thoughtText: 'Another thought by userTwo.',
        username: 'userTwo',
        reactions: [
            {
                reactionBody: 'Interesting take!',
                username: 'userOne'
            }
        ]
    },
    {
        thoughtText: 'userThree joining the conversation.',
        username: 'userThree',
        reactions: [
            {
                reactionBody: 'This is fantastic.',
                username: 'userOne'
            },
            {
                reactionBody: 'Thanks for sharing!',
                username: 'userTwo'
            }
        ]
    }
];
  
const seedDatabase = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB');

    // clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // insert new users seeds
    const createdUsers = await User.insertMany(usersData);
    const userMap = {};
    createdUsers.forEach(user => {
        userMap[user.username] = user._id;
    });

    const updatedThoughtsData = thoughtsData.map(thought => ({
        ...thought,
        username: userMap[thought.username],
        reactions: thought.reactions.map(reaction => ({
            ...reaction,
            username: userMap[reaction.username]
        }))
    }));

    const createdThoughts = await Thought.insertMany(updatedThoughtsData);

    // Linking thoughts to users
    await Promise.all(createdThoughts.map((thought, index) => {
        return User.findByIdAndUpdate(thought.username, { $push: { thoughts: thought._id } });
    }));

    // Establishing friend relationships
    await User.findByIdAndUpdate(userMap['userOne'], { $addToSet: { friends: userMap['userTwo'] } });
    await User.findByIdAndUpdate(userMap['userOne'], { $addToSet: { friends: userMap['userThree'] } });
    await User.findByIdAndUpdate(userMap['userTwo'], { $addToSet: { friends: userMap['userOne'] } });
    await User.findByIdAndUpdate(userMap['userTwo'], { $addToSet: { friends: userMap['userThree'] } });
    await User.findByIdAndUpdate(userMap['userThree'], { $addToSet: { friends: userMap['userOne'] } });
    await User.findByIdAndUpdate(userMap['userThree'], { $addToSet: { friends: userMap['userTwo'] } });

    console.log('Database seeded!');
    process.exit(0);
};

// executes the seedDatabase function
seedDatabase().catch(err => {
    console.error('Failed to seed database:', err);
    process.exit(1);
});