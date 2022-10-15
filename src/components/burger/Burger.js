import React from 'react';
import './burger.css'
import {useSelector} from 'react-redux';


function Burger(props) {
    const ingredients = useSelector( (state) => state.burger)
    const has_ingredients = ingredients.meat || ingredients.bacon || ingredients.lettuce || ingredients.cheese
    return (
        <div className='burger'>
            <div className="top-bun"></div>
            {!has_ingredients && (<div className='empty'>No Ingredients added</div>)}

            {
                [...Array(ingredients.lettuce)].map((e, i) => <div key={i} className="lettuce"></div>)
            }
            {
                [...Array(ingredients.bacon)].map((e, i) => <div key={i} className="bacon"></div>)
            }
            {
                [...Array(ingredients.cheese)].map((e, i) => <div key={i} className="cheese"></div>)
            }
            {
                [...Array(ingredients.meat)].map((e, i) => <div key={i} className="meat"></div>)
            }
            <div className="bottom-bun"></div>
        </div>
    );
}

export default Burger;
