import React from "react";
import {Hero} from "../components";

const HeroContainer = () => (
    <Hero src={"https://www.themoviedb.org/t/p/original/spc5mNkW2daK1ob7Z7jqNkSlKS2.jpg"}>
        <Hero.Frame>
            <Hero.Title>Latest content right over here.</Hero.Title>
        </Hero.Frame>
    </Hero>
);

export default HeroContainer;