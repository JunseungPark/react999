import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function JavaReferInfo({javaRefer}) {
    return (
        <li>
            <Link to= {{ pathname: "java-refer-detail", state: {javaRefer} }}>
                <span className="num">{javaRefer.id}</span>
                <span className="attr">{javaRefer.title}</span>
                <span className="desc">{javaRefer.desc}</span>
                {/* <span className="Inline">{javaRefer.category}</span> */}
            </Link>
        </li>
    )
}

JavaReferInfo.prototype = {
    javaRefer: PropTypes.object.isRequired,
}

export default JavaReferInfo;