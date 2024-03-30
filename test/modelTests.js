// Include packages needed for this application
import mongoose from 'mongoose';
import { expect } from 'chai';
// import models
import User from '../models/User.js';
import Thought from '../models/Thought.js';

// before test, Connect to MongoDB
before(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDBTest');
});

// disconnect from MongoDB after tests run
after(async () => {
    await mongoose.connection.close();
});

// utility function to clean up data
const clearDatabase = async () => {
    await Thought.deleteMany({});
    await User.deleteMany({});
};

// User model tests
describe('User Model Tests', () => {
    // clean up db before test
    beforeEach(async () => {
        await clearDatabase();
    });

    it('Should create a user successfully', async () => {
        const userData = {
            username: 'testuser',
            email: 'test@example.com',
        };

        // create/save a new user
        const newUser = new User(userData);
        const savedUser = await newUser.save();

        // assert to check user creation
        expect(savedUser._id).to.exist;
        expect(savedUser.username).to.equal(userData.username);
        expect(savedUser.email).to.equal(userData.email);
    });
});

// Thought model tests
describe('Thought Model Tests', () => {
    // clean up db before test
    beforeEach(async () => {
        await clearDatabase();
    });

    it('Should create a thought successfully', async () => {
        const thoughtData = {
            thoughtText: 'This is a cool thought.',
            username: 'testuser',
        };

        // create/save a new thought
        const newThought = new Thought(thoughtData);
        const savedThought = await newThought.save();

        // assert to check thought creation
        expect(savedThought._id).to.exist;
        expect(savedThought.thoughtText).to.equal(thoughtData.thoughtText);
        expect(savedThought.username).to.equal(thoughtData.username);
    });
});

// Reaction model tests
describe('Reaction Model Tests', () => {
    // create a user and a thought
    let createdUser, createdThought;
    
    beforeEach(async () => {
        await clearDatabase();
        const userData = {
            username: 'reactiontestuser',
            email: 'reactiontest@example.com',
        };
        createdUser = new User(userData);
        await createdUser.save();
    
        const thoughtData = {
            thoughtText: 'This is a thoughtful thought.',
            username: createdUser.username,
        };
        createdThought = new Thought(thoughtData);
        await createdThought.save();
    });

    it('Should add a reaction to a thought successfully', async () => {
        // Define a reaction
        const reactionData = {
            reactionBody: 'This is a cool reaction.',
            username: createdUser.username,
        };
    
        // Add reaction to thought
        createdThought.reactions.push(reactionData);
        const updatedThought = await createdThought.save();
    
        // assert to check reaction creation
        expect(updatedThought.reactions).to.have.lengthOf(1);
        const savedReaction = updatedThought.reactions[0];
        expect(savedReaction.reactionBody).to.equal(reactionData.reactionBody);
        expect(savedReaction.username).to.equal(reactionData.username);
    });
});