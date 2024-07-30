import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { User, UsersList } from '../proto/users_pb'; // Import UsersList
import { client } from './utils';

export default function allUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    client.getUsers(new Empty(), (error, response: UsersList) => {
      if (error) {
        return reject(error);
      }
      if (response) {
        const users = response.getUsersList(); // Get the list of users from UsersList
        resolve(users);
      } else {
        reject(new Error('No users returned'));
      }
    });
  });
}
