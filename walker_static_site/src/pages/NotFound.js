import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <h2>Erreur 404</h2>
                <NavLink to={'/'}><h3>Retour à l'acceuil <i className="ri-home-2-line"></i></h3> </NavLink>
            </div>
        </div>
    );
};

export default NotFound;