import React from 'react'
import './Home.css'
 
function Home() {
    return (
        <div className="Home-conteiner">
            <div className="horizontal-box">
                <div className="left-box">
                    <h5 className="sub-title">Welcome To Pupil App</h5>
                    <h1 className="title">APPLICATION DEDICATED TO YOUR PET</h1>
                    <p className="text-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#" class="home-btn">Downloand</a>
                </div>
                <div className="right-box">
                    <img alt="INFERNO" className="home-img" src="./img/pet.png" class="inline-photo"/>
                </div>
 
 
            </div>
        </div>
    )
}
 
export default Home;
 

