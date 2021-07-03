import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCardButton = props =>{
    const cartContext = useContext(CartContext)
    const {items} = {...cartContext}
    const  [isButtonHighlight , setIsButtonHighLight] = useState(false)

    useEffect(() => {
        if(items.length > 0){
            setIsButtonHighLight(true)
        }
        const timer = setTimeout(() => {
            setIsButtonHighLight(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items]);

    const numberOfCartItems = items.reduce((curNumber, item) => {
       return curNumber + item.amount 
    },0)

    const buttonClasses = `${classes.button} ${isButtonHighlight ? classes.bump : ''}`

    return(
         <button className={buttonClasses} onClick={props.onClick} >
             <span className={classes.icon}><CartIcon /></span>
             <span>Your Cart</span>
             <span className={classes.badge}>{numberOfCartItems}</span>
         </button>
     )
 }
export default HeaderCardButton;