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
const drawButton = document.querySelector("#buttonProject");
const apiUrlBase = "http://localhost:3000/projects/"

//bouton haut de page
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

//ouvre menu burger on click
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

//envoi de mail a moi meme via nsmtp js et elastic mail  

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


async function getAllProject() {
    let data = await fetch(`${apiUrlBase}all`)
        .then(response => response.json())
    return data

}


async function generateProjectDisplay(){
    //recup donnée d'api
    let data = await getAllProject();
    let projectDisplay = document.querySelector("#projectsBox");
    projectDisplay.innerHTML = ""; //vide le html avant de le remplir
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * data.length)//choisi un projet parmi les projet dans les data aleatoirement 
        projectDisplay.innerHTML += `
        <div class="projectJs">
            <img src="${data[random].imgSrc}"  alt="..." class="project-pic">
            <div class="projectBody">
            <h3 class="projectTitle">${data[random].titre}</h3>
            <h5 class=projectDetails>${data[random].description}</h5>
            </div>
        </div>
        `
        data.splice(random, 1) // retir la data choisi pour empecher que les doublons
    }
}

generateProjectDisplay()



drawButton.addEventListener("click", () =>{
    generateProjectDisplay()

})

