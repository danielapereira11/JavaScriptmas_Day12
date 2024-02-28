const input = document.getElementById("input");
const btn = document.getElementById("btn");
const removeBtn = document.getElementById("remove-btn");
const removeEvilBtn = document.getElementById("remove-evil-btn");
let guestList = document.getElementById("guest-list");
let guests = [
  "Partner",
  "Nice Relative 1",
  "Nice Relative 2",
  "Evil Relative",
  "Lonely Neighbour",
];

function renderGestList() {
  for (let i = 0; i < guests.length; i++) {
    guestList.innerHTML += `<li>${guests[i]}</li>`;
  }
}

renderGestList();
// maybe try this using append child to see if I can temove the evil family member

function addNewGuests() {
  let newGuest = input.value;
  guests.push(newGuest);
  guestList.innerHTML += `<li>${newGuest}</li>`;
}

function removeLastGuest() {
  guests.pop();
  guestList.removeChild(guestList.lastElementChild);
}

function removeEvilOne() {
  guests.splice(3, 1);
  // removes the Evil Guest only from the guests array
}

btn.addEventListener("click", addNewGuests);
removeBtn.addEventListener("click", removeLastGuest);
removeEvilBtn.addEventListener("click", removeEvilOne);

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
