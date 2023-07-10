import React from "react";
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import user from "../../../assets/user.png";
import { ImHome3 } from "react-icons/im";
import { AiOutlineSearch, AiFillMessage } from "react-icons/ai";
import { BsFillPeopleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function Topbar() {
    let navigate = useNavigate();
    const goToRoute = (route) => {
        navigate(route);
    };
    return (
        <div className="topbar-main">
            <img className="linkedin-logo" src={LinkedinLogo} alt="LinkedinLogo" />
            <div className="react-icons">
                <AiOutlineSearch size={30} className="react-icon" />
                <ImHome3 size={30} className="react-icon" onClick={() => goToRoute("/home")} />
                <BsFillPeopleFill size={30} className="react-icon" onClick={() => goToRoute("/profile")}/>
                <BsFillBriefcaseFill size={30} className="react-icon" />
                <AiFillMessage size={30} className="react-icon" />
                <MdNotifications size={30} className="react-icon" />
            </div>
            <img className="user-logo" src={user} alt="user" />
        </div>
    );
}