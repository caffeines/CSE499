const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

//? AUTH CLIENT
const AUTH_SERVER_URI = '127.0.0.1:50051';

const packageDefinition = protoLoader.loadSync('auth.proto', { includeDirs: ['gRPC/proto'] });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const authClient = new protoDescriptor.auth.AuthService(AUTH_SERVER_URI, grpc.credentials.createInsecure());


module.exports = {
  authClient,
};