import book from "../../../assets/images/book.png"
import fashion from "../../../assets/images/fashion.png"
import technology from "../../../assets/images/technology.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

const HeroCarousel=()=> {
    const slides = [
    {
      title: "This Fine Print Book Collections",
      subtitle: "Discount available. Grab it now!",
      image: book,
    },
    {
      title: "Exclusive Fashion Collections",
      subtitle: "A specialists label creating luxury essentials!",
      image: fashion,
    },
    {
      title: "Your Digital World, Connected.",
      subtitle: "Explore a range of devices for seamless living.",
      image: technology,
    },
  ];
  return (
    <>
      <Swiper
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
        {slides.map((item,index)=>(
            <SwiperSlide key={index}>
                <CarouselSlide title={item.title} subtitle={item.subtitle} img={item.image}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default HeroCarousel;