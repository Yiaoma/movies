import styled from "styled-components";
import {SMALL} from "../../constants/screenWidths";

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    transform: ${({isHidden}) => isHidden ? "translateY(-100%)" : "translateY(0)"};
    background-color: #333;
    padding: 1em;
    color: #fff;
    flex-direction: column;
    transition: transform 1s ease;

    @media (min-width: ${SMALL}px) {
        flex-direction: row;
    }
`;

export const Base = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    z-index: 1;

    @media (min-width: ${SMALL}px) {
        width: auto;
        align-items: center;
        margin-left: 1em;
        margin-right: 2em;
    }
`;

export const Group = styled.div`
    display: ${({isToggled}) => isToggled ? "flex" : "none"};
    flex-direction: column;
    margin-top: 1em; 

    @media (min-width: ${SMALL}px) {
        margin: 0;
        display: flex;
        flex-direction: row-reverse;
        flex-grow: 2;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Logo = styled.p`
    display: flex;
    font-size: 1.7rem;
    align-items: center;
`;

export const Trigger = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.7rem;

    @media (min-width: ${SMALL}px) {
        display: none;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media (min-width: ${SMALL}px) {
        margin: 0;
    }
`;

export const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    border-bottom: 2px solid #eee;
    padding: .2em .5em;
    font-size: 1.2rem;
    color: #fff;
`;

export const Submit = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
    background: none;
    border: none;
    font-size: 1.7rem;
    outline: none;
    margin-left: 1em;
`;

export const Nav = styled.nav`
    margin-top: 1em;

    @media (min-width: ${SMALL}px) {
        margin: 0;
    }
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;

    @media (min-width: ${SMALL}px) {
        flex-direction: row;
    }
`;

export const Item = styled.li`
    padding: .5em 1em;
    font-size: 1.2rem;

    @media (min-width: ${SMALL}px) {
        padding: 0;
        margin-right: 1em;
    }
`;