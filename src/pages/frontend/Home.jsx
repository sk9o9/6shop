import React, { useEffect, useState } from "react";
import FrontEndLayout from "../../layout/FrontEndLayout";
import { Link } from "react-router-dom";
import ProductsByCategory from "../../components/ProductsByCategory";

function Home() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((a) => a.json())
      .then((b) => setData(b.products));
  }, []);
  return (
    <>
      <FrontEndLayout>
        <section>
          <div className="container mx-auto">
            <h2>All Products</h2>
            <div className="grid grid-cols-4 gap-5">
              {data.map((a) => (
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
        <ProductsByCategory slug="beauty" />
        <ProductsByCategory slug="furniture" />
      </FrontEndLayout>
    </>
  );
}

export default Home;
