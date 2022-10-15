import React from 'react';
import './ingredient.css'
import {IngredientForm} from "../index";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {prices} from "../../constants"

function Ingredient(props) {
    const ingredients = useSelector( (state) => state.burger)
    const price = useSelector( (state) => state.price.price)
    const hasIngredients = ingredients.meat || ingredients.bacon || ingredients.lettuce || ingredients.cheese;
    return (
        <div className="ingredient-section">
            <div className="price">
                Current Price : <span>${price.toFixed(2)}</span>
            </div>
            {Object.keys(ingredients).map((e, i) => (
                    <IngredientForm
                        key={i}
                        name={e}
                        price={prices[e]}
                        quantity={ingredients[e]}
                    />
                )
            )}
            {hasIngredients
                ? <Link to='/order' className="order scale-up-center no-underline">Order</Link>
                : <button className="order" disabled>Order</button>
            }

        </div>
    );
}

export default Ingredient;
