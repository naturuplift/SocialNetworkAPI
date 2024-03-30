// Include packages needed for this application
//  to load environment variables from a .env file
import mongoose from 'mongoose';
const { connect, connection } = mongoose;

// connect to the database
const connectionString = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialnetworkDB";

connect(connectionString);

// Use to debug log mongo queries being executed
mongoose.set('debug', true);

// configured mongoose instance exported
// making it available for use in app
export default connection;