import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Carousel from './BlenderPage/carosoul.js';
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import GF from './BlenderPage/giftcard.js';
import RegistryBTN from './BlenderPage/registery.js';
import Returns from './BlenderPage/returnPolicy.js';
import registerServiceWorker from './registerServiceWorker';
import ShopBtns from './BlenderPage/addToCart.js';
import Title from './BlenderPage/blenderTitle.js';
import Dropdown from './BlenderPage/dropDown.js';
import Qty from './BlenderPage/qty.js';
import Stars from './BlenderPage/starRating';
ReactDOM.render(<Stars />, document.getElementById('stars'));
ReactDOM.render(<Qty />, document.getElementById('qty'));
ReactDOM.render(<Dropdown />, document.getElementById('drpdn'));
ReactDOM.render(<GF />, document.getElementById('giftcard'));
ReactDOM.render(<RegistryBTN />, document.getElementById('add2register'));
ReactDOM.render(<Returns />, document.getElementById('returns'));
ReactDOM.render(<ShopBtns />, document.getElementById('shopbtns'));
ReactDOM.render(<Title />, document.getElementById('title_price'));
const App = () => (<div><Carousel /> </div>);
render(<App />, document.getElementById("root"));
registerServiceWorker();
