function submited(){
    let search = document.getElementById("search").value;
    // window.location.href="search.html"
fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${search}`)
.then(function(res){
    res.json().then(function(res){
        console.log(res)
        append(res)
    })
})
.catch(function(err){
    console.log("erro")
})
}

function append(res){
    res.map(function(res){
        console.log(res)
      let box = document.getElementById("searchproduct");
      let div1 = document.createElement("div")
      let image = document.createElement("img")
      image.src = res.image_link;
      let name = document.createElement("h3")
      name.innerText = res.name;
      let price = document.createElement("p")
      price.innerText = res.price;
      let addtocard = document.createElement("button")
      addtocard.innerText = "addtocard"
      box.append(image,name,price,addtocard);
      box.append(div1);

    })

}

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


function submited(){
  window.location.href = "search.html"
  let search = document.getElementById("search").value;
  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${search}`)
  .then(function(res){
    res.json().then(function(res){
       console.log(res)
       localStorage.setItem("mydata" ,JSON.stringify(res))

    })
  })
  .catch(function(err){
    console.log("erro")
  })

  
}

function newuser(user,pass){
  this.user = user;
  this.pass = pass
}

var myarr = JSON.parse(localStorage.getItem("userdata")) || []
function submitmy(){
  event.preventDefault()
  let user = document.getElementById("usergive").value;
  let pass  = document.getElementById("userpass").value;

let f = new newuser(user,pass);
myarr.push(f)
console.log(myarr)
localStorage.setItem("userdata", JSON.stringify(myarr));
}


