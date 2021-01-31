import React from "react";
import {Header} from "../components";
import {BiMovie, BiSearch} from "react-icons/bi";

const HeaderContainer = () => (
        <Header>
            <Header.Base>
                <Header.Logo><BiMovie/></Header.Logo>
                <Header.Trigger/>
            </Header.Base>
            <Header.Group>
                <Header.Form>
                    <Header.Input placeholder="Search..."/>
                    <Header.Submit><BiSearch/></Header.Submit>
                </Header.Form>
                <Header.Nav>
                    <Header.List>
                        <Header.Item>Movies &#9662;</Header.Item>
                        <Header.Item>Tv Shows &#9662;</Header.Item>
                        <Header.Item>People</Header.Item>
                    </Header.List>
                </Header.Nav>
            </Header.Group>
        </Header>
);

export default HeaderContainer;