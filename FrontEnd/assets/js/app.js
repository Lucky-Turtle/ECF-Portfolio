// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");
//envoi de mail const
const eName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('#emailForm');



scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//envoi de mail

submit.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("Clicked");

    let eBody = 
    `<b>Name: </b>${eName.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Message: </b>${message.value}
    <br>`

    Email.send({
        SecureToken : "4082834f-3358-4f78-8321-d2eb0e14a0fa",
        To : 'pro.nicolas.philippe@gmail.com',
        From : "pro.nicolas.philippe@gmail.com",
        Subject : "emailTest from " + email.value,
        Body : eBody
    }).then(
      message => alert(message)
    );
});


