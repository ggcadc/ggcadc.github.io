import React, { Component } from 'react';
import axios from 'axios';

import './style/text.css'

class About extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            information: ''
        }
    }
    componentWillMount(){
        axios.get('https://gg-portfolio-api.herokuapp.com/information')
        .then(data =>{
            console.log(data);
            return data
            })
        .then(data => this.setState({
            loading: false,
            information: data.data[0],
        }))
    }
    render(){
        return (
            <div>
            {this.state.loading? <h1>loading</h1>:
            <div>
            <img src={this.state.information.img} height="150px" width="auto" style={ {"float": "right"} } alt="me"/>
            <h2>About Me-</h2>
                         <p>{this.state.information.history}</p>
             <h2>Currently Working On-</h2>
             <p>{this.state.information.current}</p>
             <h2>Education-</h2>
             {this.state.information.education.map((item, i) =>{
                 return <p key={i}>{item}</p>;
                 })}
            </div>
            }
            </div>
        )
    }
}

export default About;