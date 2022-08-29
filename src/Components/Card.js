import React from 'react';
import dayjs from 'dayjs';

function Card(props) {
    return (
        <div className="col-sm-6 offset-sm-3 col-lg-4 offset-lg-4 mb-2" style={{ backgroundColor:"#79addb", borderRadius:"10px" }}>
            <div style={{ width:"100%", padding:"5px", textAlign:"left", fontSize:"16px" }}>
                { dayjs(props.updateDate).format('M/D/YYYY') }
            </div>
            <div style={{ width:"100%", padding:"5px", fontSize:"28px", color:"white" }}>
                { props.level } { props.unitCode }
            </div>
        </div>
    )
}

export default Card;