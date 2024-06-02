document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffeb3b';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
});

const currentYearInfo = new Date().getFullYear();
const lastModifiedInfo = document.lastModified;

const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

currentYear.innerHTML = currentYearInfo;
lastModified.innerHTML = `Last Modification: ${lastModifiedInfo}`;

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
