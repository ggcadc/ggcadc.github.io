import React, { Component } from 'react';
import axios from 'axios';

import './style/text.css'

class contact extends Component {
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
                {this.state.loading?<h1>Loading</h1>:
                <div className="widthLimit">
                    <div>
                    <h2>Email:</h2><a href={`mailto:${this.state.information.email}`} target="_blank">{this.state.information.email}</a>
                    <h2>Phone:</h2><p>{this.state.information.phone}</p>
                    <h2>Github:</h2><a href={this.state.information.github} target="_blank">{this.state.information.github}</a>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default contact;