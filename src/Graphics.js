import React, { Component } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';

class Graphics extends Component {
    constructor() {
        super();
        this.state = {
           'today': 0,
           'yesterday': 0,
           'threedays': 0,
           'lastweek': 0
        }
    }

    componentDidMount() {
        const fetches = [
            { key: 'today', uri: 'https://53cdgr.cmxcisco.com/api/presence/v1/passerby/count/today?siteId=1505913182364' },
            { key: 'yesterday', uri: 'https://53cdgr.cmxcisco.com/api/presence/v1/passerby/count/yesterday?siteId=1505913182364' },
            { key: 'threedays', uri: 'https://53cdgr.cmxcisco.com/api/presence/v1/passerby/count/3days?siteId=1505913182364' },
            { key: 'lastweek', uri: 'https://53cdgr.cmxcisco.com/api/presence/v1/passerby/count/lastweek?siteId=1505913182364' },
        ];
        const headers = new Headers();
        headers.append('Authorization', 'Basic '+btoa('pixelscamp@cisco.com:pixelscamp2017'));
        headers.append('Content-Type', 'application/json');

        fetches.forEach((obj) => {
            fetch(obj.uri, {
               headers,
               withCredentials: true
             }).then(results => {
                return results.json();
            }).then(data => {
                this.setState({ [obj.key]: data });
            });
        });
    }

    render() {
        let data01 = [
            { name: "Today", value: this.state.today }, 
            { name: "Yesterday", value: this.state.yesterday },
            { name: "Last 3 days", value: this.state.threedays },
            { name: "Last 7 days", value: this.state.lastweek }
        ];
        let data = [
            { name: "Today", Passerby: this.state.today }, 
            { name: "Yesterday", Passerby: this.state.yesterday },
            { name: "Last 3 days", Passerby: this.state.threedays },
            { name: "Last 7 days", Passerby: this.state.lastweek }
        ];
        return (
            <div className="content">
                <div className="graphics">
                    <div id="pie">
                        <PieChart width={730} height={250}>
                          <Tooltip />
                          <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#808080" />
                          <Pie data={data01} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#000" label />
                        </PieChart>
                    </div>
                    <div id="bar">
                        <BarChart width={500} height={250} data={data}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <CartesianGrid strokeDasharray="4 4" />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="Passerby" fill="#808080" />
                        </BarChart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Graphics;