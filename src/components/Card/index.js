import React from "react";
import {Container, Image, Title, Text} from "./style";

const Card = ({children, ...props}) => <Container {...props}>{children}</Container>;

Card.Image = ({...props}) => <Image {...props}/>;

Card.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Card.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

export default Card;