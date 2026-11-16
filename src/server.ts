import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routehandler from "./routes/route";
import config from "./config";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routehandler(req, res);
  },
);

server.listen(config.port, () => {
  console.log(`Yahooo!!! server is Active on ${config.port}`);
});
