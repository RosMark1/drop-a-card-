// Time to code something... :)
let wrapper =  document.querySelector('.wrapper')
let cards = document.querySelector('.cards');
let btn = document.querySelector('button')

const cardsRect = cards.getBoundingClientRect();




// console.log(cardsRect)
const drag  = (event, element) => {
    // let newCard = event.target;
    element.style.top =  event.clientY + 'px';
    element.style.left =  event.clientX + 'px';
    // for (let i = 0; i<=1000; i++) {
    //     return i
    // }
    // console.log(i)
    element.style["z-index"] = 100; 
}



const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }



const createCard = event => {
   const newCard = document.createElement("input");
   cards.appendChild(newCard);
   newCard.classList.add("new-card");

   
   const randomTop = Math.random() * (cardsRect.height - 20);
   const randomLeft = Math.random() * (cardsRect.width - 100);

   
   newCard.style.top = randomTop + "px";
   newCard.style.left = randomLeft + "px";


   newCard.style.backgroundColor = randomColor();
   
   const dragEvent = event => {
        drag(event, newCard) 
   }

   newCard.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', dragEvent);
    window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', dragEvent);
})});


   };




btn.addEventListener("click", createCard)


 
  
  
  
  
  
  
