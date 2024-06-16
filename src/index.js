import $ from "jquery";
console.log($)
import './main.css';
import image from './assets/galaxy.jpg';
const pict = document.createElement('img');
pict.setAttribute('src', image);
document.querySelector('body').appendChild(pict);
