import React from "react";
import {Footer} from "../components";
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {GITHUB, LINKEDIN, EMAIL} from "../constants/routes";

const FooterContainer = () => (
    <Footer>
        <Footer.List>
            <Footer.Item>
                <Footer.Link target="_blank" href={GITHUB}><AiFillGithub/></Footer.Link>
            </Footer.Item>
            <Footer.Item>
                <Footer.Link target="_blank" href={LINKEDIN}><AiFillLinkedin/></Footer.Link>
            </Footer.Item>
            <Footer.Item>
                <Footer.Link target="_blank" href={`mailto: ${EMAIL}`}><AiOutlineMail/></Footer.Link>
            </Footer.Item>
        </Footer.List>
        <Footer.Copyright>Copyright &copy; 2021 Artiom Kalugin</Footer.Copyright>
    </Footer>
);

export default FooterContainer;