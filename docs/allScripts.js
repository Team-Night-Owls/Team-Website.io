//This affects the our test outcomes button

// Get the popup
var popup = document.getElementById("popup");

// Get the button that opens the popup
var btn = document.getElementById("the_test_btn");

// Get the <span> element that closes the poppup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button it opens the popup 
btn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span>, close the popup
span.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup it closes
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

//This function is what actives the collapsible button

var btn = document.getElementsByClassName("collapsible_btn_nat");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_auto");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_machine");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_cloud");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_adam");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_angelo");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_grace");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_paul");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_taylor");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

var btn = document.getElementsByClassName("collapsible_btn_will");

btn[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
        contents.style.display = "none";
    } else {
        contents.style.display = "block";
    }
});

// Belows function effects the SVG + symbol on the buttons in the IT technologies section

(function() {
    const headings = document.getElementsByClassName('button_group')
  
    Array.prototype.forEach.call(headings, heading => {
      let btn = heading.querySelector('button')
      let target = heading.nextElementSibling
  
      btn.onclick = () => {
        let expanded = btn.getAttribute('aria-expanded') === 'true' || false
  
        btn.setAttribute('aria-expanded', !expanded)
        target.hidden = expanded    
      }
    })
  })();