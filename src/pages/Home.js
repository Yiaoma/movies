import React from "react";
import {Main} from "../components";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Hero from "../containers/Hero";
import List from "../containers/List";

const Home = () => (
    <>
        <Hero/>
        <Header/>
        <List/>
        <Footer/>
    </>
);

export default Home;