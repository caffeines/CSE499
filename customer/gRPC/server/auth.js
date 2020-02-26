const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const EventEmitter = require('events');
const chalk = require('chalk');
const userStream = new EventEmitter();

const createLogic = require('../../logic/create');
const findLogic = require('../../logic/find');

const AUTH_SERVER_URI = '0.0.0.0:50051';

const packageDefinition = protoLoader.loadSync('auth.proto', { includeDirs: ['gRPC/proto'] });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
server.bind(AUTH_SERVER_URI, grpc.ServerCredentials.createInsecure());

const createUser = async (call, cb) => {
  try {
    const { id, msg } = call.request;
    const username = JSON.parse(msg);
    const { createUser } = createLogic;
    const { findUserByUsername } = findLogic;
    let user = await findUserByUsername(username);
    if (!user) {
      user = await createUser({username});
    }
    userStream.emit('new_user', user);
    const userMsg = { id, msg: JSON.stringify(user) }    
    cb(null, userMsg);
  } catch (err) {
    console.error(err);
    cb({
      code: grpc.status.INTERNAL,
      details: 'Something went wrong'
    });
  }
}

const watchNewUser = (stream) => {
  userStream.on('new_user', (user) => {
    stream.write(user);
  });
}

server.addService(protoDescriptor.auth.AuthService.service, {
  createUser,
  watchNewUser,
});

const run = () => {
  server.start();
  console.log(chalk.blue(`auth gRPC server is running on ${AUTH_SERVER_URI}`));
}
module.exports = run;