
import Features from '../components/Features';
import HeroCarousel from '../components/Home/Carousel/HeroCarousel';
import Category from '../components/Home/Categories/Category';
import DiscountSection from '../components/Home/Discount/DiscountSection';
import Product from '../components/Products/Product';


const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Category/>
            <Product/>
            <DiscountSection/>
        </div>
    );
};

export default Home;