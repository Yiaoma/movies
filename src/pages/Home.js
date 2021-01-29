import React from "react";
import {Main} from "../components";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Hero from "../containers/Hero";
import List from "../containers/List";

const Home = () => (
    <>
        <Header/>
        <Main>
            <Hero/>
            <List title="What's popular" path="/movie/popular"/>
            <List title="Trending" path="/movie/now_playing"/>
        </Main>
        <Footer/>
    </>
);

export default Home;