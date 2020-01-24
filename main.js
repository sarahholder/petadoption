const pets = [
    {
      name: "Roxy",
      color: "fawn",
      specialSkill: "Chasing squirrels.",
      type: "dog",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Dixie",
      color: "flashy fawn",
      specialSkill: "World's longest tongue.",
      type: "dog",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
    },
    {
      name: "BigOrange",
      color: "Orange Tabby",
      specialSkill: "Trips humans for sport.",
      type: "cat",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Bandit",
      color: "Black",
      specialSkill: "Juggles dead field mice for fun.",
      type: "cat",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Peter",
      color: "cottontail",
      specialSkill: "Steals carrots from the garden.",
      type: "rabbit",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Silky-smooth",
      color: "tree bark",
      specialSkill: "Hangs out by the waterfall to scare folks.",
      type: "snake",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    }
];
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const buildPetCards = () => {
    let domString = '';
    for(let i = 0; i < pets.length; i++){
        domString += '<div class = "pets">';
        domString += `<h3>${pets[i].name}</h3>`;
        domString += `<p>Name: ${pets[i].name}</p>`;
        domString += `<p>Color: ${pets[i].color}</p>`;
        domString += `<p>specialSkills: ${pets[i].specialSkills}</p>`;
        domString += `<img src= "${pets[i].imageURL}" alt= "A picture of a ${pets[i].type}">`;
    }
printToDom('petAdoption', domString);
};

buildPetCards();