import React from 'react';
import './Home.css';
import chefImg from './../../Assets/cartoon-chef.svg';

const Home = ()=>{
    return(
        <>
        <div className="home">
        <h1 className="home_heading">
                Rain Or Shine It's Time To Dine 
        </h1>
        <div className="lg_d_flex sm_d_block" >
            <div style={{width:'40%',margin:"4% 4%"}}>
                <img src={chefImg} alt="fat-chef" className="chef-animation"/>
            </div>
            <div style={{color: 'white', fontSize:"40px",fontFamily:"Valera",marginTop:"4%",marginBottom:"0%"}}>
                <h1 style={{fontFamily: "Valera",textAlign:"center"}} >
                    OUR CUISINE
                </h1>
                <p style={{fontFamily: "Valera"}} className="d_none">
                    Hey Food Lovers! Explore multiple cuisines from different continents. 
                    Why always go for the same old, same old?
                </p>
                <p style={{fontFamily: "Valera"}} className="d_none">
                    Let Morrocan, Tunisian, Irish and many more on 'our-cuisine' gear you up to charm your taste buds in the coming year!
                </p>      
            </div>
        </div>
        <div style={{fontFamily: "Valera" ,fontWeight:"bold ", fontSize:"40px", margin:"0px 20px"}} className="d_non">
                    Hey Food Lovers! Explore multiple cuisines from different continents. 
                    Why always go for the same old, same old?
        </div>
        </div>
        </>
    );
}
export default Home;