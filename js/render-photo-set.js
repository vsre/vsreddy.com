var search = location.search;

var key = search.split("=")[1];

var data = photos[key];

// Get hold of container element
const containerEl = document.getElementById("container");

// H2 - Title
// Tag - h2, data: details.guestName
const titleEl = document.createElement("h3");
titleEl.textContent = data.details.guestName;

// Add above H2 inside containerEl
containerEl.appendChild(titleEl);

if (data.details.date) {
  const dateEl = document.createElement("h5");
  dateEl.innerHTML = data.details.date;
  containerEl.appendChild(dateEl);
}

const subTitleEl = document.createElement("p");
subTitleEl.innerHTML = data.details.description;
containerEl.appendChild(subTitleEl);
// const containerEl = document.getElementById("container");
// const subTitle = document.createElement("p");
// subTitle.textContent = data.details.description;
// containerEl.appendChild(subTitle);

(function () {
  const fragment = document.createDocumentFragment();

  const images = data.photos;

  // We are rendering photos here
  // Replace images with photos variable
  for (let i = 0; i < images.length; i++) {
    const c = "/photos/" + data.details.photosFolderName + "/";

    // Create img element
    const img = document.createElement("img");
    img.classList.add(
      "figure-img",
      "img-fluid",
      "rounded",
      "mx-auto",
      "d-block"
    );
    img.src = c + images[i].file;
    img.alt = images[i].alt;
    // img.style.maxWidth = "300px";
    // img.style.maxHeight = "400px";

    // Create figcaption element
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("figure-caption", "text-center");
    figcaption.innerHTML = images[i].caption;

    // Create figure element
    const figure = document.createElement("figure");
    figure.classList.add("figure", "mx-auto", "d-block");
    // Add those elements into fragment
    figure.appendChild(img);
    figure.appendChild(figcaption);
    fragment.appendChild(figure);
  }
  const container = document.getElementById("container");
  container.appendChild(fragment);
})();
