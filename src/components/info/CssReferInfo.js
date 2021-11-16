import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function CssReferInfo({cssRefer}) {
    return (
        <li>
            <Link to= {{ pathname: "css-refer-detail", state: {cssRefer} }}>
                <span className="num">{cssRefer.id}</span>
                <span className="attr">{cssRefer.title}</span>
                <span className="desc">{cssRefer.desc2}</span>
                <span className="Inline">{cssRefer.element}</span>
            </Link>
        </li>
    )
}

CssReferInfo.prototype = {
    cssRefer: PropTypes.object.isRequired,
}

export default CssReferInfo;