import React from 'react';
import dayjs from 'dayjs';

function Card(props) {
    return (
        <div className="col-sm-6 offset-sm-3 col-lg-4 offset-lg-4 mb-2">
            <div style={{ width:"100%", fontSize:"22px", padding:"5px", boxSizing:"border-box", textAlign:"left" }}>
                { dayjs(props.updateDate).format('M/D/YYYY') }
            </div>
            <div style={{ width: "100%", fontSize:"28px", padding:"5px", boxSizing:"border-box", color:"white", border:"1px solid black", backgroundColor:"#608cd1" }}>
                { props.level } { props.unitCode }
            </div>
        </div>
    )
}

export default Card;