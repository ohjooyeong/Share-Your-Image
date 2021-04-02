import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const FrontWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 130vh;
    background: rgba(255, 255, 255, 0.8);
    transform-style: preserve-3d;
    transform: translateY(-15vh)
        ${(props) => {
            if (props.index >= 1) {
                return `translateZ(${350 - props.index * 250}vw)`;
            } else {
                return `translateZ(${350}vw)`;
            }
        }};
`;

const ContentHeader = styled.div`
    display: flex;
    margin-bottom: 0.8rem;
    justify-content: space-between;
    align-items: center;
`;

const ContentHeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

const ContentHeaderRight = styled.div`
    display: flex;
    align-items: center;
`;

const FollowButton = styled.button`
    font-size: 4rem;
    margin-right: 4rem;
`;

const ContentUserInfo = styled.div`
    flex: 1 1 auto;
`;

const ContentUsername = styled.div`
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.47;
    color: #868e96;
    letter-spacing: -0.3px;
    margin-left: 4rem;
`;

const ContentCover = styled.div`
    width: 95vw;
    height: 115vh;
    padding: 2rem;
    background-color: red;
    font-weight: 600;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentBody = styled.div`
    margin-left: 1.5rem;
    line-height: 1.6;
    letter-spacing: -0.3px;
    color: 495057;
    font-size: 2rem;
    background-color: yellow;
    align-self: center;
    overflow: hidden;
    margin-bottom: 2.5rem;
    width: 70vw;
    height: 65vh;
`;

const ContentBox = styled.div`
    width: 70vw;
    height: 20vh;
    align-self: center;
`;

const ImageWall = styled.img`
    width: 100vw;
    height: 130vh;
    background-repeat: no-repeat;
    object-fit: fill;
`;

const Title = styled.div`
    font-size: 5rem;
`;

const SmallLeftWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.8);
    color: black;
    transform-style: preserve-3d;
    width: 80vw;
    height: 130vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    transform: rotateY(90deg) translate3d(-50vw, 0, -40vw);
`;

const SmallRightWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.8);
    color: black;
    transform-style: preserve-3d;
    width: 80vw;
    height: 130vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    transform: rotateY(270deg) translate3d(50vw, 0, -60vw);
`;

const PostWall = ({ post, postIndex }) => {
    console.log(post);
    return (
        <FrontWall index={postIndex}>
            <SmallLeftWall>
                <ContentCover>
                    <Content>
                        <ContentHeader>
                            <ContentHeaderLeft>
                                <Avatar
                                    size={150}
                                    icon={<UserOutlined />}
                                    style={{ marginLeft: "3rem" }}
                                />
                                <ContentUsername>{post.User.nickname}</ContentUsername>
                            </ContentHeaderLeft>
                            <ContentHeaderRight>
                                <FollowButton>Follow</FollowButton>
                            </ContentHeaderRight>
                        </ContentHeader>
                        <ContentBody>{post.content}</ContentBody>
                    </Content>
                </ContentCover>
            </SmallLeftWall>
            <ImageWall src={post.Images[0].src} />
            <SmallRightWall>
                <Content>
                    <Title>{postIndex} 댓글</Title>
                </Content>
            </SmallRightWall>
        </FrontWall>
    );
};

export default PostWall;
