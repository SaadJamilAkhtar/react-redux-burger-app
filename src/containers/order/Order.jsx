import React from 'react';
import './order.css'
import {OrderForm, Burger} from "../../components";

function Order(props) {
    return (
        <div>
            <Burger/>
            <OrderForm/>
        </div>
    );
}

export default Order;
