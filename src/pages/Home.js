import React from "react";
import {Main} from "../components";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Hero from "../containers/Hero";

const Home = () => (
    <>
        <Header/>
        <Main>
            <Hero/>
        </Main>
        <Footer/>
    </>
);

export default Home;