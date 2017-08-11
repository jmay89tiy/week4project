/*
  Here is a rough idea for the steps you could take:
*/




// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play


let resultsSection = document.querySelector(".results");
let button = document.querySelector("button");
let player = document.querySelector(".player");
let musicPlayer = document.querySelector(".music-player");
let sform = document.querySelector(".search-form");
//let clicky = document.querySelector(".soundCard");
let preview;
let url = "https://itunes.apple.com/search?term=";
let string = encodeURIComponent("")

function playMusic(url){
  musicPlayer.setAttribute("src", url)

}
// above is conversion for strings to equal (term+term+term)

sform.addEventListener("submit", function(event){
  event.preventDefault()
  string = event.target.querySelector('input[name="search"]').value;



fetch(url + string + "&limit=8")
  .then (function(response) {
    console.log(response.status)
   response.json()
   .then(function(data) {
      console.log("data results", data.results);
      for(let i=0; i<data.results.length; i++) {
      console.log(data.results[i])
      let singleResult = data.results[i]
          let div = document.createElement("div"); // new div creation
          div.setAttribute("onclick", `playMusic('${singleResult.previewUrl}')`)
          preview = singleResult.previewURL;
          div.className = "songCard";
           div.innerHTML = `
           <img class="pics" src="${singleResult.artworkUrl100}">
           <h3 class="name">${singleResult.artistName}</h3></a>
           <div class="track">${singleResult.trackName}</div>
           `;
           resultsSection.appendChild(div);

      }
    })

    })


      })
