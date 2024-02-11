let dogs = document.getElementById("imagebox");
let btn = document.getElementById("dogbtn");
let dogImage = document.createElement("img");

btn.addEventListener("click", () => {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((d) => {
      dogImage.setAttribute("src", d.url);
      dogs.appendChild(dogImage);
    })
    .catch((error) => console.log(error));
});
