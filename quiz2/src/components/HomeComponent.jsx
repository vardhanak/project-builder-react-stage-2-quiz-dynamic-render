import React,{Component} from "react";
import QuizComponent from "./QuizComponent";
export default class HomeComponent extends Component{
render(){
   return( <>
    <div className="container">
        <h1>Quiz App</h1>
        <button className="playbtn">Play</button>
        <div>     <QuizComponent /></div>
       
    </div>
    </>)
}
}