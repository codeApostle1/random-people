// window.addEventListener('load', showPeople)

const action = document.querySelector('#action');
const main = document.querySelector('#main');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const img = document.querySelector('#avatar');
const gender = document.querySelector('#gender');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const country = document.querySelector('#country');
const infoCol = document.querySelector('.info-col');
const cardCol = document.querySelector('.card-col');


action.addEventListener('click', showPeople);

let people = [];

async function showPeople() {
    try {
        const res = await fetch('https://randomuser.me/api/?results=10');
        const data = await res.json();

        people = data.results.slice(0,2);

        let crowd = ''

        people.forEach(({name,email, location,picture,gender}, index) => {

            crowd.innerHTML += `
                <div class="row" id="row${index}">
                    
                    <div class="card-col" id="cardcol1">
                        <span>${name.title}</span>
                        <h2 class="name"><span id="first">${name.first}</span> <span id="last">${name.last}</span></h2>

                        <div class="image">
                            <img id="avatar" src="${picture.large}" alt="${name.first} ${name.last}" class="avatar">
                        </div>
                        
                        <p class="gender">
                            Gender : <span id="gender">${gender}</span>
                        </p>

                        

                    </div>

                    <div class ='info-col' id="info-col1">
                        <h2 class="location">Location</h2>
                        <div class="location-detail">

                            <div class="info">
                                <p class="left city">City:</p>
                                <p class="right" id="city">${location.city}</p>
                            </div>

                            <div class="info">
                                <p class="left state">State:</p>
                                <p class="right" id="state">${location.state}</p>
                            </div>

                            <div class="info">
                                <p class="left country">Country:</p>
                                <p class="right" id="country">${location.country}</p>
                            </div>    

                             <div class="info">
                                <p class="left country">Email:</p>
                                <p class="right" id="email">${email}</p>
                            </div> 
                            

                           
                        </div>
                    </div>

                </div>
            `

            main.innerHTML = crowd;
        })





    }
     catch(error){
        const errorMsg = 'Error: ' + error.message+ ' check your connection, try again or Pray';
            infoCol.textContent = errorMsg;
            cardCol.textContent = errorMsg;
            img.textContent = errorMsg;
            

    }
}