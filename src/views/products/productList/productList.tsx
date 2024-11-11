import React from "react";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onOpenModal,
}) => (
  <div>
    {products.map((product) => (
      <div key={product.id} className="flex border p-2 justify-between">
        <div className="flex">
          <div>{product.id}</div>. {product.name}
        </div>
        <button onClick={() => onOpenModal(product)}>Details</button>
      </div>
    ))}
  </div>
);
