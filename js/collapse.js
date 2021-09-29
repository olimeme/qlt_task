const coll = document.querySelectorAll(".collapse_btn");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    let cont = this.nextElementSibling;
    cont.classList.toggle("unactive_collapse");
});
}