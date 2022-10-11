import { Fragment } from "react";
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import Button from '../Layout/HeaderCartButton';
const Header= props=>{
    return (
        <Fragment>
            <header className={classes.header}>
                 <h1>Sheger Delivery</h1>
                 <Button></Button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="table of delicious food!"/>
            </div>
        </Fragment>
    )
}

    export default Header;
