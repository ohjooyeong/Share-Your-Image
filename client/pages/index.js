import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import PostWall from "../components/PostWall";

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
    transform: rotateY(90deg) translateZ(-400vw);
    background: #f8f8f8;
    width: 1000vw;
`;

const Global = createGlobalStyle`
	body {
		height: ${(props) => `${props.postLength * 80}vh`}
    }
`;

const Home = () => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector((state) => state.post);
    const stageRef = useRef();
    const houseRef = useRef();
    const LeftWallRef = useRef();
    const RightWallRef = useRef();

    let maxScrollValue = 0;
    const mousePos = {
        x: 0,
        y: 0,
    };
    console.log(mainPosts);

    useEffect(() => {
        const scrollHandler = () => {
            const scrollPercent = pageYOffset / maxScrollValue;
            const zMove = scrollPercent * (mainPosts.length * 250 - 130) - 490;

            LeftWallRef.current.style.transform = `rotateY(90deg) translateZ(-500vw) translateX(${zMove}vw)`;
            RightWallRef.current.style.transform = `rotateY(90deg) translateZ(-400vw) translateX(${zMove}vw)`;
            houseRef.current.style.transform = `translateZ(${zMove}vw)`;
        };

        const mouseMoveHandler = (e) => {
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
        };

        const resizeHandler = () => {
            maxScrollValue = document.body.offsetHeight - window.innerHeight;
        };

        resizeHandler();
        window.addEventListener("resize", resizeHandler);
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return (
        <AppLayout>
            <World>
                <Stage ref={stageRef}>
                    <House ref={houseRef}>
                        <LeftWall ref={LeftWallRef} />

                        <RightWall ref={RightWallRef} />

                        {mainPosts.map((post, index) => (
                            <PostWall key={post.id} post={post} postLength={index} />
                        ))}
                    </House>
                </Stage>
            </World>
            <Global postLength={mainPosts.length} />
        </AppLayout>
    );
};

export default Home;
