import React from 'react';

function Card(props) {
    return (
        <div>
            { props.level } { props.unitCode } { props.updateDate }
        </div>
    )
}

export default Card;