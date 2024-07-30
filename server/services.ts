import { ServerWritableStream } from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { IUsersServer } from '../proto/users_grpc_pb';
import { users } from './db';

export class UsersServer implements IUsersServer {
  getUsers(call: ServerWritableStream<Empty>) {
    console.log(`getUsers: streaming all users.`);

    // Flag to indicate if an error has occurred
    let hasErrorOccurred = false;

    // Function to handle the streaming of users
    const streamUsers = () => {
      try {
        for (const user of users) {
          if (hasErrorOccurred) {
            // Stop sending more users if an error has occurred
            return;
          }
          // console.log(`getUsers: sending user ${user.getName()}`);
          call.write(user);
        }
        call.end();
      } catch (error) {
        console.error(`getUsers: error while streaming users: ${error.message}`);
        call.destroy(new Error('Internal server error'));
      }
    };

    // Attach an error handler to the call object
    call.on('error', error => {
      console.error(`getUsers: client error: ${error.message}`);
      hasErrorOccurred = true;
      // Handle any additional cleanup or error logging if needed
    });

    // Start streaming users
    streamUsers();
  }
}
