import React from 'react';
import {getLink} from '../../../utils';

const Item = (props) => {
    const {feature, index} = props;
    return (
        <li>
            <div className="index">
                <span>0{index+1}</span>
            </div>
            <div className="feature-icon" style={{background: 'url(' + getLink(feature.img) + ')'}}/>
            <div>
                <h4>{feature.title}</h4>
                <p>{feature.content}</p>
            </div>
        </li>
    );
};

export default Item;
