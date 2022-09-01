import React, { useEffect, useState } from 'react';
import SiteList from '../Components/SiteList';

function MainPage() {
    const [sites, setSites] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7157/WaterData/GetWaterSites")
            .then(res => res.json())
            .then((result) => {
                    setSites(result);
                },
                (error) => {
                    setError(error);
                }
            )
    }, []);

    if(error) {
        return (
            <div>An error has occurred: { error.message }</div>
        )
    } else {
        return (
            <div style={{ padding:"15px" }}>
                <div className="col-xs-12" style={{ marginBottom:"15px", fontSize:"24px" }}>Sites</div>
                <SiteList sites={ sites } />
            </div>
        )
    }
}

export default MainPage;