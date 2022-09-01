import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import WaterList from '../Components/LevelsList';

function LevelsPage() {
    let { siteId } = useParams();
    const [site, setSite] = useState({ levels: [] });
    const [error, setError] = useState(null);

    useEffect(() => {
        let url = "https://localhost:7157/WaterData/GetWaterLevels/" + siteId;
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                    setSite(result);
                },
                (error) => {
                    setError(error);
                }
            )
    }, []);

    if(error) {
        return (
            <div>An error has occurred: { error.message }</div>
        );
    } else {
        return (
            <div style={{ padding:"15px" }}>
                <div className="col-xs-12" style={{ fontSize:"24px", marginBottom:"25px" }}>Daily Mean Depth of { site.siteName }</div>
                <WaterList levels={ site.levels } unitCode={ site.unitCode } />
                <Link to={ '/' }>Back to home</Link>
            </div>
        );
    }
}

export default LevelsPage;