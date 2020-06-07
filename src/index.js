import React from 'react';
import PropTypes from 'prop-types';

// Skeleton Renderer.

function SkeletonRenderer(props) {
    return (
        <div>
            
        </div>
    );
}

SkeletonRenderer.propTypes = {
    component: PropTypes.node,
};

SkeletonRendere.defaultProps = {
    component: null,
};

export default SkeletonRenderer;
