import "./style.css";
import {Navbar} from "../Navbar";

export const LayoutPage = (props) => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="container">
                <div className="content-page">
                    {props.children}    
                </div>
            </div>
        </div>
    );
}