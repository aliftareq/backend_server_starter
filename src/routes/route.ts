import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routehandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "this route is active" }));
  } else if (url?.startsWith("/products")) {
    //handover the request to controller
    productController(req, res);
  } else {
    //   console.log("This route is not defined");
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This response from undefined route" }));
  }
};

export default routehandler;
