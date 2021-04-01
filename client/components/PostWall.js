import React from "react";
import styled from "styled-components";

const FrontWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    transform-style: preserve-3d;
    transform: ${(props) => {
        if (props.index >= 1) {
            return `translateZ(${350 - props.index * 250}vw)`;
        } else {
            return `translateZ(${350}vw)`;
        }
    }};
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-weight: 600;
`;

const ImageWall = styled.div`
    width: 100vh;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: contain;
    background-image: ${(props) => `url(${props.image})`};
`;

const Title = styled.div`
    font-size: 5rem;
`;

const SmallRightWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.8);
    color: black;
    transform-style: preserve-3d;
    width: 100vw;
    height: 100vh;
    background: inherit;
    transform: rotateY(270deg) translate3d(50vw, 0, -50vw);
`;

const PostWall = ({ post, postLength }) => {
    return (
        <FrontWall index={postLength}>
            <ImageWall image={post.Images[0].src} />
            <SmallRightWall>
                <Content>
                    <Title>댓글</Title>
                </Content>
            </SmallRightWall>
        </FrontWall>
    );
};

export default PostWall;
