
const anch = () => {
  const headerMenu = document.querySelector('.header-menu'),
    footerMenu = document.querySelector('.footer-menu'),
    footerArrow = document.querySelector('.footer-home-btn');

  headerMenu.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('header-menu-list-link')){
      event.preventDefault();
      headerMenu.classList.toggle('header-menu-active');
      const id = target.getAttribute('href');
      const elem = document.querySelector(id);
      window.scroll({
        top: elem.offsetTop,
        behavior: 'smooth'
      });
    }
  });

  footerMenu.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('footer-menu-list-link')){
      event.preventDefault();
      const id = target.getAttribute('href');
      const elem = document.querySelector(id);
      window.scroll({
        top: elem.offsetTop,
        behavior: 'smooth'
      });
    }
  });

  footerArrow.addEventListener('click', event => {
    event.preventDefault();
    const elem = document.getElementById('header');
    window.scroll({
      top: elem.offsetTop,
      behavior: 'smooth'
    });
  });
};

anch();
