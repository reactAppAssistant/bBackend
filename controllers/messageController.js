const Post = require('../models/Post');
const User = require('../models/User');
const Message = require('../models/Message');


exports.getMessages = async (req, res) => {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
    res.json(messages);
};

exports.sendMessage = async (req, res) => {
    const { text, user } = req.body;
    const message = new Message({ text, user });
    await message.save();
    res.status(201).json(message);
};