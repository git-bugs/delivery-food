import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
    let catalogSlider;

  const hideTabContent = () => {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  };

  const catalogSliderDestroy = () => {
    catalogSlider.destroy();
    catalogSlider = null;
  };

  const showTabContent = (i = 0) => {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
    catalogSliderInit(content[i].getAttribute('data-class'))
  };

  const catalogSliderInit = (item) => {
    catalogSlider = new Swiper(item, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev'
      },
      breakpoints: {
        1300: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        770: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }
    });
  };


  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) && !target.classList.contains(activeClass.replace(/\./, ''))) {
      catalogSliderDestroy();
      tab.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
tabs('.catalog-category-box', '.catalog-category', '.category-slider', 'catalog-category-active');

