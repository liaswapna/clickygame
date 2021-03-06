import React from "react";
import { Col, Card } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconRender.css";



const IconRender = (props) => (
    <Col m={4} l={3} s={12}>
    <Card onClick={() => props.clickHandler(props.icon.iconName)} className={"hoverable teal lighten-2 black-text center" + (props.correct === false ? " shake" : "")} textClassName='white-text'>
    <FontAwesomeIcon className="myFont" icon={props.icon} spin/>
    </Card>
</Col>
);

 export default IconRender