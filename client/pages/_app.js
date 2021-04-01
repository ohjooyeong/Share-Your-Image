import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import { createGlobalStyle } from "styled-components";
import wrapper from "../store/configureStore";

const Global = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
        background: #00a2ff;
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

export default wrapper.withRedux(ShareYourImage);
