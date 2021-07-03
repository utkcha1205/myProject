import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCardButton = props =>{
    const cartContext = useContext(CartContext)

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        console.log(curNumber, "reduce", item)
       return curNumber + item.amount 
    },0)

    return(
         <button className={classes.button} onClick={props.onClick} >
             <span className={classes.icon}><CartIcon /></span>
             <span>Your Cart</span>
             <span className={classes.badge}>{numberOfCartItems}</span>
         </button>
     )
 }
export default HeaderCardButton;