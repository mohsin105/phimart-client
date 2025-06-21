
import bgImg from "../../assets/images/banner-image-bg.jpg"
const CarouselSlide = ({title,subtitle,img}) => {
    return (
        <section className=" h-[650px] w-full flex justify-center items-center bg-cover bg-center px-4 md:px-8"
        style={{backgroundImage:`url(${bgImg})`}} 
        >

            <div className="max-w-6xl flex flex-col md:flex-row items-center justify-around px-8"
            >
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">{title}</h1>
                    <p className="p-2">{subtitle}</p>
                    <button className='btn btn-secondary px-6 py-3 rounded-full'>Shop Product</button>
                </div>
                {/* Right Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img} alt="" className="max-w-full md:max-w-md"/>
                </div>
            </div>
        </section>
    );
};

export default CarouselSlide;