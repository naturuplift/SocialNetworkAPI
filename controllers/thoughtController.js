
// import models
import Thought from '../models/Thought.js';
import User from '../models/User.js';

// Get all thoughts
const getAllThoughts = async (req, res) => {
    try {
        //  Find method
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get a single thought by ID
const getThoughtById = async (req, res) => {
    try {
        //  FindById method
        const thought = await Thought.findById(req.params.thoughtId);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Create a new thought and link it to user
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Update a thought by its ID
const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Delete a thought by its ID
const deleteThought = async (req, res) => {
    try {
        // console.log(req.params.thoughtId)
        const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!deletedThought) {
            return res.status(404).json({ message: 'No thought found with this ID!' });
        }

        console.log(deletedThought)

        // find user by username
        const user = await User.findOne({ username: deletedThought.username });
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // update user's thoughts array
        await User.findByIdAndUpdate(
            user._id,
            { $pull: { thoughts: deletedThought._id } },
            { new: true }
        );
        res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting thought', error: error.message });
    }
};

// Add a reaction to a thought
const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
        );
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Remove a reaction from a thought
const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
        );
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

// export models for app use
export {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
};