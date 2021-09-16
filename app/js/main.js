import './cart';
import './tabs';
import './cart';
import './anchors';
import './modals';
import './forms';


const burger = () => {
  const btn = document.querySelector('.header-menu-btn'),
    close = document.querySelector('.header-menu-close'),
    menu = document.querySelector('.header-menu');


  btn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('header-menu-active');
  })
};

burger();

