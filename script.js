// window.addEventListener('load', showPeople)

const action = document.querySelector('#action');
const main = document.querySelector('#main');
// const firstName = document.querySelector('.first');
// const lastName = document.querySelector('.last');
// const img = document.querySelector('.avatar');
// const gender = document.querySelector('.genderr');
// const email = document.querySelector('.email');
// const city = document.querySelector('.city');
// const state = document.querySelector('.state');
// const country = document.querySelector('.country');
// const infoCol = document.querySelector('.info-col');
// const cardCol = document.querySelector('.card-col');


action.addEventListener('click', showPeople);

let people = [];

async function showPeople() {
    main.innerHTML = `<p style="text-align:center;">Loading random person...</p>`;
    try {
        // const res = await fetch('https://randomuser.me/api/?results=10');

        const res = await fetch('https://dummyjson.com/users?limit=10');
        const data = await res.json();

        // people = data.results.slice(0,1);
        people = data.users;


            
        let crowd = ''

        people.forEach(({firstName,lastName,email, address,image,gender}, index) => {

            crowd += `
                <div class="row" id="row${index}">
                    
                    <div class="card-col" >
                        
                        <h2 class="name"><span class="first">${firstName}</span> <span class="last">${lastName}</span></h2>

                        <div class="image">
                            <img  src="${image}" alt="${firstName} ${lastName}" class="avatar">
                        </div>
                        
                        <p class="gender">
                            Gender : <span class="genderr">${gender}</span>
                        </p>

                        

                    </div>

                    <div class ='info-col' >
                        <h2 class="location">Location</h2>
                        <div class="location-detail">

                            <div class="info">
                                <p class="left city">City:</p>
                                <p class="right city" >${address.city}</p>
                            </div>

                            <div class="info">
                                <p class="left state">State:</p>
                                <p class="right state" >${address.state}</p>
                            </div>

                            <div class="info">
                                <p class="left country">Country:</p>
                                <p class="right country" >${address.country}</p>
                            </div>    

                             <div class="info">
                                <p class="left country">Email:</p>
                                <p class="right email" title=${email} >${email.length > 15? email.slice(0,15)+'...': email}</p>
                            </div> 
                            

                           
                        </div>
                    </div>

                </div>
            `

           
        })


         main.innerHTML = crowd;
       

    }
     catch(error){
        const errorMsg = 'Error: ' + error.message+ ' check your connection, try again or Pray';
            
            main.textContent = errorMsg;
            
            

    }
}