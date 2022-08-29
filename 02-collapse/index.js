let coll = document.getElementsByClassName("collapsible__button");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let collapsible__content = this.nextElementSibling;
      if (collapsible__content.style.display === "block") {
      collapsible__content.style.display = "none";
      } else {
      collapsible__content.style.display = "block";
    }
  });
} 

