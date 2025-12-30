import React, { useEffect, useState } from "react";
import FrontEndLayout from "../../layout/FrontEndLayout";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Category() {
  let { catId } = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${catId}`)
      .then((a) => a.json())
      .then((b) => setData(b.products));
  }, []);
  return (
    <>
      <FrontEndLayout>
        <section className="container mx-auto">
          <h2>category {catId}</h2>
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
        </section>
      </FrontEndLayout>
    </>
  );
}

export default Category;
