/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card z-50">
      <Link href={`/product/${product.slug}`}>
        <a>
          <Image
          width={1200}
          height={900}
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>M{product.price}.00</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
