var fragment = document.createDocumentFragment();

for (let i = 0; i < photos.length; i++) {
  var photo = photos[i];
  var divEl = document.createElement("div");
  divEl.classList.add("col-12", "col-md-4");
  var h4El = document.createElement("h5");

  var aEl = document.createElement("a");

  aEl.innerHTML = getLinkText(photo.details);

  aEl.href = "/pages/photo-set.html?set=" + i;

  h4El.appendChild(aEl);
  divEl.appendChild(h4El);
  var pEl = document.createElement("p");
  pEl.classList.add("muted");
  pEl.innerHTML = photo.details.date || "&nbsp;";
  divEl.appendChild(pEl);

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

  // // For date
  // if (details.date) {
  //   linkText += "<br />" + details.date + "";
  // }

  return linkText;
}
