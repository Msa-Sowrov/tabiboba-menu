import React, { useEffect } from 'react';
import Fresh from '../Fresh/Fresh';
import Fruit from '../Fruit/Fruit';
import Honey from '../Honey/Honey';
import Latte from '../Latte/Latte';
import Milkshake from '../Milkshake/Milkshake';
import MilkTea from '../MilkTea/MilkTea';
import Orginal from '../Orginal/Orginal';
import Snacks from '../Snacks/Snacks';
import './Menu.css'
const Menu = () => {
   
    return (
        <div className='container menu'>
            <div className='text-center menu-title'>
                <h1>Tabiboba Menu</h1>
                <img className='img-fluid' src="https://i.ibb.co/0C2SV2W/pngegg-43-1.png" alt="" />
            </div>
            <div className='row select'>

                <div className="col-md-3 col-4">
                <a href="#milk">
                    <h2>Milk Tea</h2>
                </a>
                </div>
                <div className="col-md-3 col-4">
                <a href="#latte">
                    <h2>Latte</h2>
                </a>
                </div>
                <div className="col-md-3 col-4">
                <a href="#milkshake">
                    <h2>Milkshake</h2>
                </a>
                </div>
                <div className="col-md-3 col-4">
                    <a href="#fruit">
                    <h2>fruit tea</h2>
                    </a>
                </div>
                <div className="col-md-3 col-4">
                    <a href="#orginal">
                    <h2>Orginal Tea</h2>
                    </a>
                </div>
                <div className="col-md-3 col-4">
                    <a href="#fresh">
                    <h2>Fresh Taro</h2>
                    </a>
                </div>
                <div className="col-md-3 col-4">
                    <a href="#honey">
                    <h2>Honey</h2>
                    </a>
                </div>
                <div className="col-md-3 col-4">
                    <a href="#snacks">
                    <h2>Snacks</h2>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div id='milk'>
                    <MilkTea></MilkTea>
                    </div>
                    <div id="honey">
                    <Honey></Honey>
                    </div>
                    <div id='fresh'> 
                    <Fresh></Fresh>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id='latte'>
                    <Latte></Latte>
                    </div>
                    <div id='snacks'>
                    <Snacks></Snacks>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id='milkshake'>
                    <Milkshake></Milkshake>
                    </div>
                    <div  id="fruit">
                    <Fruit></Fruit>
                    </div>
                    <div id='orginal'>
                    <Orginal></Orginal>
                    </div>
                </div>
            </div>
            <div className='arrow'>
                <a href="#">
                    <i class="fas fa-arrow-up"></i>
                </a>
            </div>
        </div>
    );
};

export default Menu;