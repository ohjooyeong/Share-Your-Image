import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
        background: #fff000;
	}
`;

const ShareYourImage = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>ShareYourImage</title>
            </Head>
            <Global />
            <Component />
        </>
    );
};

ShareYourImage.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default ShareYourImage;
