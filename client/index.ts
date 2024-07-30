import { User } from '../proto/users_pb';
import allUsers from './all-users';

async function run() {
  console.time('allHotels');
  const users = await allUsers();
  console.timeEnd('allHotels');
  // print last hotel name
  console.log(`\nLast hotel: ${users[users.length - 1].getName()}`);
  console.log(`\nListing all ${users.length} hotels`);
  // for (const user of users) {
  //   console.log(user.toString());
  // }
}

run();
