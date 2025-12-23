import Popover from './Popover';


if (typeof document !== 'undefined') {
  const popoverFactory = new Popover();
  const btn = document.querySelector('.btn');

  if (btn) { 
    let activePopoverId = null;

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (activePopoverId) {
        popoverFactory.removePopover(activePopoverId);
        activePopoverId = null;
      } else {
        const title = btn.getAttribute('title');
        const content = btn.dataset.content;
        activePopoverId = popoverFactory.showPopover(content, title, btn);
      }
    });
  }
}