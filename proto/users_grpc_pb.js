// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UsersList(arg) {
  if (!(arg instanceof users_pb.UsersList)) {
    throw new Error('Expected argument of type users.UsersList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UsersList(buffer_arg) {
  return users_pb.UsersList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  getUsers: {
    path: '/users.Users/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: users_pb.UsersList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_users_UsersList,
    responseDeserialize: deserialize_users_UsersList,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
