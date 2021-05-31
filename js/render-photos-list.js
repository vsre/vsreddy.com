var fragment = document.createDocumentFragment();

for (let i = 0; i < photos.length; i++) {
  var photo = photos[i];
  var divEl = document.createElement("div");
  divEl.classList.add("col-12", "col-md-4");
  var aEl = document.createElement("a");

  aEl.textContent = getLinkText(photo.details);

  aEl.href = "/pages/photo-set.html?set=" + i;

  divEl.appendChild(aEl);

  fragment.appendChild(divEl);
}

const photosListContainer = document.getElementById("photos-list-container");
photosListContainer.appendChild(fragment);

function getLinkText(details) {
  /*
    event,
    guestName
    date
  */

  let linkText = "";

  // For Event
  if (details.event) {
    linkText += details.event;
  }

  // For separator
  if (linkText.length > 0) {
    linkText += " - ";
  }

  // For Guest Name
  if (details.guestName) {
    linkText += details.guestName;
  }

  // For date
  if (details.date) {
    linkText += " (" + details.date + ")";
  }

  return linkText;
}
