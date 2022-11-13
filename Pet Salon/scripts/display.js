function displayCards(){
    let card="";
    //travel the array 
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
        
        <table class="pet">
            <tr class="tableHeading">
                <th>Pet's Name:</th>
                <th>Age:</th>
                <th>Gender:</th>
                <th>Service:</th>
                <th>Owner's Name:</th>
                <th>Contact Number:</th>
            </tr>
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
           </table>
            `;
   }

     console.log(card);
     //create the HTML template for the cards 
    // //append the template on tne html 
     document.getElementById("pets").innerHTML=card;
}


// //{/* <h5>${pet.name}</h5>
// <p>Age: ${pet.age}</p>
// <p>Gender: ${pet.gender}</p>
// <p>Service: ${pet.service}</p>
// <p>Owner: ${pet.ownerName}</p>
// <p>Contact Number: ${pet.contactPhone}</p>
// //</div> *///}