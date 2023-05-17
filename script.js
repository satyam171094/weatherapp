const temp = document.querySelector("h1");
const loca = document.querySelector("h2");
const condition = document.querySelector("span");
const img = document.querySelector("img");
const dateTime = document.querySelector("p")
const form1 = document.querySelector("form")
const input = document.querySelector(".input")

let target = "London";
const fetchData = async (target) => {
try {
    const url = `https://api.weatherapi.com/v1/current.json?key=52b0a73024e5466f94665805232201&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const {
      current: {
        temp_c,
        condition: {text, icon},
      },
      location: { name, localtime },
    } = data;
    updateDOM(temp_c, name, text, icon, localtime);
} catch (error) {
    alert("Please Enter Correct location")
}
};

const updateDOM = (temperature, city, condi, image, timeDate) => {
  temp.innerText = `${temperature}°C`;
  loca.innerText = city;
  condition.innerText = condi;
  img.src = image;
  const todayDate = timeDate.split(" ")[0];
  const todaytime = timeDate.split(" ")[1];
  const day = new Date(timeDate).getDay();
  const todayDay = getTodayDay(day)

  const fulltime = `${todaytime} || ${todayDay} || ${todayDate}`
  
  dateTime.innerText = fulltime


};

form1.addEventListener("submit", (e)=>{
    e.preventDefault()
    target = input.value
    fetchData(target)
})


const getTodayDay = (num) => {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";

    default:
      return "dontknow";
  }
};
console.log(getTodayDay(5));
fetchData();
