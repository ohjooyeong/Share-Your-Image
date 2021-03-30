import React from "react";
import styled from "styled-components";

const SHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    background: white;
    z-index: 10;
    opacity: 0.9;
    font-weight: 600;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    width: 80px;
    height: 50px;
    text-align: center;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = () => {
    return (
        <SHeader>
            <Wrapper>
                <ItemList>로고</ItemList>
                <ItemList>검색창</ItemList>
                <ItemList>
                    <Item>로그인</Item>
                    <Item>회원가입</Item>
                </ItemList>
            </Wrapper>
        </SHeader>
    );
};

export default Header;
