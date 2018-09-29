import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Carousel from './BlenderPage/carosoul.js';
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from './BlenderPage/blenderTitle.js';
import Price from './BlenderPage/price.js';
import GF from './BlenderPage/giftcard.js';
import ShareBTN from './BlenderPage/share.js';
import ListBTN from './BlenderPage/addList';
import RegistryBTN from './BlenderPage/registery.js';
import GF1 from './BlenderPage/giftcard.1.js';
import Returns from './BlenderPage/returnPolicy.js';
import ReturnPolicy from './BlenderPage/returnPolicy.1.js';
import registerServiceWorker from './registerServiceWorker';
import Features from './BlenderPage/highlights.js';
import ADDbtn from './BlenderPage/addToCart.js';
import Pro from './BlenderPage/topProRated.js';
import Con from './BlenderPage/topConRated.js'
import GooReview from './BlenderPage/topProWords.js';
import BadReview from './BlenderPage/topConWords.js';
import INSTOREbtn from './BlenderPage/pickupInStore.js';
import Stars from './BlenderPage/starRating.js';
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Price />, document.getElementById('price'));
ReactDOM.render(<GF />, document.getElementById('giftcard'));
ReactDOM.render(<RegistryBTN />, document.getElementById('add2register'));
ReactDOM.render(<Stars />, document.getElementById('stars'));
ReactDOM.render(<Con />, document.getElementById('con'));
ReactDOM.render(<Pro />, document.getElementById('pro'));
ReactDOM.render(<GooReview />, document.getElementById('gooreview'));
ReactDOM.render(<BadReview />, document.getElementById('badreview'));
ReactDOM.render(<ListBTN />, document.getElementById('add2list'));
ReactDOM.render(<ShareBTN />, document.getElementById('share'));
ReactDOM.render(<GF1 />, document.getElementById('giftcard1'));
ReactDOM.render(<Features />, document.getElementById('features'));
ReactDOM.render(<Returns />, document.getElementById('return'));
ReactDOM.render(<ReturnPolicy />, document.getElementById('returnpolicy'));
ReactDOM.render(<ADDbtn />, document.getElementById('add2cart'));
ReactDOM.render(<INSTOREbtn />, document.getElementById('pickMEup'));
const App = () => (<div><Carousel /> </div>);
render(<App />, document.getElementById("root"));
registerServiceWorker();
