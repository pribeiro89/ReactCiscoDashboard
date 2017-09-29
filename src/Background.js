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
                let pictures = data.results.map((pic) => {
                    return (
                        <div className="background-image" key={pic.results}>
                            <img src={pic.picture.medium} />
                        </div>
                    )
                })
                this.setState({pictures: pictures});
                console.log("state", this.state.pictures);
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