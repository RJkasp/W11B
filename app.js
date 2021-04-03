
// In app.js, create a script that achieves the following:
// Create an event listener that will make an AJAX call to an API of your choice When the API returns, change the page in some way (The api request happens on a button click for example).  Here  is  a list  of  free  APIs
// https://any-api.com/ (Links to an external site.)
// https://github.com/public-apis/public-apis (Links to an external site.)
// BONUS
// Make sure you page tells the user when the API is loading, or if it ever errors.


//was denied by api
// function getDogFacts(eventDetails){
//      let ajax = new XMLHttpRequest();
//      ajax.onreadystatechange = function(){
//         //readyState ==4 (means done): status ==200 ("OK"no errors)
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//         }
//      }
// ajax.open("GET", "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all", true);
// ajax.send();
// }
// let dogFacts = document.getElementById("dogFacts");
// dogFacts.addEventListener("click", getDogFacts);

//another one no good dont know why?
// function getCatFacts(eventDetails){
//     let ajax = new XMLHttpRequest();
//     ajax.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.write(this.responseText);
//         }
//     }
//     ajax.open("GET", "https://cat-fact.herokuapp.com", true);
//     ajax.send();
// }
// let catFacts = document.getElementById("catFacts");
// catFacts.addEventListener("click", getCatFacts);

function getNewKitty(eventDetails){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
           let kittyObject = JSON.parse(this.responseText);
           for(let i = 0 ; i < kittyObject.length; i++){
               let kittyImg = document.createElement('img');
               kittyImg.src = kittyObject[i].url
               yourDiv = document.getElementById('kittyContainer');
               yourDiv.appendChild(kittyImg); 
           }     
            //took me awhile to figure this out did this console log to make sure the cat picture would show up before going on to next step.
            // console.log(JSON.parse(this.responseText)[0].url);
        }
    }
    ajax.open("GET", "https://api.thecatapi.com/v1/images/search", true);
    ajax.send();
}
let getKittyPics = document.getElementById("getKittyPics");
getKittyPics.addEventListener("click", getNewKitty);