import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

export class BusinessList extends React.Component {
    render () {
        return (
            <div classList="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}

export default BusinessList;