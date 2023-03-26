// //without local storage
// const data = [
//     { title: "Card 1", content: "This is the content of card 1." },
//     { title: "Card 2", content: "This is the content of card 2." },
//     { title: "Card 3", content: "This is the content of card 3." }
//   ];

//   const cardContainer = document.getElementById('card-container');
//   let selectedCard = [];

//   data.forEach(element=>{
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML=`
//     <h2>${element.title}</h2>
//     <p>${element.content}</p>
//     `
//     card.addEventListener('click', ()=>selectCard(card));
//     cardContainer.appendChild(card);
//   });

//   function selectCard(card){
//     if(selectedCard.includes(card)){
//         const index = selectedCard.indexOf(card);
//         selectedCard.splice(index,1);
//         card.classList.remove('selected');
//     }else{
//         selectedCard.push(card);
//         card.classList.add("selected");
//     }
//   }





// with local storage

const cardData = [
    { id: 1, title: 'Card 1', description: 'This is card 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3' },
    { id: 4, title: 'Card 4', description: 'This is card 4' },
    { id: 5, title: 'Card 5', description: 'This is card 5' }
];

// Load cards from local storage or use default data
let cards = JSON.parse(localStorage.getItem('cards')) || cardData;

// Render cards
function renderCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        if (card.selected) {
            cardElement.classList.add('selected');
        }
        cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      `;
        cardElement.addEventListener('click', () => {
            card.selected = !card.selected;
            cardElement.classList.toggle('selected');
            saveCards();
        });
        cardContainer.appendChild(cardElement);
    });
}

// Save cards to local storage
function saveCards() {
    localStorage.setItem('cards', JSON.stringify(cards));
}

// Initialize the cards
renderCards();