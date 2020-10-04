
window.addEventListener("load", () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            late = position.coords.latitude;

            const Api = "https://api.openweathermap.org/data/2.5/weather?lat=" + late + "&lon=" + long + "&appid=abb0c011119d36f2fe4d4244b91955d2";
            //console.log(Api);
            fetch(Api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    var dt = data;
                    console.log(dt);
                    var json_object = JSON.parse(JSON.stringify(dt));
                    var x = parseInt(json_object.main.temp);
                    var y = (parseInt(x) - 273.15);
                    document.getElementById("tmp").innerHTML = "Temparature " + y.toPrecision(3) + "`c";
                    var x = parseInt(json_object.main.temp_max);
                    var y = (parseInt(x) - 273.15);
                    document.getElementById("mxTmp").innerHTML = "Max Temp " + y.toPrecision(3) + "`c";


                    document.getElementById("des").innerHTML = "Description:- " + json_object.weather[0].description;
                    document.getElementById("wdSpeed").innerHTML = "Wind Speed -" + data.wind.speed;
                    document.getElementById("loc").innerHTML = "Current Weather in " + data.name + "/" + data.sys.country;
                   
                });
        });
    }
});
