import React from "react";
import {Container, Title, Base, Item} from "./style";

const List = ({children, ...props}) => <Container {...props}>{children}</Container>;

List.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

List.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

List.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

export default List;