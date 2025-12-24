import Popover from './Popover';

const factory = new Popover();
const btn = document.querySelector('.btn');


let actualPopoverId = null;

btn.addEventListener('click', (e) => {
  e.preventDefault(); 
  if (actualPopoverId === null) {

    actualPopoverId = factory.show(btn); 
  } else {

    factory.remove(actualPopoverId);
    actualPopoverId = null;
  }
});