import React from "react";
import {useLocation} from 'react-router-dom';
import img from '../uploads/crop.png';
import FertilizerCard from './FertilizerCard';
import './TestResult.css';

function TestResult(){
    const location = useLocation();
    console.log(location.state);

    return(
        <div className="card mb-3 display-result" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-" style={{textAlign: "center"}}>
                    <img src={img} className="img-fluid rounded-start cropimg" alt="crop" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize: "2.2rem", color: "red", fontWeight: "bolder"}}>{location.state.name}</h5>
                        <p className="card-text effected-text">{(location.state.effected) ? "Effected" : "Not Effected"}</p>
                        {(location.state.effected) && 
                            <div>
                                <h5>Symptom</h5>
                                <p className="card-text">{location.state.symptom}</p>
                                <h5>Solution</h5>
                                <p className="card-text">{location.state.solution}</p>
                            </div>}
                    </div>
                </div>
            </div>
            {(location.state.effected === true) && 
                <div className="fertilizer">
                    <h5>Fertilizers</h5>
                    <div className="card-deck">
                        {location.state.htmlContent.map(function(ele, index){
                            return <FertilizerCard key={index} data={ele} />
                        })}
                    </div>
                </div>}
        </div>
    )
}

export default TestResult;