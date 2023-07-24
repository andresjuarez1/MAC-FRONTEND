import React from "react";
import '../styles/header.css'
import Hamburger from "./hamburger-menu";
import HomeIconWhite from "./icon-home-white";

const Header = () => {
    return (
        <>
            <div className="p   ">
                <div className="container-header-main">
                    <div className="header-main">
                        <div className="header-image"></div>
                        <Hamburger />
                        <HomeIconWhite />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;