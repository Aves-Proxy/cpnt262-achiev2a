const form = document.querySelector("form");
const studly = document.querySelector("h3");

//keep this invisible until it's needed
studly.style.visibility = "hidden";

// function that converts input string into studly caps
const handleSubmit = (event) => {
  event.preventDefault();

  const characters = (form.sentence.value).split(""); //create an array populated by each character in the phrase, for conversion in a bit

  for (let i = 0; i < characters.length; i++) {
    (i % 2 === 0) ? characters[i] = characters[i].toLowerCase() : characters[i] = characters[i].toUpperCase(); //loop through array of characters and turn each odd one uppercase, each even one lowercase
  }
  
  studly.innerHTML = characters.join(""); //make innerHTML of h3 into the converted phrase, joined back together
  studly.style.visibility = "visible" //make the converted phrase visible, as a little magic trick
}

form.addEventListener("submit", handleSubmit)
