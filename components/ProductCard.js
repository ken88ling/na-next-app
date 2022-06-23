import React from "react";
import Link from "next/link";
export default function ProductCard({ product }) {
  return (
      <div className="m-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
          <Link
              as={`/product/${product.attributes.slug}`}
              href="/product/[slug]"
            >
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.attributes.title}
              </a>
            </Link>
          </h3>
        </div>
      </div>
  );
}
