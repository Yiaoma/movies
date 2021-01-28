import React, {useState, useEffect} from "react";
import {List} from "../components";
import {Card} from "../components";

const ListContainer = () => {
    const [data, setData] = useState(null);

    useEffect(async () => {
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
        let json = await response.json();
        setData(json.results);
    }, []);

    return (
        <List>
            <List.Title>What's popular</List.Title>
            <List.Base>
                {data && data.map(movie => (
                    <List.Item key={movie.id}>
                        <Card>
                            <Card.Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.release_date.replaceAll("-", " ")}</Card.Text>
                        </Card>
                    </List.Item>
                ))}
            </List.Base>
        </List>
    );
}

export default ListContainer;