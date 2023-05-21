let a = document.getElementById("joke");


let btn = document.getElementById("button");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke = () =>{
     fetch(url)
    .then(data =>{ 
        return  data.json();
    })
    .then((data2) =>{
        a.textContent = `${data2.joke}`;
    })
}
getJoke();

btn.addEventListener("click",getJoke);
getJoke();
