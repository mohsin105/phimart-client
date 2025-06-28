import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import apiClient from '../services/api-client';
import authApiClient from '../services/auth-api-client';

const AddProduct = () => {
    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    const [categories,setCategories] = useState([]);
    const [productId,setProductId] =useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [previewImage, setPreviewImage]= useState([]);
    const [images,setImages] = useState([]);

    useEffect(()=>{
        apiClient.get('/categories/')
        .then(res=>{
            // console.log(res.data);
            setCategories(res.data);
        })
    }
    ,[]);

    const handleProductAdd=async(data)=>{
        // console.log("Function adou call hoy?")
        try {
            const response=await authApiClient.post('/products/',data);
            console.log(response.data);
            setProductId(response.data.id);
        } catch (error) {
            console.log("Error while Adding product: ",error);
        }
    };

    const handleImageChange=(e)=>{
        const files=Array.from(e.target.files);
        setPreviewImage(files.map((file)=> URL.createObjectURL(file)));
        setImages(files);
    };

    const handleUploadImage=async()=>{
        if(!images.length) return alert("Please Select Images");
        setIsLoading(true);
        try {
            for (const image of images)
            {
                const formData= new FormData();
                formData.append('image',image);
                authApiClient.post(`/products/${productId}/images/`,formData);
            }
            alert("Image Updated Successfully!!!");
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    };

    return (
        <div>
            {!productId? (
                
            <form 
                action=""
                onSubmit={handleSubmit(handleProductAdd)}
                className='form'>
                <div>
                    <label htmlFor="">Product Name</label>
                    <input
                        {...register("name",{required:'Product Name is required'})}
                        type="text"
                        id='name'
                        placeholder='Product Name'
                        className='input input-bordered' />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input
                        {...register("description",{required:"Product Description is required"})}
                        type="text"
                        id='description'
                        placeholder=''
                        className='input input-bordered' />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input
                        {...register("price",{
                            required:"This field is required",
                            validate:(value)=>{
                                const parsedValue=parseFloat(value);
                                return !isNaN(parsedValue) || "Enter a Number"
                            }})}
                        id='price'
                        type="text"
                        placeholder=''
                        className='input input-bordered' />
                </div>
                <div>
                    <label htmlFor="">Stock Quantity</label>
                    <input
                        {...register("stock",{required:'This field is required'})}
                        type="text"
                        placeholder=''
                        className='input input-bordered' />
                </div>
                <div>
                    <label htmlFor="">Category</label>
                    <select 
                        {...register('category',{required:"Category is required"})}
                        name="category" 
                        id='category'
                        className='select select-bordered'>
                        <option value="">Select a category</option>
                        {categories.map((category)=>(
                            <option 
                                value={category.id} 
                                key={category.id}>{category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category && (
                        <p className="text-red-500 text-xs">Category is required</p>
                    )}
                </div>
                <button 
                    type='submit'
                    className='btn btn-accent'>Add Product</button>
            </form>
            ) : (
                <div>
                    <h3 className='text-lg font-medium mb-2'>Image Form</h3>
                    <input 
                        type="file"
                        multiple
                        accept='images/*'
                        className='file-input file-input-bordered' 
                        onChange={handleImageChange}/>
                    
                    {previewImage.length>0 && (
                        <div className='flex gap-2 mt-2'>
                            {previewImage.map((src,indx)=>(
                                <img 
                                    src={src} 
                                    alt="preview Image" 
                                    key={indx} 
                                    className='size-16 rounded-md object-cover'/>
                            ))}
                        </div>
                    )}
                    <button
                        onClick={handleUploadImage}
                        disabled={isLoading}
                        className='btn btn-primary'>{isLoading? "Uploading Images..." : "Add Image"}</button>
                </div>
            )}
        </div>
    );
};

export default AddProduct;