const pets = [
    {
      name: "Roxy",
      color: "fawn",
      specialSkill: "Chasing squirrels.",
      type: "Dog",
      imageUrl: "./img/roxy.jpg",
    },
    {
      name: "Dixie",
      color: "flashy fawn",
      specialSkill: "World's longest tongue.",
      type: "Dog",
      imageUrl: "./img/dixie.jpg",
    },
    {
      name: "BigOrange",
      color: "Orange Tabby",
      specialSkill: "Trips humans for sport.",
      type: "Cat",
      imageUrl: "./img/bo.jpg",
    },
    {
      name: "Bandit",
      color: "Black",
      specialSkill: "Juggles dead field mice for fun.",
      type: "Cat",
      imageUrl: "./img/bandit.jpg"
    },
    {
      name: "KC Wolf",
      color: "fuzzy gray",
      specialSkill: "dances and cheers as the Chiefs win games. Most excited about their soon victory in the Superbowl. GO CHIEFS",
      type: "Other",
      imageUrl: "./img/kcwolf.jpg",
    },
    {
      name: "Silky-smooth",
      color: "Dead Leaves",
      specialSkill: "Hangs out by the waterfall to scare folks.",
      type: "Other",
      imageUrl: "./img/silky.jpg"
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
        domString +=    `<div class = 'card'><img class= 'img' src= '${petsArray[i].imageUrl}' alt= 'A picture of a ${pets[i].type}'>`;
        domString += `<h3>${petsArray[i].name}</h3>`;
        domString += `<p class= 'center'>Name: ${petsArray[i].name}</p>`;
        domString += `<p>Color: ${petsArray[i].color}</p>`;
        domString += `<p>Type: ${petsArray[i].type}</p>`;
        domString += `<p>Special Skills: ${petsArray[i].specialSkill}</p>`;
        domString +=    `</div>`;
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

