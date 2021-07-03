import React from "react";
import MealImg from '../../assets/meals.jpg'
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>FoodPhobia</h1>
                <HeaderCardButton  onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={MealImg} alt="A table full of food" />
            </div>
        </React.Fragment>
    )
};

export default Header; 