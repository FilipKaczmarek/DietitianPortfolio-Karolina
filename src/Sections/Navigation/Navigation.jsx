import React from 'react';
import PropTypes from 'prop-types';

export const Navigation = ({className}) => {
    return <nav className={`${className ? className : ''}`}> 

    </nav>
}

Navigation.propTypes = {
    class: PropTypes.string,
}

export default Navigation