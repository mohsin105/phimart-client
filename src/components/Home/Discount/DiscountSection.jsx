
import bgImg from "../../../assets/images/banner-image-bg-1.jpg"
import bannerImg from "../../../assets/images/banner-image3.png"
const DiscountSection = () => {
    return (
        <section className=" h-[600px] w-full flex justify-center items-center bg-cover bg-center px-4 md:px-8 py-8"
        style={{backgroundImage:`url(${bgImg})`}} 
        >

            <div className="container flex flex-col md:flex-row items-center justify-around "
            >
                {/* Left Content */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={bannerImg} alt="" className="max-w-full md:max-w-md"/>
                </div>
                {/* Right Image */}
                
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">30% Discount on All Items</h1>
                    <p className="p-2">Some subtitle</p>
                    {/* CountDown Timer */}
                    <div className="flex justify-center md:justify-start gap-x-4 py-4">
                        <div>
                            <span>25</span><br />
                            Days
                        </div>
                        <div>
                            <span>16</span><br />
                            Hours
                        </div>
                        <div>
                            <span>48</span><br />
                            Minutes
                        </div>
                        <div>
                            <span>53</span><br />
                            Seconds
                        </div>
                        
                    </div>
                    <button className='btn btn-secondary px-6 py-3 rounded-full'>Shop Product</button>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;