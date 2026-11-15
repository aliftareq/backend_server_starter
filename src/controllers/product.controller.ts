import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  //GET, POST, PUT, DELETE

  // console.log(url);  -> /products/1 -> []
  const urlParams = url?.split("/");
  // console.log(urlParams); ["","products","1"]
  const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
  // console.log(id);

  if (url === "/products" && method === "GET") {
    const products = productService();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products retrived Successfully",
        data: products,
      }),
    );
  }
  
};

export default productController;
