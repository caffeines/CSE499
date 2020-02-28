const mongoose = require('mongoose');
const { envVariableChecker } = require('../lib/utils');

const values = ['MONGODB_URL'];
envVariableChecker(values);

let dbURL;
if (process.env.NODE_ENV === 'test') {
  dbURL = process.env.MONGODB_TEST_URL;
}
else dbURL = process.env.MONGODB_URL;

const mongo = () => {
  mongoose.connect(dbURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  mongoose.connection.on('connected', () => {
    if (process.env.NODE_ENV !== 'test') console.log('Mongoose connected successfully');
  });

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection is disconnected due to application termination');
      process.exit(0);
    });
  });
};
module.exports = mongo;
