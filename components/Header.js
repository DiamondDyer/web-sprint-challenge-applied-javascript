// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container');

function Header() {
    

    const headerDiv = document.createElement("div");
    const date = document.createElement("span");
    const h1 = document.createElement("h1");
    const temperature = document.createElement("span");

    headerDiv.className = 'header';
    date.className = 'date';
    temperature.className = 'temp';

    date.textContent = 'MARCH 28, 2020';
    h1.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    headerDiv.appendChild(date);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(temperature);

    return headerDiv;


}

const newHeader = Header();
headerContainer.appendChild(newHeader);
