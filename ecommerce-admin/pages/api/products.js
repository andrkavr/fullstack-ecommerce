import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;

  if (method === "POST") {
    const { title, description, price } = req.body;
    await mongooseConnect();
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
}
