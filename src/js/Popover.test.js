/**
 * @jest-environment jsdom
 */
import Popover from '../Popover';

test('Popover should render', () => {

  document.body.innerHTML = `
    <button class="btn" title="Test Title" data-content="Test Content">Button</button>
  `;
  const btn = document.querySelector('.btn');
  const factory = new Popover();


  factory.showPopover('Test Content', 'Test Title', btn);


  const popover = document.querySelector('.popover');
  
  expect(popover).toBeTruthy(); 
  expect(popover.querySelector('.popover-header').textContent).toBe('Test Title');
  expect(popover.querySelector('.popover-body').textContent).toBe('Test Content');
});

test('Popover should be removed', () => {
   document.body.innerHTML = '<button class="btn">Button</button>';
   const btn = document.querySelector('.btn');
   const factory = new Popover();

   const id = factory.showPopover('Msg', 'Title', btn);
   

   factory.removePopover(id);
   const popover = document.querySelector('.popover');
   
   expect(popover).toBeNull(); 
});