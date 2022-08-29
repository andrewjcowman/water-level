import React from 'react';
import { Link } from 'react-router-dom';

function SiteCard(props) {
    return (
        <div>
            <Link to={ '/levels/' + props.siteId }>{ props.siteName }</Link>
        </div>
    )
}

export default SiteCard;