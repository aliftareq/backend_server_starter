import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    if (url === "/" && method === "GET") {
      //   console.log("This is root route");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "this route is active" }));
    } else {
      //   console.log("This route is not defined");
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ message: "This response from undefined route" }),
      );
    }
  },
);

server.listen(5000, () => {
  console.log("Yahooo!!! server is Active");
});
