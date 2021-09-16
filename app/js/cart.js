const cart = () => {
  const sliders = document.querySelector('.category-sliders'),
    cartCount = document.querySelector('.header-cart-count');

  let elements = document.querySelectorAll('.category-slider-item'),
    cart = {};

  const calc = () => {
    let sum = 0;
    let keys = Object.keys(cart);
    keys.forEach(key=>{
      sum += +cart[key];
    })
    cartCount.textContent = sum.toFixed(2);
  };

  const render = () => {
    elements = document.querySelectorAll('.category-slider-item');
      elements.forEach(elem => {
        if(cart.hasOwnProperty(elem.getAttribute('data-id'))){
          elem.classList.add('category-slider-item-active');
        } else {
          elem.classList.remove('category-slider-item-active');
        }
      })
    calc();
  };

  const getItemsList = () => {
    if (localStorage.getItem('delivery')) {
      cart = JSON.parse(localStorage.getItem('delivery'));
      render();
    } 
  };
  getItemsList();

  sliders.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains('category-slider-btn')) {
      e.preventDefault();
      const targetId = target.closest('.category-slider-item').getAttribute('data-id');
      const price = target.closest('.category-slider-item').querySelector('.price-count').textContent;
      if (cart.hasOwnProperty(targetId)){
        delete cart[targetId];
      } else {
        cart[targetId] = price;
      }
      localStorage.setItem('delivery', JSON.stringify(cart));
      render();
    }
  });


};
cart();