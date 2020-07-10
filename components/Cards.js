// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function ArticleMaker({title, url, authorName}){
    const cardDiv = document.createElement('div');
    const headline = document.createElement('div');
    const author  = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    cardDiv.className = 'card';
    headline.className = 'headline';
    author.className ='author';
    imgContainer.className = 'img-container';

    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    cardDiv.addEventListener("click", (event)=> {
        console.log(headline.textContent)
    });

headline.textContent = title;
img.src = url;
name.textContent = 'By ' + authorName;

cardsContainer.appendChild(cardDiv)
return cardDiv


}



const { default: Axios } = require("axios")


const lambdaURL2 = 'https://lambda-times-backend.herokuapp.com/articles'
console.log(Axios.get(lambdaURL2)).then(function (value) {
    const articles = value.data.articles;
    const headline = value.data.articles.headline
    const authorName = value.data.articles.authorName
    const img = value.data.articles.authorPhoto
    
    
    articles.forEach(object => {
      const tab = TabMaker(object)
      
    });
  })
  .catch(function (error) {
    console.log(error)
  });
