const nav = document.querySelector("#main");
const about = document.querySelector("#about");
const project = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY === 0) {
    clearActive();
  }
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

const highlightActive = (item) => {
  about.style = 'color: white';
  project.style = 'color: white';
  contact.style = 'color: white';
  return item.style = 'color: rgb(150, 4, 4)';
}

const clearActive = () => {
  about.style = 'color: white';
  project.style = 'color: white';
  contact.style = 'color: white';
}


window.addEventListener("scroll", fixNav);
