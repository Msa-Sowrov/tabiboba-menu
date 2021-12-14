import React, { useEffect } from 'react';
import Fruit from '../Fruit/Fruit';
import Honey from '../Honey/Honey';
import Latte from '../Latte/Latte';
import Milkshake from '../Milkshake/Milkshake';
import MilkTea from '../MilkTea/MilkTea';
import Snacks from '../Snacks/Snacks';
import './Menu.css'
const Menu = () => {
   
    return (
        <div className='container'>
            <div className='text-center menu-title'>
                <h1>Tabiboba Menu</h1>
                <img className='img-fluid' src="https://i.ibb.co/0C2SV2W/pngegg-43-1.png" alt="" />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <MilkTea></MilkTea>
                    <Honey></Honey>
                </div>
                <div className="col-md-4">
                    <Latte></Latte>
                    <Snacks></Snacks>
                </div>
                <div className="col-md-4">
                    <Milkshake></Milkshake>
                    <Fruit></Fruit>
                </div>
            </div>
        </div>
    );
};

export default Menu;