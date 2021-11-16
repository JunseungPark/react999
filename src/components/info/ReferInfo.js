import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function ReferInfo({refer}) {
    return (
        <li>
            <Link to= {{ pathname: "refer-detail", state: {refer} }}>
                <span className="num">{refer.id}</span>
                <span className="attr">{refer.title}</span>
                <span className="desc">{refer.desc2}</span>
                <span className="Inline">{refer.element}</span>
            </Link>
        </li>
    )
}

ReferInfo.prototype = {
    refer: PropTypes.object.isRequired,
}

export default ReferInfo;