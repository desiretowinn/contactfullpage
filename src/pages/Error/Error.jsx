import React from 'react';
import "./style.css"
import {NavLink} from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h1>404 Error Page #2</h1>
            <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <NavLink  to="/" class="more-link">Visit the original article</NavLink>
            </div>
        </div>
    );
};

export default Error;