import React from 'react';
import {OrderItem} from "../../components";
import './allOrders.css'
import {useSelector} from 'react-redux';

function AllOrders(props) {
    const orderList = useSelector( state => state.orders.orders)

    return (
        <div className={'order-container'}>
            <div className="order-box">
                <h2>All Orders</h2>
                {orderList.map((order, ind) => (<OrderItem key={ind} order={order}/>))}
            </div>
        </div>
    );
}

export default AllOrders;
