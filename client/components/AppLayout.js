import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const AppLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
