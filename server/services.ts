import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { IUsersServer } from '../proto/users_grpc_pb';
import { User, UsersList } from '../proto/users_pb'; // Ensure you import UsersList from the correct file
import { users } from './db';

export class UsersServer implements IUsersServer {
  getUsers(call: ServerUnaryCall<Empty>, callback: sendUnaryData<UsersList>): void {
    console.log(`getUsers: fetching all users.`);

    try {
      // Create a new UsersList message
      const usersList = new UsersList();

      usersList.setUsersList(users);
      // Add each user to the UsersList
      // users.forEach(user => {
      //   usersList.addUsers(user); // Add each User to the UsersList
      // });

      // Send the UsersList to the client
      callback(null, usersList);
      usersList.clearUsersList();
    } catch (error) {
      console.error(`getUsers: error while fetching users: ${error.message}`);

      // callback({
      //   code: grpc.status.INTERNAL,
      //   details: 'Internal server error'
      // }, null);
    }
  }
}
