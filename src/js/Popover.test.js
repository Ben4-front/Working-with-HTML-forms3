/**
 * @jest-environment jsdom
 */

import Popover from "../js/Popover";

test("Popover should be created dynamically on call", () => {
  document.body.innerHTML =
    '<button class="btn" title="Hello" data-content="World">Click</button>';
  const btn = document.querySelector(".btn");
  const factory = new Popover();

  expect(document.querySelector(".popover")).toBeNull();

  const id = factory.show(btn);

  const popover = document.querySelector(".popover");
  expect(popover).toBeTruthy();

  expect(popover.querySelector(".popover-header").textContent).toBe("Hello");
  expect(popover.querySelector(".popover-body").textContent).toBe("World");

  factory.remove(id);
  expect(document.querySelector(".popover")).toBeNull();
});
