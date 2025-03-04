import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Header = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <header className="w-[95%] mx-auto container py-5">
      {loading ? (
        <p className="text-center text-xl font-bold mt-20">Yuklanmoqda...</p>
      ) : (
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex items-center justify-center">
             <Link to={`/product-info/${product?.id}`}>
             <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[90%] md:w-[70%] lg:w-[50%] h-[200px] md:h-[300px] lg:h-[400px] object-contain mx-auto"
              />
             </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </header>
  );
};

export default Header;
