export default class Popover {
  constructor() {
    this._popovers = []; 
  }

  show(element) {

    const popoverNode = document.createElement('div');
    popoverNode.classList.add('popover');
    

    const id = performance.now();
    

    const popoverTitle = element.title;
    const popoverContent = element.dataset.content;


    
    
    popoverNode.innerHTML = `
      <h3 class="popover-header">${popoverTitle}</h3>
      <div class="popover-body">${popoverContent}</div>
      <div class="popover-arrow"></div>
    `;

    
    document.body.appendChild(popoverNode);

   
    const { left, top, width } = element.getBoundingClientRect();
    
    
    const popoverWidth = popoverNode.offsetWidth;
    const popoverHeight = popoverNode.offsetHeight;

    
    popoverNode.style.left = left + width / 2 - popoverWidth / 2 + 'px';
    
    
    popoverNode.style.top = top - popoverHeight - 10 + 'px';

    
    this._popovers.push({
      id,
      element: popoverNode
    });

    return id;
  }

  remove(id) {
    const popoverObj = this._popovers.find(p => p.id === id);
    
    if (popoverObj) {
      popoverObj.element.remove();
      
      this._popovers = this._popovers.filter(p => p.id !== id);
    }
  }
}