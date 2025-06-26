import defaultImage from "../../assets/default_product.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const ProductImageGallery = ({images,productName}) => {
    const displayImages=images.length>0? images : [{image:defaultImage}] ;
    const {thumbsSwiper}=useState(null);
    return (
        <div className="rounded-lg overflow-hidden">
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{
                    swiper:thumbsSwiper && !thumbsSwiper.destroyed? thumbsSwiper: null
      }}>
                {displayImages.map((imgObj,index)=>(
                    <SwiperSlide key={index}>
                        <img 
                            src={imgObj.image} 
                            alt={productName}
                            className='w-full h-full object-contain' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductImageGallery;