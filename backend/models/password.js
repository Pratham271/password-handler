const mongoose = require('mongoose');

const passwordEntrySchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    username: { type: String, required: true },
    password: { type: String, required: true },
    website: { type: String, required: true },
});

const PasswordEntry = mongoose.model('PasswordEntry', passwordEntrySchema);

module.exports = PasswordEntry;
