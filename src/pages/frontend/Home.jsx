import React from "react";
import FrontEndLayout from "../../layout/FrontEndLayout";
import { productList } from "../../Data";
import { Link } from "react-router-dom";
import ProductsByCategory from "../../components/ProductsByCategory";

function Home() {
  return (
    <>
      <FrontEndLayout>
        <section>
          <div className="container mx-auto">
            <h2>All Products</h2>
            <div className="grid grid-cols-4 gap-5">
              {productList.map((a) => (
                <div className="shadow p-2 border">
                  <Link to={`/detail/${a.id}`}>
                    <img src={a.thumbnail} alt="" />
                    <p>{a.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProductsByCategory slug='beauty' />
        <ProductsByCategory slug='furniture'/>
      </FrontEndLayout>
    </>
  );
}

export default Home;
