import React, { Component } from 'react';
import './App.css';

class Graphics extends Component {
    constructor() {
        super();
        this.state = {
           today_count: 0,
        }
    }

    componentWillMount() {
        fetch('https://53cdgr.cmxcisco.com/api/presence/v1/passerby/count/today?siteId=1505913182364')
        .then(results => {
            return results.json();
        }).then(data => {
            let count = (
                <div id="today">
                </div>
            ); 

            this.setState({today_count: count});
        })
    }



    render() {
        return (  
            <div className="container">
                <div className="container1">
                    {this.state.today_count}
                </div>
            </div>
        );
    }
}

export default Graphics;