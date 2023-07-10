import React from "react";
import "./index.scss";

export default function ProfileCard({ currentUser }) {
    return <div className="profile-card">{currentUser.name}</div>
}