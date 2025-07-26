// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=churu';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '5b8a72317cmshbe7a559f16f5763p10110cjsn4d32dda14c68',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const getApi = async () => {
//     try {
//         const response = await fetch(url, options);
//         let res = await response.json()
//         console.log(res);
//         document.getElementById("temp").innerHTML = res.temp
//                 document.querySelector(".min_temp").innerHTML = res.min_temp
//                 document.querySelector(".max_temp").innerHTML = res.max_temp
//                 document.getElementById("humidity").innerHTML = res.humidity

//                 document.getElementById("wind").innerHTML = res.wind_speed
//                 document.querySelector(".feels_like").innerHTML = res.feels_like
//                 document.querySelector(".sunrise").innerHTML = new Date(res.sunrise * 1000).toLocaleTimeString()
//                 document.querySelector(".sunset").innerHTML = new Date(res.sunset * 1000).toLocaleTimeString()
//                 document.querySelector(".wind_degrees").innerHTML = res.wind_degrees

//     } catch (error) {
//         console.error(error);
//     }
// }

// getApi()

let img = document.getElementById("newimg");
const url =
  "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5b8a72317cmshbe7a559f16f5763p10110cjsn4d32dda14c68",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};
let main = async () => {
  const response = await fetch(url, options);
  let data = await response.json();
  console.log(data);

  let div = document.createElement("div");

  let a = data.albums.items.forEach((e, i) => {
    e.data.artists.items.forEach((e, i) => {
      div.innerHTML=(e.profile.name);
      console.log(e.profile.name);
    });
  });

  console.log(a)

  document.getElementsByClassName("main-container")[0].appendChild = a;
};

main();
