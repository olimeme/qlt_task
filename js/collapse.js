const coll = document.querySelectorAll(".collapse_btn");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    let cont = this.nextElementSibling;
    let arrow = this.children[0];
    cont.classList.toggle("unactive_collapse");
    if(arrow.classList.contains("up")){
      arrow.classList.remove("up");
      arrow.classList.add("down");
    }
    else {
      arrow.classList.remove("down");
      arrow.classList.add("up");
    }
});
}

