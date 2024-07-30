import { Server, ServerCredentials } from "grpc";
import { UsersService } from "../proto/users_grpc_pb";
import { UsersServer } from "./services";

const server = new Server({
    'grpc.max_receive_message_length': 10 * 1024 * 1024,
    'grpc.max_send_message_length': 10 * 1024 * 1024,
});
server.addService(UsersService, new UsersServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();
