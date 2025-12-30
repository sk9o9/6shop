import React from "react";
import FrontEndLayout from "../../layout/FrontEndLayout";
import { useParams } from "react-router";
import { productList } from "../../Data";

function Detail() {
  let { id } = useParams();
  let find = productList.find((a) => a.id == id);
  return (
    <FrontEndLayout>
      <section>
        <div className="container mx-auto">
          <h2>{find.title}</h2>
          <img src={find.thumbnail} alt="" />
        </div>
      </section>
    </FrontEndLayout>
  );
}

export default Detail;
