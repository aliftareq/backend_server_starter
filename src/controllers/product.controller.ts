import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  //GET, POST, PUT, DELETE

  if (url === "/products" && method === "GET") {
    const products = [
      {
        id: 1,
        name: "Product-1",
        price: 20,
      },
      {
        id: 2,
        name: "Product-2",
        price: 30,
      },
      {
        id: 3,
        name: "Product-3",
        price: 40,
      },
    ];
    productService()
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
