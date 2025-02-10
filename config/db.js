const mongoose = require('mongoose');
const url = process.env.mongodbURL || 'mongodb://127.0.0.1:27017/salsal';

const connectToDB = async () => {
    try {
        if (mongoose.connections[0]?.readyState) {
            console.log('Already connected to the database');
            return false;
        } else {
            await mongoose.connect(url);
            console.log('Connection has been successful:', mongoose.connections[0]?.readyState);
        }
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
    }
};

export default connectToDB;
/////////////////////////////////////////////////