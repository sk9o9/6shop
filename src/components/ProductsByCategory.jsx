import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductsByCategory(props) {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${props.slug}`)
      .then((a) => a.json())
      .then((b) => setData(b.products));
  }, []);
  return (
    <section className="container mx-auto">
      <h2>category {props.slug}</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((a) => (
          <SwiperSlide>
            <div className="shadow p-2 border">
              <Link to={`/detail/${a.id}`}>
                <img src={a.thumbnail} alt="" />
                <p>{a.title}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductsByCategory;
