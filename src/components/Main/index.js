import React from "react";
import {Container} from "./style";

const Main = ({children, ...props}) => <Container {...props}>{children}</Container>;

export default Main;