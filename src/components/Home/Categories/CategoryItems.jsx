import { FaAngleRight } from "react-icons/fa";

const CategoryItems = ({category,index}) => {
    const gradients = [
        "from-pink-100 to-blue-100",
        "from-blue-100 to-purple-100",
        "from-purple-100 to-pink-100",
        "from-pink-100 to-blue-100",
  ];
    return (
        <div className={`rounded-xl shadow-sm bg-gradient-to-br ${gradients[index%gradients.length]} p-5`}>
            <div className="">
                <div className="flex justify-between">
                    <div className="h-10 w-10 bg-pink-500 text-white rounded-full flex items-center justify-center">{category.name.charAt(0)} </div>
                    <span className="text-sm text-gray-600 bg-white/70 px-2 py-1 rounded-full flex items-center justify-center">{category.product_count} Items</span>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <button className="flex items-center">Explore <FaAngleRight/></button>
            </div>
        </div>
    );
};

export default CategoryItems;