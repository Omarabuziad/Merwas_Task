import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css";
import {IoIosArrowDown} from "react-icons/io";
import {FiSearch} from "react-icons/fi";
import {IoIosArrowForward} from "react-icons/io"

const Navigation = () => {

	const [showCat , setShowCat] = useState("none")

	const showCati = ()=>{
		if(showCat==="none"){
			setShowCat("flex")
		}else{
			setShowCat("none")
		}
	}


	return <div className="nav">

		

		<ul className="nav-titles">
			<li id="nav-title-Cat" onClick={showCati}>Browse Categories<IoIosArrowDown id="nav-down-arrow"></IoIosArrowDown></li>
			<li>What's New</li>
			<li>Trending</li>
			<li>For You</li>
			<li>Shop Products</li>
		</ul>

		<span className="nav-search">
		  <FiSearch className="nav-search-icon"></FiSearch>
		  <input className="nav-search-input" placeholder="Search GrapOne"></input>
		</span>


		<div  style={{display:showCat}} className="nav-categories-list">
         <div className="left-list">
			 <ul className="left-list-ul">
				 <li>Activities, Events & Outdoors<IoIosArrowForward className="cat-arrow" ></IoIosArrowForward></li>
				 <li>Automotive<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Baby, Kids & Toys<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Beauty, Massage & Spa<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Books & Magazines<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Clothing & Fashion - Men's<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Clothing & Fashion - Women's<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Electronics & Computers<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Fitness & Sports<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Grocery & Food<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Health, Nutrition & Dental<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Holidays, Hotels & Travel<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>House & Garden<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Pets<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Restaurants, Bars, Cafes<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Stationery, Art & Craft<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Training & Courses<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Weddings, Special Occasions & Parties<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				 <li>Wine, Beer & Spirits<IoIosArrowForward className="cat-arrow"></IoIosArrowForward></li>
				
			 </ul>
			 <hr className="left-list-hr"></hr>

			 <p className="left-list-p">Browse all Categories</p>

		 </div>


		 <div className="right-list">
			 <p className="right-list-header">Stationery, Art & Craft</p>
			 <span>
				 <p className="right-list-subheader">Art Supplies</p>
				 <p className="right-list-det">Brushes & Sponges, Canvas, Pads & Books, Paint & Ink</p>
			 </span>
			 <span>
				 <p className="right-list-subheader"> Colouring & Scrapbooking </p>
				 <p className="right-list-det">Adult Colouring Books, Scrapbooking Albums, Stickers</p>
			 </span>
			 <span>
				 <p maxlength="5" className="right-list-subheader">Craft Kits & Supplies</p>
				 <p className="right-list-det">Clay & Modelling, Craft Components</p>
			 </span>
			 <span>
				 <p className="right-list-subheader">General Stationery</p>
				 <p className="right-list-det">Notebooks & Calendars, Pens & Pencils, Tape, Glue & Adhesives</p>
			 </span>
			 <span>
				 <p className="right-list-subheader">Paper & Printing</p>
				 <p className="right-list-det">Kid's Camps, Kid's Classes, Kid's Shows, Play Centres, Trampoline</p>
			 </span>
		 </div>






		</div>


		

		


		
		
		
		
		
	
	
	
	
	
	</div>;
};

export default Navigation;
