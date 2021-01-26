import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    background-image: url(${({src}) => src});
    background-size: cover;
    background-position: center;
    height: auto;
`;

export const Frame = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Title = styled.h1`
    margin: 5em 0;
    color: #eee;
    text-align: center;
`;