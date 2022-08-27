const reviewContainer = document.getElementById('review-container');
const reviews = [
     {
        img: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Profile picture of Simona Almay ",
        text: "I really enjoyed this course! It was fun, interactive as well as educational. I learnt a lot",
        name: "Simona Almay"
     },
     {
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        alt: "Profile picture of John Dee",
        text: "I really enjoyed this course! It was fun, interactive as well as educational. I learnt a lot",
        name: "John Dee"
     },
     {
        img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
        alt: "Profile picture of Mike Hurtz ",
        text: "I really enjoyed this course! It was fun, interactive as well as educational. I learnt a lot",
        name: "Mike Hurtz"
     }
 ]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.addEventListener('mouseover', showCard);
        cardElement.addEventListener('mouseleave', blurCard);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', review.img);
        imageElement.setAttribute('alt', review.alt);
        imageContainer.append(imageElement);

        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = review.text;
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.textContent = review.name;

        cardElement.append(imageContainer, paragraphElement, nameContainer);

        reviewContainer.append(cardElement);
    })
}
populateDisplay();

function showCard(){
    this.classList.add('active');
}

function blurCard(){
    this.classList.remove('active');
}