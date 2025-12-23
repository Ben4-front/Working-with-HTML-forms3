export default class Popover {
  constructor() {
    this._popovers = []; 
  }

  showPopover(message, title, element) {

    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    

    const id = `popover-${performance.now()}`;
    popoverElement.id = id;


    popoverElement.innerHTML = `
      <h3 class="popover-header">${title}</h3>
      <div class="popover-body">${message}</div>
      <div class="popover-arrow"></div>
    `;

    document.body.appendChild(popoverElement);


    const { left, top, width } = element.getBoundingClientRect();


    
    const popoverWidth = popoverElement.offsetWidth;
    const popoverHeight = popoverElement.offsetHeight;
    

    popoverElement.style.left = left + width / 2 - popoverWidth / 2 + 'px';
    

    popoverElement.style.top = top - popoverHeight - 10 + 'px';

    this._popovers.push({
      id,
      element: popoverElement
    });

    return id; 
  }

  removePopover(id) {
    const popover = this._popovers.find(p => p.id === id);
    if (popover) {
      popover.element.remove();
      this._popovers = this._popovers.filter(p => p.id !== id);
    }
  }
}