mongoose = require('mongoose');

logSchema = mongoose.Schema({
    content: {
        type: String
    }
});

Log = mongoose.model('log', logSchema);
module.exports = Log;
