import styled from "styled-components";
import {WHITE, LIGHT, DARK} from "../../constants/colours";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1em;
    background-color: ${DARK};
`;

export const List = styled.ul`
    display: flex;
    width: 70%;
    list-style: none;
    justify-content: space-evenly;
    margin-bottom: 1em;
`;

export const Item = styled.li`
    font-size: 2rem;
`;

export const Link = styled.a`
    color: ${LIGHT};
`;

export const Copyright = styled.span`
    font-size: .7rem;
    color: ${WHITE};
`;