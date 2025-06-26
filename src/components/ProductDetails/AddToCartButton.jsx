import React, { useState } from 'react';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import useCartContext from '../../hooks/useCartContext';

const AddToCartButton = ({product}) => {
    const [quantity,setQuantity] =useState(1);
    const [isAdding,setIsAdding]=useState(false);
    const [isAdded,setIsAdded] = useState(false);
    const {addCartItems} = useCartContext();
    const increaseQuantity=()=>{
        if(quantity<product.stock)
        {
            setQuantity(quantity+1);
        }
    };
    const dicreaseQuantity=()=>{
        if(quantity>1)
        {
            setQuantity(quantity-1);
        }
    };
    const addToCart=async()=>{
        setIsAdding(true);
        try {
            await addCartItems(product.id,quantity);
            setIsAdded(true);
            setIsAdding(false);
        } catch (error) {
            setIsAdding(false);
            console.log(error);
        }
    };
    return (
        <div>
            <div>
                <button 
                    onClick={dicreaseQuantity}
                    disabled={quantity===0}><FaMinus/></button>
                <input 
                    type="number"
                    value={quantity}
                    min={1}
                    max={product.stock}
                    className='input input-bordered' />
                <button 
                    onClick={increaseQuantity}
                    disabled={quantity>=product.stock}><FaPlus/></button>
            </div>
            <div>
                <button onClick={addToCart}><span><FaShoppingCart/>Add To Cart</span></button>
            </div>
        </div>
    );
};

export default AddToCartButton;