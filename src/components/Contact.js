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
                <div>
                    <h2>Email:</h2><p>{this.state.information.email}</p>
                    <h2>Phone:</h2><p>{this.state.information.phone}</p>
                    <h2>Github:</h2><p>{this.state.information.github}</p>
                </div>
                }
            </div>
        )
    }
}

export default contact;