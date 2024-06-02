document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (validateEmail(email) && validateMessage(message)) {
            saveToLocalStorage(name, email, message);
            alert('Form submitted successfully!');
            contactForm.reset();
        } else {
            alert('Please enter valid email and message.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateMessage(message) {
        return message.trim().length > 0;
    }

    function saveToLocalStorage(name, email, message) {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({ name, email, message });
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }
});

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