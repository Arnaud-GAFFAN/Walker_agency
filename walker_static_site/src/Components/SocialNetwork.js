import React, {useEffect} from 'react';

const SocialNetwork = () => {

    useEffect(() => {
        const social = document.querySelectorAll(".social-network a");
        social.forEach((link) => {
            link.addEventListener('mouseover', (e) =>{
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 12}px)`;
            })
            link.addEventListener('mouseleave', (e) =>{
                link.style.transform = ``;
            })
        })
    }, [])
    return (
        <div className={"social-network"}>
            <ul className="content">
                <a href="https://www.facebook.com" target={"_blank"}  rel={"noopener noreferrer"} className={"hover"} >
                    <li>
                        <i className={"ri-facebook-fill"}></i>
                    </li>
                </a>
                <a href="https://www.twitter.com" target={"_blank"}  rel={"noopener noreferrer"} className={"hover"}  >
                    <li>
                        <i className={"ri-twitter-fill"}></i>
                    </li>
                </a>
                <a href="https://www.instagram.com" target={"_blank"} rel={"noopener noreferrer"} className={"hover"} >
                    <li>
                        <i className={"ri-instagram-fill"}></i>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;