import React from 'react';
import './ingredient-form.css'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../store/burgerSlice'
import { incrementPrice, decrementPrice } from '../../store/priceSlice'

function IngredientForm(props) {
    const dispatch = useDispatch();

    const incrementIngredient = () => {
        dispatch(increment(props.name))
        dispatch(incrementPrice(props.price))

    }

    const decrementIngredient = () => {
        dispatch(decrement(props.name));
        dispatch(decrementPrice(props.price))
    }
    return (
        <div className="update-ingredient">
            <div className="ingredient-title">{props.name}</div>
            <div className="button-set">
                {props.quantity > 0
                    ? <button className="dec-button" onClick={decrementIngredient}>Less</button>
                    : <button className="dec-button" disabled>Less</button>}
                <button className="inc-button" onClick={incrementIngredient}>More</button>
            </div>
        </div>
    );
}

export default IngredientForm;
