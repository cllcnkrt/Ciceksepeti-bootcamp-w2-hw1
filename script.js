const cards = document.querySelector(".cards")
document.querySelector("#input").addEventListener("input", onChange)

const formOption = document.querySelector("#link__form")
const cardOption = document.querySelector("#link__cards")

const formSection = document.querySelector("#formSection")
const cardSection = document.querySelector("#cardSection")

const formDOM = document.querySelector("#form")
const allInputs = []

formDOM.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault()

    const fullNameInputDOM = document.querySelector("#fullName").value
    const ageInputDOM = document.querySelector("#age").value
    const emailInputDOM = document.querySelector("#email").value
    const passwordInputDOM = document.querySelector("#password").value
    allInputs.push(fullNameInputDOM, ageInputDOM, emailInputDOM, passwordInputDOM)


}

formOption.addEventListener("click", showForm)

function showForm() {

    document.querySelector("#input").readOnly = true
    const isShow = formSection.className.includes("show")
    if (!isShow) {
        formSection.className = "show"
        cardSection.className = "hidden"
    }

}


cardOption.addEventListener("click", showCards)

function showCards() {
    document.querySelector("#input").readOnly = false
    const isShow = cardSection.className.includes("show")
    if (!isShow) {
        cardSection.className = "show"
        formSection.className = "hidden"
    }

}

function onChange(e) {
    const input = e.target.value
    const filtered = allData.filter(item => item.title.includes(input) || item.body.includes(input))
    cards.innerHTML = ""
    renderCard(filtered.slice(0, 10))
}

let allData = []

fetch("https://jsonplaceholder.typicode.com/posts#")
    .then(response => response.json())
    .catch(err => console.log(err))
    .then(data => {
        const newData = data.slice(0, 10)
        allData = newData
        renderCard(newData)
    })


const renderCard = (cardsArray) => {
    cardsArray.forEach((el) => {
        const random = Math.floor(Math.random() * 30)
        const card = `
        <div class="card">
        <img src="https://picsum.photos/id/${random}/200/300" alt="">
        <div class="text">
          <h4>${(el.title).split(" ").slice(0,3).join(" ")}</h4>
          <p>${el.body}</p>
        </div>
      </div>
      `
        cards.innerHTML += card
    });
}


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
const fullName_spanDOM = document.querySelector("#fullName_span")
const age_spanDOM = document.querySelector("#age_span")
const email_spanDOM = document.querySelector("#email_span")
const password_spanDOM = document.querySelector("#password_span")



btn.onclick = function () {
    fullName_spanDOM.innerHTML = document.querySelector("#fullName").value
    age_spanDOM.innerHTML = document.querySelector("#age").value
    email_spanDOM.innerHTML = document.querySelector("#email").value
    password_spanDOM.innerHTML = document.querySelector("#password").value
    modal.style.display = "block";
    document.getElementById("form").reset();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}