import React from "react";
import { productList } from "../Data";
import { Link } from "react-router-dom";

function ProductsByCategory(props) {
  let filter = productList.filter((a) => a.category == props.slug);
  return (
    <div>
      <section className="container mx-auto">
        <h2>category {props.slug}</h2>
        <div className="grid grid-cols-4 gap-5">
          {filter.slice(0, 4).map((a) => (
            <div className="shadow p-2 border">
              <Link to={`/detail/${a.id}`}>
                <img src={a.thumbnail} alt="" />
                <p>{a.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsByCategory;
