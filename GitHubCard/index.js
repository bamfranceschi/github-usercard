/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get("https://api.github.com/users/bamfranceschi").then(response => {
//   console.log(response);
// });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cardsDiv = document.querySelector(".cards");

// axios.get("https://api.github.com/users/bamfranceschi").then(response => {
//   response.data.forEach(item => {
//     const newSocCard = createSocialCard(item);
//     cardsDiv.appendChild(newSocCard);
//   });
// });

axios.get("https://api.github.com/users/bamfranceschi").then(response => {
  let myInfo = response.data;
  const newSocCard = createSocialCard(myInfo);
  cardsDiv.appendChild(newSocCard);
});

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "squashgray",
  "wchamber01",
  "ElliotPhipps",
  "crutledgedev",
  "lukasjaronis"
];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`).then(response => {
    let followerInfo = response.data;
    const newSocCard = createSocialCard(followerInfo);
    cardsDiv.appendChild(newSocCard);
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createSocialCard(obj) {
  const socCard = document.createElement("div");
  socCard.classList.add("card");

  const socImg = document.createElement("img");
  socImg.src = obj.avatar_url;
  socCard.appendChild(socImg);

  const socInfo = document.createElement("div");
  socInfo.classList.add("card-info");
  socCard.appendChild(socInfo);

  const socName = document.createElement("h3");
  socName.textContent = obj.name;
  socName.classList.add("name");
  socInfo.appendChild(socName);

  const socUserName = document.createElement("p");
  socUserName.textContent = `Github username: ${obj.login}`;
  socUserName.classList.add("username");
  socInfo.appendChild(socUserName);

  const socLocation = document.createElement("p");
  socLocation.textContent = `Location: ${obj.location}`;
  socInfo.appendChild(socLocation);

  const socProfile = document.createElement("p");
  socProfile.textContent = "Profile:";
  socInfo.appendChild(socProfile);

  const profileLink = document.createElement("a");
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  socProfile.appendChild(profileLink);

  const socFollowers = document.createElement("p");
  socFollowers.textContent = `Followers: ${obj.followers}`;
  socInfo.appendChild(socFollowers);

  const socFollowing = document.createElement("p");
  socFollowing.textContent = `Following: ${obj.following}`;
  socInfo.appendChild(socFollowing);

  const socBio = document.createElement("p");
  socBio.textContent = `Bio: ${obj.bio}`;
  socInfo.appendChild(socBio);

  return socCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
