//This function is what actives the collapsible button

var btn = document.getElementsByClassName("collapsible_btn");

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