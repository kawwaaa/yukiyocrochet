import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';
import shopi from "./assets/shopi.png";
import shoppat from "./assets/shoppat.png";
import topic from "./assets/topic.png"


const HomePage=()=>{
    return(
        <div className="background">
            <div className="content">
                <img src={topic} alt="topic" />
            </div>
            <div className="about-container">
                
                <p className="about">
                    <p><strong>Welcome!!!</strong></p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets  PageMaker including versions of Lorem 
                    Ipsum</p>
            </div>
            <div className="buttons">
                <Link to="/ShopPatterns">
                    <button className="sbutton">
                        <img src={shoppat} alt="shoppat" />
                    </button>
                </Link>
                <Link to="/ShopItems">
                    <button className="sbutton">
                        <img src={shopi} alt="shopi" />
                    </button>
                </Link>
            </div>
            
        </div>
    );
};
export default HomePage;