let arr = JSON.parse(localStorage.getItem("mydata"))

arr.map(function(e){
    let box = document.getElementById("searmy")
    let div =document.createElement("div")
    let img = document.createElement("img")
    img.src = e.image_link;
    img.setAttribute("id","serimg")
    let name =document.createElement("h2")
    name.innerText = e.name;
    let price = document.createElement("p")
    price.innerText = e.price;
    let yobtn = document.createElement("button")
    yobtn.innerText = "Add to Card"
    div.append(img,name,price)
    box.append(div)
})


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}