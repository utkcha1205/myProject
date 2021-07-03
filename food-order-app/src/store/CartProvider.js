import CartContext from "./cart-context";

const addItemCartHandler = (item) => {

}

const removeItemCartHandler = (id) => {
    
}

const CartProvider = props => {
    const cartContext = {
        items:[],
        totalAmount:0,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;