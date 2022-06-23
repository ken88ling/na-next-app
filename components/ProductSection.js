import React from "react";
import ProductCard from "./ProductCard";


const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/2217/5179/products/medium_90d91e7c-2994-455c-8b8f-d05c937d4704_550x550.jpg?v=1629733389",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function ProductSection({ product }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {product?.map((productItem) => (
            <ProductCard
              key={productItem.attributes.slug}
              product={productItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
