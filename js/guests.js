const guests = [
  { file: "1.jpg" },
  { file: "2.jpg" },
  { file: "3.jpg" },
  { file: "4.jpg" },
  { file: "5.jpg" },
  { file: "6.jpg" },
  { file: "7.jpg" },
  { file: "8.jpg" },
  { file: "9.jpg" },
  { file: "10.jpg" },
  { file: "11.jpg" },
  { file: "12.jpg" },
  { file: "13.jpg" },
  { file: "14.jpg" },
  { file: "15.jpg" },
  { file: "16.jpg" },
  { file: "17.jpg" },
  { file: "18.jpg" },
  { file: "19.jpg" },
  { file: "20.jpg" },
  { file: "21.jpg" },
  { file: "22.jpg" },
  { file: "23.jpg" },
  { file: "24.jpg" },
  { file: "25.jpg" },
  { file: "26.jpg" },
  { file: "27.jpg" },
  { file: "28.jpg" },
  { file: "29.jpg" },
  { file: "30.jpg" },
  { file: "31.jpg" },
  { file: "32.jpg" },
  { file: "33.jpg" },
  { file: "34.jpg" },
  { file: "35.jpg" },
];
var fragment = document.createDocumentFragment();

for (let x = 0; x < guests.length; x++) {
  const c = "/photos/guests/";

  const img = document.createElement("img");
  img.classList.add("figure-img", "img-fluid", "rounded", "mx-auto", "d-block");
  img.src = c + guests[x].file;
  img.alt = guests[x].alt;

  var gueEl = document.createElement("div");
  gueEl.classList.add("col-12", "col-md-4");
  gueEl.append(img);
  fragment.append(gueEl);
}
const guestListContainer = document.getElementById("guest-list-container");
guestListContainer.append(fragment);
