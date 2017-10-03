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
            loading: true,
            projects: [
                {
                    name: 'Loading Projects...',
                    description: 'wrods words words',
                    img: 'https://robohash.org/loading',
                    langs: ['Node.js, React, MongoDB, Express']
                },
            ],
        }
    
    }

    componentDidMount(){
        axios.get('https://gg-portfolio-api.herokuapp.com/projects')
            .then(data =>{
                console.log(data);
                return data
                })
            .then(data => this.setState({
                loading: false,
                projects: data.data,
            }))
    }
    


    render(){
       
        return (
         
            <div className="container">
                {this.state.loading? <div><h1>LOADING</h1></div>:
                    this.state.projects.map((item, i) =>
                    <div className="project" key={i}>
                        <span className="front">
                            <img src={'https://robohash.org/'+item.name+'?set=set'+this.rand()} alt="project" />
                        </span>
                        <span className="back">
                            <a href={item.url} target="_blank"><h1>{item.name}</h1></a>
                            <p>{item.description}</p><hr/><strong>{item.langs.join(' ◦ ')}</strong>
                            <a href={item.git} target="_blank"><h3>Github</h3></a>
                        </span>
                    </div>
                )}
            </div>
        )
    }
}

export default Projects;