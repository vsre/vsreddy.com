
(function (){
    const fragment = document.createDocumentFragment();
    for(let i=0; i<images.length; i++) {
        const c = "/pages/photos/anniversary5/";
        const img = document.createElement("img");
        img.classList.add("figure-img", "img-fluid", "rounded");
        img.src = c + images[i].src;
        img.alt = images[i].caption;
        const figcaption = document.createElement("figcaption");
        figcaption.classList.add("figure-caption","text-center");
        figcaption.innerHTML = images[i].caption;
        const figure = document.createElement("figure");
        figure.classList.add("figure");
        figure.appendChild(img);
        figure.appendChild(figcaption);
        fragment.appendChild(figure);
    }
    const container = document.getElementById("container");
    container.appendChild(fragment);
})();

/*

(function (){
    const fragment = document.createDocumentFragment();
    for(let i=0; i<images.length; i++) {
        const c = "/pages/photos/anniversary5/";
        const img = document.createElement("img");
        img.classList.add("figure-img", "img-fluid", "rounded");
        img.src = c + images[i].src;
        img.alt = images[i].caption;
        const figcaption = document.createElement("figcaption");
        figcaption.classList.add("figure-caption", "text-center");
        figcaption.innerHTML = images[i].caption;
        const figure = document.createElement("figure");
        figure.classList.add("figure");
        figure.appendChild(img);
        figure.appendChild(figcaption);
        fragment.appendChild(figure);
    }
    const container = document.getElementById("container");
    container.appendChild(fragment);
})();

*/