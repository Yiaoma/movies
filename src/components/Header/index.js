import React, { useState , useContext, createContext, useEffect} from "react";
import useToggle from "../../hooks/useToggle";
import useScroll from "../../hooks/useScroll";
import {Container, Base, Group, Logo, Trigger, Form, Input, Submit, Nav, List, Item} from "./styles";
import {VscClose} from "react-icons/vsc";
import {BiMenu} from "react-icons/bi";

const ToggleContext = createContext();

const Header = ({children, ...props}) => {
    const {isToggled, handleToggle} = useToggle();
    const {isHidden} = useScroll();

    return (
        <ToggleContext.Provider value={{isToggled, handleToggle}}>
            <Container isHidden={isHidden} {...props}>{children}</Container>
        </ToggleContext.Provider>
    );
};

Header.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

Header.Group = ({children, ...props}) => {
    const {isToggled} = useContext(ToggleContext);

    return <Group isToggled={isToggled} {...props}>{children}</Group>;
}

Header.Logo = ({children, ...props}) => <Logo {...props}>{children}</Logo>;

Header.Trigger = ({children, ...props}) => {
    const {isToggled, handleToggle} = useContext(ToggleContext);
    return <Trigger onClick={handleToggle} {...props}>{isToggled ? <VscClose/> : <BiMenu/>}</Trigger>;
}

Header.Form = ({children, ...props}) => <Form {...props}>{children}</Form>;

Header.Input = ({children, ...props}) => <Input {...props}>{children}</Input>;

Header.Submit = ({children, ...props}) => <Submit {...props}>{children}</Submit>;

Header.Nav = ({children, ...props}) => <Nav {...props}>{children}</Nav>;

Header.List = ({children, ...props}) => <List {...props}>{children}</List>;

Header.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

export default Header;