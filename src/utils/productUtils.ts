import { Product } from "@/types";

export const filterProducts = (
  products: Product[],
  searchTerm: string
): Product[] => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortProducts = (
  products: Product[],
  sortBy: "name" | "price"
): Product[] => {
  return [...products].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return +a.price - +b.price;
    }
  });
};
