
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topicsDiv = document.querySelector(".topics");
function TabMaker(data){
    const tabDiv = document.createElement('div');
    tabDiv.className = 'tab';
    tabDiv.textContent = data;

    topicsDiv.appendChild(tabDiv);
    return topicsDiv;
}

const { default: Axios } = require("axios");


const lambdaURL = 'https://lambda-times-backend.herokuapp.com/topics';
Axios.get(lambdaURL)
.then(function (value) {
    const topics = value.data.topics
    
    
    topics.forEach(object => {
      const tab = TabMaker(object)
      
    })
  })
  .catch(function (error) {
    console.log(error)
  })