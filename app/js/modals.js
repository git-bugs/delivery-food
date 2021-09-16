const modals = () => {

  const bindModal = (triggerSelector, modalSelector, closeSelector, block='block', closeClickOverlay = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
       modal = document.querySelector(modalSelector),
       close = document.querySelector(closeSelector),
       windows = document.querySelectorAll('[data-modal');

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }

        windows.forEach(item=>{
          item.style.display = 'none';
        });

        modal.style.display = block;
      });
    });   

    close.addEventListener('click', e => {
      e.preventDefault();
      windows.forEach(item=>{
        item.style.display = 'none';
      });
      modal.style.display = 'none';
    });

    modal.addEventListener('click', event => {
      if (event.target === modal && closeClickOverlay) {
        windows.forEach(item=>{
          item.style.display = 'none';
        });
        modal.style.display = 'none';
      }
    });
  };

  bindModal('.header-btn', '.popup', '.popup-close','flex');
  bindModal('.footer-btn', '.popup', '.popup-close','flex');
};
modals();
