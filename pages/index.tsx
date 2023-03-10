import React from "react";
import { json } from "stream/consumers";
import { HeroBanner, FooterBanner, Product } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }: { products: any; bannerData: any }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {bannerData && (
        <FooterBanner {...bannerData[0]} />
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
