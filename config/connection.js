// Include packages needed for this application
//  to load environment variables from a .env file
const { connect, connection} = require("mongoose");

// connect to the database
const connectionString =
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Use to debug log mongo queries being executed
mongoose.set('debug', true);

// configured mongoose instance exported
// making it available for use in app
module.exports = connection;