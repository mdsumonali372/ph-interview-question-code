const sections = document.querySelectorAll("section");

for (const section of sections) {
  section.style.border = "2px solid red";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "15px";
  section.style.paddingLeft = "7px";
  section.style.backgroundColor = "lightgray";
  section.style.textAlign = "center";
}

// const placeContainer = document.getElementById("places-container");
const placeContainer = document.getElementById("places-container");
placeContainer.classList.add("places-color");
