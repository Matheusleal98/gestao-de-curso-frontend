import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Navbar } from "../../components/Navbar";

export const HomeAdmin = () => {

    return(
        <div className="container">
            <Navbar/>
            <div className="container-page">
                <div className="card">
                    <div className="card-item">
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
}