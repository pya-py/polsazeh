import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import TestImage from "./test.jpg";
import './project.css';

const SingleProjectCard = ({project}) => {
    const { title, mainImage, isCompleted } = project;
    return (
        <Card bg="dark" className="m-2 project-card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={TestImage} />
            <Card.Body>
                <Card.Text className="text-white text-center">{title}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleProjectCard;
