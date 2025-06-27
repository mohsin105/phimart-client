import  { createContext } from 'react';
import useCart from '../hooks/useCart';

const CartContext = createContext();
export const CartProvider=({children}) => {
    const allValues=useCart();
    // console.log(allValues);
    return (
        <div>
            <CartContext.Provider value={allValues}>{children}</CartContext.Provider>
        </div>
    );
};

export default CartContext;