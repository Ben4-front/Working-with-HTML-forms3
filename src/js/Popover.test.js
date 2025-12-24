/**
 * @jest-environment jsdom
 */

import Popover from "../js/Popover";

test("Popover should render correct HTML structure", () => {
  document.body.innerHTML = '<button class="btn">Click me</button>';
  const btn = document.querySelector(".btn");
  const factory = new Popover();

  factory.showPopover("Content text", "Title text", btn);

  const popoverElement = document.querySelector(".popover");

  expect(popoverElement).toBeTruthy();

  const title = popoverElement.querySelector(".popover-header");
  expect(title.textContent).toBe("Title text");

  const body = popoverElement.querySelector(".popover-body");
  expect(body.textContent).toBe("Content text");
});

test("Popover should allow removal", () => {
  document.body.innerHTML = '<button class="btn">Click me</button>';
  const btn = document.querySelector(".btn");
  const factory = new Popover();

  const id = factory.showPopover("Content", "Title", btn);

  expect(document.querySelector(".popover")).not.toBeNull();

  factory.removePopover(id);

  expect(document.querySelector(".popover")).toBeNull();
});
