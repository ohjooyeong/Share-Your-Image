import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";

const Global = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
        background: #fff000;
	}
`;

const AppLayout = ({ children }) => {
    return (
        <div>
            <Global />
            <Header />
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
