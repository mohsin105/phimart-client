import { useEffect, useState } from "react";

import CategoryItems from "./CategoryItems";
import apiClient from "../../../services/api-client";


const Category = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        apiClient.get("/categories")
        .then(res=>setCategories(res.data))
    },[]);
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold">Browse Categories</h2>
                <a href="#"
                className="btn btn-secondary rounded-full text-lg p-6">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {categories.map((category,index)=>(
                    <CategoryItems key={category.id} index={index}category={category}/>
                ))}
            </div>
        </section>
    );
};

export default Category;