const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'mongodb+srv://testmongo:01123581321@sandboxtestinganddevelo.vocxz.mongodb.net/MEVN-tutorial?retryWrites=true&w=majority';
const db = monk(connectionString);

module.exports = db;