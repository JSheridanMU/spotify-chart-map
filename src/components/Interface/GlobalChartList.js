import React from 'react'
import { Card, ListGroup, Jumbotron } from 'react-bootstrap';
import './Interface.css'

export const GlobalChartList = () => {
    return (
        <div className = "GlobalChartList">
            <ListGroup vertical>
                <ListGroup.Item>Song 1</ListGroup.Item>
                <ListGroup.Item>Song 2</ListGroup.Item>
                <ListGroup.Item>Song 3</ListGroup.Item>
                <ListGroup.Item>Song 4</ListGroup.Item>
                <ListGroup.Item>Song 5</ListGroup.Item>
                <ListGroup.Item>Song 6</ListGroup.Item>
                <ListGroup.Item>Song 7</ListGroup.Item>
                <ListGroup.Item>Song 8</ListGroup.Item>
                <ListGroup.Item>Song 9</ListGroup.Item>
                <ListGroup.Item>Song 10</ListGroup.Item>
            </ListGroup>
        </div>
    );
}