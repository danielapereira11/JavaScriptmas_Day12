const input = document.getElementById("input");
const btn = document.getElementById("btn");
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

function addNewGuests() {
  let newGuest = input.value;
  guests.push(newGuest);
  guestList.innerHTML += `<li>${newGuest}</li>`;
}

btn.addEventListener("click", addNewGuests);

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
