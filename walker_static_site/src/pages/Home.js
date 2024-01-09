import React from 'react';
import Navigation from "../Components/Navigation";
import Mouse from "../Components/Mouse";
import SocialNetwork from "../Components/SocialNetwork";
import DynamicText from "../Components/DynamicText";

const Home = () => {
    return (
        <div>
            <Mouse/>
            <div className="home">
                <Navigation/>
                <SocialNetwork/>
                <div className="home-main">
                    <div className="main-content">
                        <h1>WALKER AGENCY</h1>
                        <h2>
                            <DynamicText/>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;