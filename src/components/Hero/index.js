import React from "react";
import {Background, Frame, Title} from "./style";

const Hero = ({children, ...props}) => <Background {...props}>{children}</Background>;

Hero.Frame = ({children, ...props}) => <Frame {...props}>{children}</Frame>;

Hero.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

export default Hero;