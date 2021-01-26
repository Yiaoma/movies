import React from "react";
import {Container, Logo, Trigger} from "./styles";

const Header = ({children, ...props}) => <Container {...props}>{children}</Container>;

Header.Logo = ({children, ...props}) => <Logo {...props}>{children}</Logo>;

Header.Trigger = ({children, ...props}) => <Trigger {...props}>{children}</Trigger>;

export default Header;