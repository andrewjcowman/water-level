import React from 'react';
import SiteCard from '../Components/SiteCard';

function SiteList(props) {
    return (
        <div className="row">
            { 
                props.sites.map(item => (
                    <SiteCard key={ item.siteId } siteName={ item.siteName } siteId={ item.siteId } />
                ))
            }
        </div>
    )
}

export default SiteList;