import React , {useState} from 'react';
import "./header.css";
import {FaRegHeart} from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";
import {AiOutlineUser} from "react-icons/ai";
import {FiMail} from "react-icons/fi";
import {GoLocation} from "react-icons/go";
import {IoIosArrowDown} from "react-icons/io";
import {FiSearch} from "react-icons/fi";
import {BiHomeAlt} from "react-icons/bi";
import {BsGrid} from "react-icons/bs"











const Header = () => {
	const [locations , setLocations] = useState(false);
	

	const showLoc= ()=>{
		if(locations === false){
			setLocations(true)
		}else{
			setLocations(false)
		}
	}
   



	return <div className="header">



		<p className="header-title">GrabOne</p>
		<div className="header-btns">
			<span onClick={showLoc} className="location-btn">
             <GoLocation className="location-icons"></GoLocation>
              <p className="header-btn-text">LOCATION</p>
			 <IoIosArrowDown className="location-icons down-arrow"></IoIosArrowDown>
			</span>

			{locations?<div className="locations">
				<div  className="location">Amman</div>
				<div  className="location">Irbid</div>
				<div  className="location">Al Zarqa</div>
				<div className="location">Ma'an</div>
			</div>:null}


			<div className="header-btns-extra">
			<FaRegHeart className="header-icons"></FaRegHeart>
			<FiShoppingCart className="header-icons"></FiShoppingCart>

            <span className="account-icons">
				<AiOutlineUser className="account-icon"></AiOutlineUser>
				<IoIosArrowDown className="down-arrow"></IoIosArrowDown>
			</span>

			<span className="subscribe-btn"><FiMail className="location-icons"></FiMail>
			 <p className="header-btn-text">Subscribe</p>
			</span>

			<img className="header-img" src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png" ></img>

			</div>


		</div>

		<div className="header-bottom">
			<span><BiHomeAlt className="header-bottom-icon"></BiHomeAlt>
			     Home</span>
			<span><FiSearch className="header-bottom-icon"></FiSearch>
			Search</span>
			<span><BsGrid className="header-bottom-icon"></BsGrid>
			Categories </span>
			<span><FiShoppingCart className="header-bottom-icon"></FiShoppingCart>
			Cart</span>
			<span><AiOutlineUser className="header-bottom-icon"></AiOutlineUser>
			Account</span>





		</div>

		
		
		
		
		
		
		
		</div>;
};

export default Header;
