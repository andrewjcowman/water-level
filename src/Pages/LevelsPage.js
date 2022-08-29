import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

    return (
        <div>
            <div className="col-xs-12" style={{ padding:"15px", fontSize:"24px" }}>Daily Mean Value of { site.siteName }</div>
            <WaterList levels={ site.levels } unitCode={ site.unitCode } />
        </div>
    );
}

export default LevelsPage;