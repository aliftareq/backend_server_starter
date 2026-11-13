import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routehandler from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routehandler(req, res);
  },
);

server.listen(5000, () => {
  console.log("Yahooo!!! server is Active");
});
