import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { createGlobalStyle } from "styled-components";

// 3D World UI 컴포넌트

const World = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    perspective: 1000px;
`;

const Stage = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    transform-style: preserve-3d;
`;

const House = styled.div`
    width: 100vw;
    height: 100vh;
    transform: translateZ(-490vw);
    transform-style: preserve-3d;
`;

const LeftWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    transform-style: preserve-3d;
    width: 1000vw;
    transform: rotateY(90deg) translateZ(-500vw);
    background: #f8f8f8;
`;

const RightWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    transform-style: preserve-3d;
    width: 1000vw;
    transform: rotateY(90deg) translateZ(-400vw);
    background: #f8f8f8;
`;

const FrontWall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    transform-style: preserve-3d;
    transform: translateZ(300vw);
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-weight: 600;
`;

const ImageWall = styled.div``;

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

const Global = createGlobalStyle`
	body {
		height: 500vh;
	}
`;

const Home = () => {
    const stageRef = useRef();
    const houseRef = useRef();
    let maxScrollValue = 0;
    const mousePos = {
        x: 0,
        y: 0,
    };

    useEffect(() => {
        function scrollHandler() {
            const scrollPercent = pageYOffset / maxScrollValue;
            const zMove = scrollPercent * 980 - 490;

            houseRef;

            houseRef.current.style.transform = `translateZ(${zMove}vw)`;
        }

        function mouseHandler(e) {
            const scrollPercent = pageYOffset / maxScrollValue;
            mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
            mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
            if (scrollPercent > 0.05) {
                stageRef.current.style.transform = `rotateX(${mousePos.y * 10}deg) rotateY(${
                    mousePos.x * 25
                }deg)`;
            } else {
                stageRef.current.style.transform = `rotateX(${mousePos.y * 10}deg) rotateY(${
                    mousePos.x * 12
                }deg)`;
            }
        }

        const resizeHandler = () => {
            maxScrollValue = document.body.offsetHeight - window.innerHeight;
        };

        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        window.addEventListener("scroll", scrollHandler);

        window.addEventListener("mousemove", mouseHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("mousemove", mouseHandler);
        };
    }, []);

    return (
        <AppLayout>
            <World>
                <Stage ref={stageRef}>
                    <House ref={houseRef}>
                        <LeftWall></LeftWall>

                        <RightWall></RightWall>

                        <FrontWall>
                            <Content>
                                <Title>안녕하세요</Title>
                            </Content>
                            <SmallRightWall>
                                <Content>
                                    <Title>댓글</Title>
                                </Content>
                            </SmallRightWall>
                        </FrontWall>
                    </House>
                </Stage>
            </World>
            <Global />
        </AppLayout>
    );
};

export default Home;
