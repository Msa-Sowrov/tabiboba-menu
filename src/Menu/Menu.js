import React, { useEffect } from 'react';
import Latte from '../Latte/Latte';
import MilkTea from '../MilkTea/MilkTea';
import './Menu.css'
const Menu = () => {
   
    return (
        <div className='container'>
            <div className='text-center menu-title'>
                <h1>Tabiboba Menu</h1>
            </div>
            <MilkTea></MilkTea>
            <Latte></Latte>
        </div>
    );
};

export default Menu;