import React, { Component } from 'react';
import './App.css';

class Background extends Component {
    constructor() {
        super();
        this.state = {
           pictures: []
        }
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/?results=500')
            .then(results => {
                return results.json();
            }).then(data => {
                let key = 0;
                let pictures = data.results.map((pic) => {
                    key++;
                    return (
                        <div className="background-image" key={key}>
                            <img src={pic.picture.medium} alt="" />
                        </div>
                    )
                });
                this.setState({pictures: pictures});
            })
    }



    render() {
        return (  
            <div className="container">
                <div className="container1">
                    {this.state.pictures}
                </div>
            </div>
        );
    }
}

export default Background;