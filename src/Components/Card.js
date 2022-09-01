import React from 'react';
import dayjs from 'dayjs';

function Card(props) {
    return (
        <div style={{ backgroundColor:"#79addb", borderRadius:"10px", width:"300px", margin:"0 auto 10px auto" }}>
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