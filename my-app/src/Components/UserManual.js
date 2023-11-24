import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import './UserManual.css';

function UserManual(props){
    const location = useLocation();
    const [content, setContent] = useState(null);
    const data = { name: location.state.name };

    const names = async() => {
        const res = await fetch('/usermanual', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
              },
            body: JSON.stringify(data)
        });
        const newData = await res.json();

        // for(var x in newData){
        //     newData[x] = breakNewLine(newData[x]);
        // }

        setContent(newData);
    }

    useEffect(() => {
        names();
    }, []);

    return(
        <div className="um-container">
            {(content != null) ? 
                <div>
                    <h1 className="um-header">{content.name}</h1>
                    <div className="um-container-data">
                        <h3>It contains</h3>
                        <p className="um-container-para">{content.contain}</p>
                    </div>
                    <div className="um-container-data">
                        <h3>Procedure</h3>
                        <p className="um-container-para">{content.procedure}</p>
                    </div>
                    <div className="um-container-data">
                        <h3>Precaution</h3>
                        <p className="um-container-para">{content.precaution}</p>
                    </div>
                </div> 
                :
                <div style={{textAlign: "center"}}>
                    Loading...
                </div>}
        </div>
    )
}

export default UserManual;