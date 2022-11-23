//버튼을 배열로
import React from "react";
import { Button } from "react-bootstrap";

//App에서 props로 받아옴
const WeatherButton = ({ cities, setCity, selectedCity }) => {
	//console.log(" 받아온 cities는? ", cities);
	return (
		<div className="button-box">
			<Button 
				variant={`${selectedCity === '' ? 'warning' : 'outline-warning'}`} 
				onClick={() => setCity("")}>	
				Current Location
			</Button>
			{cities.map((city, index) => (
				<Button
					variant={`${selectedCity === city ? 'light' : 'outline-light'}`}
					key={index}
					onClick={() => setCity(city)}
				>
					{city}
				</Button>
			))}
		</div>
	);
};

export default WeatherButton;
