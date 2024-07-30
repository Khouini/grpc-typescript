// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IUsersService_IGetUsers;
}

interface IUsersService_IGetUsers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, users_pb.UsersList> {
    path: string; // "/users.Users/GetUsers"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.UsersList>;
    responseDeserialize: grpc.deserialize<users_pb.UsersList>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    getUsers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, users_pb.UsersList>;
}

export interface IUsersClient {
    getUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UsersList) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersList) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersList) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UsersList) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersList) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersList) => void): grpc.ClientUnaryCall;
}
