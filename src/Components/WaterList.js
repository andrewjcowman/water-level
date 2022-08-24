import React from 'react';
import Card from './Card';

function WaterList(props) {
    return (
        <div className="row">
            { 
                props.levels.map(item => (
                    <Card updateDate={ item.updateDate } level={ item.level } unitCode={ props.unitCode } />
                ))
            }
        </div>
    )
}

export default WaterList;