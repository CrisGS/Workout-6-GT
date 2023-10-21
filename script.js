const userName = document.querySelector("#name");
const userCity = document.querySelector("#city");
const userBirthdate = document.querySelector("#birthday");

const userGender = document.querySelector("#gender");
const maleUser = document.querySelector("#male");
const femaleUser = document.querySelector("#female");

const clock = document.querySelector("#clock");

const submitButton = document.querySelector("#submit_button");

const dialog = document.querySelector("dialog");
const modalTitle = document.querySelector(".modal-title");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-button");

const displayTime = function() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(displayTime, 1000);
displayTime();

const getUserHobby = function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const userHobby = Array.from(checkboxes).map(checkbox => checkbox.nextElementSibling.textContent.toLocaleLowerCase());
    return userHobby;
} 

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      --age;
    }
    return age;
}


const form = document.querySelector("form");

submitButton.addEventListener("submit", function(e) {
    e.preventDefault();
    if (maleUser.checked === true) {
        modalTitle.textContent = `Hello Mr. ${userName.value}!`;
    } else if (femaleUser.checked === true) {
        modalTitle.textContent = `Hello Ms. ${userName.value}!`;
    } else {
        modalTitle.textContent = `Hello ${userName.value}!`;
    }

    const modalCity = document.querySelector(".modal-city");
    modalCity.textContent = `The city you come from is ${userCity.value}. Cool, I think it's a special place for you.`;

    const userAge = calculateAge(userBirthdate.value);
    const modalBirthdate = document.querySelector(".modal-birthday");
    modalBirthdate.textContent = `You are ${userAge} years old.`;

    const userHobby = getUserHobby();
    const modalHobby = document.querySelector(".modal-hobby");
    if (userHobby.length > 0) {
        modalHobby.textContent = `You like ${userHobby.join(", ")}.`;
    } else {
        modalHobby.textContent = `You don't like any hobbies?`;
    }

    const userLikeCats = document.querySelector("#answer").value;
    const modalPet = document.querySelector(".modal-pet");
    const imageContainer = document.querySelector(".image-container");
    if (userLikeCats === "yes") {
        modalPet.textContent = `You like cats? So cool! I love cats too. Have a look at my cat picture.`;
        let catImage = document.createElement("img");
        catImage.src = "cat.jpg";
        imageContainer.appendChild(catImage);
    } else {
        modalPet.textContent = `You don't like cats? So you're a dog lover? Nice!`;
    }

    const aboutUser = document.querySelector("#about_user").value;
    console.log(aboutUser);
    const modalAbout = document.querySelector(".modal-about");
    if (aboutUser !== "") {
        modalAbout.textContent = `I see that you leave me a few words about yourself. So, you say that:  ${aboutUser}`;
    }

    dialog.showModal();
});

closeBtn.addEventListener("click", function() {
	dialog.close();
});