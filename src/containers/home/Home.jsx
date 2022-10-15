import React from 'react';
import './home.css'
import {Burger, Ingredient} from "../../components";
import {useState} from "react";

function Home(props) {
    return (
        <div>
            <Burger/>
            <Ingredient/>
        </div>
    );
}

export default Home;
