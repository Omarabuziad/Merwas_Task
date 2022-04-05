import React ,{useEffect} from 'react';
import { Route } from 'react-router-dom';
import Header from "./components/header/index";
import Main from "./components/main/index"
import Navigation from "./components/navigation/index";
import Footer from "./components/footer/index";
import "./App.css";
var axios = require('axios');





const App = () => {

	

  


	useEffect(() => {
		var config = {
			method: 'get',
			url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Amman&types=establishment&location=37.76999%2C-122.44696&radius=500&key=AIzaSyCyObkvRpICwcyTi-dla_IzVFnP22gHcEk',
			headers: { }
			 };
		  
			axios(config)
			.then(function (response) {
			console.log(JSON.stringify(response.data.predictions));
			})
			.catch(function (error) {
			console.log(error);
			});
	}, []);
	



	return <div className="App">

		





		<Header></Header>
		<Navigation></Navigation>
		<Main></Main>
		


		<Footer></Footer>
		
		
		
		
		
		
		
		
		
		
		
		
		</div>;
};

export default App;
