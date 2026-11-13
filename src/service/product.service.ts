import fs from "fs";
import path from "path";

const filepath = path.join(process.cwd() + "./src/database/db.json");

export const productService = () => {
  //   console.log(process.cwd());
  //   console.log(filepath);
  const result = fs.readFileSync(filepath);
  console.log(result);
};

