import fs from "fs";
import path from "path";

const filepath = path.join(process.cwd(), "./src/database/db.json");

export const productService = () => {
  //   console.log(process.cwd());
  //   console.log(filepath);
  const result = fs.readFileSync(filepath, "utf-8");
  //   console.log(result.toString());
  //   console.log(result);
  return JSON.parse(result);
};
