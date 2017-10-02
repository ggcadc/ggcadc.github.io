import React, { Component } from 'react';
import axios from 'axios';

import './style/projects.css'

// implement cards via -http://www.material-ui.com/#/components/card


class Projects extends Component {
    constructor() {
        super();
        this.rand = rand.bind(this);

        function rand(){
            return Math.round(Math.random()*4);
        }
        this.state = {
            projects: [
                {
                    name: 'Loading Projects...',
                    description: '',
                    image: '',
                    langs: ['Node.js, React, MongoDB, Express',]
                },
            ],
        }
    
    }

    componentWillMount(){
        axios.get('https://gg-portfolio-api.herokuapp.com/projects')
            .then(data =>{
                console.log(data);
                return data
                })
            .then(data => this.setState({
                projects: data.data,
            }))
    }
    


    render(){
       
        return (
         
            <div className="projectBox">
                {this.state.projects.map((item, i) =>
                    <div className="project" key={i}>
                        <a href={item.url}><h1>{item.name}</h1></a>
                        <img src={'https://robohash.org/'+item.name+'?set=set'+this.rand()} alt="project" />
                        <p>{item.description}</p><strong>{item.langs.join(' ◦ ')}</strong>
                    </div>
                )}
            </div>
        )
    }
}

export default Projects;