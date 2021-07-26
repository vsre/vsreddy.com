var fragment = document.createDocumentFragment();

/*
<div class="d-flex align-items-center"> - tileDiv
    <div class="photo-div"> - tilePhotoDiv
        <img src="..." width="120px" height="120px" />
    </div>
    <div class="details-div"> - tileDetailsDiv
        <h5>....</h5>
        <p>....</p>
    </div>
</div>
*/

for (let i = 0; i < photos.length; i++) {
  var photo = photos[i];

  // Grid Div
  var gridDiv = document.createElement("div");
  gridDiv.classList.add("col-12", "col-md-4");

  // Tile Div
  var tileDiv = document.createElement("div");
  tileDiv.classList.add("d-flex", "align-items-center");

  // Tile Photo Div
  const c = "/photos/guests/";
  const img = document.createElement("img");
  img.classList.add("figure-img", "img-fluid", "rounded", "mx-auto", "d-block");
  img.src = c + photo.details.guestImage;
  img.alt = photo.details.guestName;

  var imgAEl = document.createElement("a");
  imgAEl.href = "/pages/photo-set.html?set=" + i;

  imgAEl.append(img);

  // img.width = 100;
  // img.style.paddingRight = 10 + "px";
  var tilePhotoDiv = document.createElement("div");
  tilePhotoDiv.classList.add("photo-div");
  tilePhotoDiv.append(imgAEl);

  // Tile Details Div
  var tileDetailsDiv = document.createElement("div");
  tileDetailsDiv.classList.add("details-div");
  var h4El = document.createElement("h5");
  var aEl = document.createElement("a");
  aEl.innerHTML = getLinkText(photo.details);
  aEl.href = "/pages/photo-set.html?set=" + i;
  h4El.appendChild(aEl);
  tileDetailsDiv.appendChild(h4El);

  if (photo.details.date) {
    var pEl = document.createElement("p");
    pEl.classList.add("muted");
    pEl.innerHTML = photo.details.date || "&nbsp;";
    tileDetailsDiv.appendChild(pEl);
  }

  // Append Photo and Details into Tile
  tileDiv.appendChild(tilePhotoDiv);
  tileDiv.appendChild(tileDetailsDiv);

  // Append Tile Div into grid Div
  gridDiv.appendChild(tileDiv);

  fragment.appendChild(gridDiv);
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
    linkText += " - <br /> ";
  }

  // For Guest Name
  if (details.guestName) {
    linkText += details.guestName;
  }
  // For Guest Designation
  if (details.designation) {
    linkText += " <br /> <h6> " + details.designation + "</h6>";
  }

  // // For date
  // if (details.date) {
  //   linkText += "<br />" + details.date + "";
  // }

  return linkText;
}
