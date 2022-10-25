const joke = document.getElementById("joke");
const generateJokeBtn = document.getElementById("generatebtn");
const countryInfo = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "19542158e7msha459e3062046ea7p1b1b0ajsn73a11f0282a5",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };
  const response = await fetch(
    "https://dad-jokes.p.rapidapi.com/random/joke",
    options
  );
  const data = response.json();
  return data;
};
generateJokeBtn.addEventListener("click", () => {
  countryInfo()
    .then(data => {
      console.log(data.body[0]);
      joke.innerHTML = `<p>${data.body[0].setup}</p><p>${data.body[0].punchline}</p>`;
    })
    .catch(error => {
      console.log("Error", error.response);
    });
});
