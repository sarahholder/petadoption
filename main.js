const pets = [
    {
      name: "Roxy",
      color: "fawn",
      specialSkill: "Chasing squirrels.",
      type: "Dog",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      name: "Dixie",
      color: "flashy fawn",
      specialSkill: "World's longest tongue.",
      type: "Dog",
      imageUrl: "https://s3.amazonaws.com/filestore.rescuegroups.org/884/pictures/animals/1823/1823454/3897527_500x332.jpg"
    },
    {
      name: "BigOrange",
      color: "Orange Tabby",
      specialSkill: "Trips humans for sport.",
      type: "Cat",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      name: "Bandit",
      color: "Black",
      specialSkill: "Juggles dead field mice for fun.",
      type: "Cat",
      imageUrl: "https://www.catster.com/wp-content/uploads/2018/03/Close-up-of-a-tuxedo-black-and-white-cat.jpg"
    },
    {
      name: "Wolf",
      color: "fuzzy gray",
      specialSkill: "dances and cheers as the Chiefs win games. Most excited about their soon victory in the Superbowl. GO CHIEFS",
      type: "Other",
      imageUrl: "https://lh4.googleusercontent.com/-0MFz34s8PgA/VSZOp9xWhRI/AAAAAAABUkU/66OSsJP1fB4/s481/kcwolflook.jpg"
    },
    {
      name: "Silky-smooth",
      color: "tree bark",
      specialSkill: "Hangs out by the waterfall to scare folks.",
      type: "Other",
      imageUrl: "https://www.in.gov/dnr/fishwild/images/fw-watersnake.jpg"
    },
];
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
console.log('pets', pets);

const buildPetCards = (petsArray) => {
    let domString = '';
    for(let i = 0; i < petsArray.length; i++){
        domString += '<div class= "cards"><div class = "card">';
        domString += `<img class="img" src= "${petsArray[i].imageUrl}" alt= "A picture of a ${pets[i].type}">`;
        domString += `<h3>${petsArray[i].name}</h3>`;
        domString += `<p class= "center">Name: ${petsArray[i].name}</p>`;
        domString += `<p>Color: ${petsArray[i].color}</p>`;
        domString += `<p>Type: ${petsArray[i].type}</p>`;
        domString += `<p>Special Skills: ${petsArray[i].specialSkill}</p></div></div>`;
    }
printToDom('petType', domString);
};
const sortPets = (e) =>{
  const buttonId = e.target.id;
  if(buttonId === 'All'){
    buildPetCards(pets);
  } else{
    const myPets = [];
    for(let i=0; i < pets.length; i++){
      if(pets[i].type === buttonId){
        myPets.push(pets[i]);
      }
     
    }  
    buildPetCards(myPets); 
  }
};

const events = () => {
  document.getElementById('Dog').addEventListener('click', sortPets);
  document.getElementById('Cat').addEventListener('click', sortPets);
  document.getElementById('Other').addEventListener('click', sortPets);
  document.getElementById('All').addEventListener('click', sortPets);
};

const init = () => {
  buildPetCards(pets);
  events();
};

init();

