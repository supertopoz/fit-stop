import React from 'react'
import ReactDOM from 'react-dom'
import {
  Jumbotron
} from "react-bootstrap"


var Exercise = (props) => (
  <div className="container-fluid text-center">
    <Jumbotron>
      <p className="container"><span className="exerciseName">{props.exercise.name}</span></p>
      <img src={props.exercise.picture} className="img-responsive center-block rounded img-thumbnail exerciseImage"/>
      <p>{props.exercise.description}</p>
    </Jumbotron>
  </div>
);


export default Exercise;
