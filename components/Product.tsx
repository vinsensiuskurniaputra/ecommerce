import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && image[0]).url()}
            width={250}
            height={250}
            className='product-image'
          />
        </div>
        <p>{name}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default Product;
