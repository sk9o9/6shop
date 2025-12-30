import React, { useEffect, useState } from "react";
import FrontEndLayout from "../../layout/FrontEndLayout";
import { useParams } from "react-router";

function Detail() {
  let { id } = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((a) => a.json())
      .then((b) => setData(b));
  }, []);
  return (
    <FrontEndLayout>
      <section>
        <div className="container mx-auto">
          <h2>{data.title}</h2>
          <img src={data.thumbnail} alt="" />
        </div>
      </section>
    </FrontEndLayout>
  );
}

export default Detail;
