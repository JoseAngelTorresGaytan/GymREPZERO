const showGenreListButton = document.getElementById("showList-Button");
const hiddenList = document.querySelector(".genre-List");
const background = document.querySelector(".genre-Container");
const buttonAZ = document.getElementById("A-Zbutton");
    
function openMenuButton (){
  hiddenList.style.display = "flex";
  hiddenList.style.transform = "translate(0%)";
  background.style.display = "flex";    
}

function closeButton (){
  hiddenList.style.display = "none";
  background.style.display = "none";
}

const genreItems = hiddenList.querySelectorAll("li");
  genreItems.forEach((genreItem) => {
  genreItem.addEventListener("click", () => {
  const selectedGenre = genreItem.getAttribute("data-genre");
  console.log("Género seleccionado: ", selectedGenre);
    })
    
});

seleccionadas.push({
   id: id,
   nombre: card.textContent
});

