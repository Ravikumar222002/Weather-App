  const weatherApi = {
    key: "c4d27b85fb41a5e84a477e86b9e5a5f8",
    baseurl: "http://api.openweathermap.org/data/2.5/weather"
  }



  const search_city = document.getElementById("search_city");

  const btn = document.getElementById("btn");





  //main function
  btn.addEventListener("click", function() {

    var input = search_city.value;
    search_city.innerHTML = " ";

    getWeatheReport(input);



  });





  //get weather report

  function getWeatheReport(city)
  {
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)

      .then(function(res) {

        return res.json();
      })
      .then(showWestherReport);




  }

  //show weather report

  function showWestherReport(data)
  {
    //console.log(JSON.stringify(data));

    let city = document.getElementById("city");
    city.innerHTML = `${data.name},${data.sys.country}`;

    let temperature = document.getElementById("temp");

    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

    /* 
     let min_max=document.getElementById("min-max");
     
     min_max.innerHTML=`${Math.floor(data.main.temp_min)}&deg;C (min) /${Math.ceil(data.main.temp_max)}&deg;C (max)`;
     
    */

    let weather = document.getElementById("weather");

    weather.innerHTML = `${data.weather[0].main}`;

    if (weather.textContent == "Clouds" || weather.textContent == "Rainy")
    {
      document.body.style.backgroundImage = "url('https://i.postimg.cc/9X7GTLDh/cloudy.jpg')";
    }

    else if (weather.textContent == "Haze")
    {
      document.body.style.backgroundImage = "url('https://i.postimg.cc/8cvcBSxZ/pexels-eberhard-grossgasteiger-4406337.jpg')";


    }

    else if (weather.textContent == "Mist")
    {
      document.body.style.backgroundImage = "url('https://i.postimg.cc/C175c7Kq/pexels-ian-beckley-2440061.jpg')";
    }

    else if (weather.textContent == "Clear")
    {
      document.body.style.backgroundImage = "url('https://i.postimg.cc/NMP2vcyV/clear-weather.jpg')";
    }





    let date = document.getElementById("date");
    let todaydate = new Date();
    date.innerHTML = manageDate(todaydate);


  }



  //manage date

  function manageDate(date)
  {


    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    let year = date.getFullYear();

    let month = months[date.getMonth()];

    let dates = date.getDate();


    return `${dates} ${month} ${year}`;



  }