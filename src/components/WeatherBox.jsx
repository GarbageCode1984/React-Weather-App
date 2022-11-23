//날씨 정보가 보이게
//화씨 -> 섭시  App컴퍼넌트  주소값에 &units=metric 추가
import React from "react";

const WeatherBox = ({ weather }) => {
	//console.log("weather는? ", weather);
	//weather?.name  / weather && weather.name 동일함 - weather가 있을때만 보여줌
	return (
		<div className="Weather-box">
			<div>{weather?.name}</div>
			<h2 className="text-success h1">
				온도: {weather?.main.temp} ºC / 습도: {weather?.main.humidity} %
			</h2>
			<h3 className="text-info h2">
				{weather && weather.weather[0].description}
			</h3>
		</div>
	);
};

export default WeatherBox;
