import React from "react";
import PropTypes from "prop-types";

const PhonebookTitle = ({title, styles}) => {
    return (
        <h1 style={styles}>{title}</h1>
    )
};

PhonebookTitle.propTypes = {
    styles: PropTypes.object,
    title: PropTypes.string,
}

export default PhonebookTitle;