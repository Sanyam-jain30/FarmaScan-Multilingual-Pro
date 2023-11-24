import React from "react";
import assamese from "../assests/assamese.png";
import bengali from "../assests/bengali.png";
import bhojpuri from "../assests/bhojpuri.png";
import english from "../assests/english.png";
import gujarathi from "../assests/gujarathi.png";
import hindi from "../assests/hindi.png";
import kannada from "../assests/kannada.png";
import malayalam from "../assests/malayalam.png";
import marathi from "../assests/marathi.png";
import punjabi from "../assests/punjabi.png";
import tamil from "../assests/tamil.png";
import telugu from "../assests/telugu.png";
import urdu from "../assests/urdu.png";
import "./Example.css";


function Example(){
    return(
        <div className="gallery-grid">
            <div className="gallery-frame">
                <img
                src={assamese}
                className="gallery-img"
                alt=""
                />
                <span>Assamese</span>
            </div>

            <div className="gallery-frame">
                <img
                src={bengali}
                className="gallery-img"
                alt=""
                />
                <span>Bengali</span>
            </div>

            <div className="gallery-frame">
                <img
                src={bhojpuri}
                className="gallery-img"
                alt=""
                />
                <span>Bhojpuri</span>
            </div>

            <div className="gallery-frame">
                <img
                src={english}
                className="gallery-img"
                alt=""
                />
                <span>English</span>
            </div>

            <div className="gallery-frame">
                <img
                src={gujarathi}
                className="gallery-img"
                alt=""
                />
                <span>Gujarathi</span>
            </div>

            <div className="gallery-frame">
                <img
                src={hindi}
                className="gallery-img"
                alt=""
                />
                <span>Hindi</span>
            </div>

            <div className="gallery-frame">
                <img
                src={kannada}
                className="gallery-img"
                alt=""
                />
                <span>Kannada</span>
            </div>

            <div className="gallery-frame">
                <img
                src={malayalam}
                className="gallery-img"
                alt=""
                />
                <span>Malayalam</span>
            </div>

            <div className="gallery-frame">
                <img
                src={marathi}
                className="gallery-img"
                alt=""
                />
                <span>Marathi</span>
            </div>

            <div className="gallery-frame">
                <img
                src={punjabi}
                className="gallery-img"
                alt=""
                />
                <span>Punjabi</span>
            </div>

            <div className="gallery-frame">
                <img
                src={tamil}
                className="gallery-img"
                alt=""
                />
                <span>Tamil</span>
            </div>

            <div className="gallery-frame">
                <img
                src={telugu}
                className="gallery-img"
                alt=""
                />
                <span>Telugu</span>
            </div>

            <div className="gallery-frame">
                <img
                src={urdu}
                className="gallery-img"
                alt=""
                />
                <span>Urdu</span>
            </div>
        </div>
    )
}

export default Example;