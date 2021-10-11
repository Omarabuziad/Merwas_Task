import React from 'react';
import "./main.css";
import BigCard from "./bigCard";
import {FiMail} from "react-icons/fi";


const Main = () => {
	return <div className="main">

		<div className="main-adv-area">
			<img className="main-adv-area-img" />
			{/* src="https://mediacdn.grabone.co.nz/asset/E8rOLoskPU" */}

			<p className="main-adv-area-title"><strong>Covid 19 Update:</strong> We encourage you to shop as normal for all your products but shipping delays may occur. Stay safe NZ! <br/><br/>Full Early Bird Christmas terms and conditions 
			<a href="#" >here</a></p>

		</div>

		<div className="main-main1">

			<div className="main-main1-discover">
				<h2>Discover</h2>
				<hr></hr>
				<ul className="main-main1-discover-ul">
				 <li>Featured Waikato deals<p>125</p></li>
				 <li>Collections<p>48</p></li>
				 <li>Activities, Events & Outdoors<p>73</p></li>
				 <li>Picked for You<p></p></li>
				 <li>Store<p>1554</p></li>
				 <li>Restaurants, Bars, Cafes<p>10</p></li>
				 <li>Beauty, Massage & Spa<p>106</p></li>
				 <li>House & Garden<p>780</p></li>
				 <li>Fitness & Sports<p>67</p></li>
				 <li>Automotive<p>36</p></li>	
			 </ul>


			</div>

            
			<BigCard newPri="$56.95" old="$113.5" bought="156 bought" title3="Matamata" title2="The House Of Hazel" title1="Boutique Chalet Accommodation for Two" imagetext="One-Night Matamata Boutique Chalet Accommodation for Two incl. Three-Course Fine Dining Experience at Osteria Restaurant & Late Check-Out - Option for Two or Three Nights incl. Romantic Hot Springs..." imageUrl="//main-cdn.grabone.co.nz/goimage/495x343/dfdb8325f40a4e4263791eaba9c33387ff5fee17.jpg"></BigCard>
			<BigCard  newPri="$60"  bought="15 bought" title3="HelloFresh" title1="HelloFresh LIMITED Special Offer" imageUrl = "//main-cdn.grabone.co.nz/goimage/495x343/a42dd5e4d8d4ec1e6f2301cb8b8cd0fd45a6a6ff.jpg" imagetext="HelloFresh LIMITED GrabOne Special Offer - Up to $69 OFF Your First Box, $135 OFF Your First Two Boxes, or $255 OFF Your First Four Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly R..."></BigCard>
            

		</div>

		<div className="main-main2">

			<h2 className="main-main2-h2">Get the best deals delivered direct to your inbox each day</h2>
			
				<span className="main-main2-span" >
					<FiMail className="main-main2-icon" ></FiMail>
				       <input placeholder="Enter email address" className="main-main2-input" />
					   <button className="main-main2-button">Subscribe</button>
				</span>
				
			





		</div>


		

		<span className="main-main2-span" >
					<FiMail className="main-main2-icon" ></FiMail>
				       <input placeholder="Enter email address" className="main-main2-input" />
					   <button className="main-main2-button">Subscribe</button>
				</span>
	
	
	
	
	
	</div>;
};

export default Main;






