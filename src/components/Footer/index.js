import React from "react";
import {Container, List, Item, Link, Copyright} from "./style";

const Footer = ({children, ...props}) => <Container {...props}>{children}</Container>;

Footer.List = ({children, ...props}) => <List {...props}>{children}</List>;

Footer.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

Footer.Link = ({children, ...props}) => <Link {...props}>{children}</Link>;

Footer.Copyright = ({children, ...props}) => <Copyright {...props}>{children}</Copyright>;

export default Footer;