import React from 'react';
import Card from './Card';

function LevelsList(props) {
    return (
        <div className="row">
            { 
                props.levels.map(item => (
                    <Card key={ item.updateDate } updateDate={ item.updateDate } level={ item.level } unitCode={ props.unitCode } />
                ))
            }
        </div>
    );
}

export default LevelsList;