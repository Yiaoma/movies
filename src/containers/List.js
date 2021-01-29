import React, {useState, useEffect} from "react";
import useData from "../hooks/useData";
import {List} from "../components";
import {Card} from "../components";
import {POSTER} from "../constants/urls";

const ListContainer = ({title, path}) => {
    const {data, isLoading} = useData(path);

    return (
        <List>
            <List.Title>{title}</List.Title>
            <List.Base>
                {!isLoading && data.map(movie => (
                    <List.Item key={movie.id}>
                        <Card>
                            <Card.Image src={`${POSTER}${movie.poster_path}`}/>
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