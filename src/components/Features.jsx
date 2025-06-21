import { BsShieldLock } from "react-icons/bs";
import { FaShoppingCart, FaTags } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Features = () => {
    const features = [
        {
        icon: <FaShoppingCart className="text-red-400 text-4xl" />,
        title: "Free Delivery",
        description:
            "Get your orders delivered at no extra cost, fast and hassle-free.",
        },
        {
        icon: <MdVerified className="text-red-400 text-4xl" />,
        title: "Quality Guarantee",
        description:
            "We ensure top-notch quality for every product you purchase.",
        },
        {
        icon: <FaTags className="text-red-400 text-4xl" />,
        title: "Daily Offers",
        description: "Exclusive discounts and special deals available every day.",
        },
        {
        icon: <BsShieldLock className="text-red-400 text-4xl" />,
        title: "100% Secure Payment",
        description:
            "Your payment information is encrypted and completely secure.",
        },
    ];
    return (
        <section className="px-8 py-15">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {features.map((feature,index)=>(

                <div key={index} className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-xl m-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Features;