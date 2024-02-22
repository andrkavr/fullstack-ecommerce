import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const createProduct = async (ev) => {
    ev.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
  };

  return (
    <Layout>
      <h1>New Product</h1>
      <form onSubmit={createProduct}>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price (in USD)</label>
        <input
          type="number"
          placeholder="price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="btn-primary">
          Save product
        </button>
      </form>
    </Layout>
  );
}
