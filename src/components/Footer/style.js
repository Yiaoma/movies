import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    color: #fff;
`;

export const List = styled.ul`
    display: flex;
    width: 50%;
    list-style: none;
    justify-content: space-evenly;
    margin-bottom: 1em;
`;

export const Item = styled.li`
    font-size: 2rem;
`;

export const Link = styled.a`
    color: #fff;
`;

export const Copyright = styled.span`
    font-size: .7rem;
`;