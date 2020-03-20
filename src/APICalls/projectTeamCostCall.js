import React, { Component } from 'react';
import CostOfEngagementComparison from '../Components/costOfEngagementComparison';

class CostOfEngagementComparisonComponent extends Component {
    render() {
        return (
            <CostOfEngagementComparison
                //Quantities by Role
                jr={this.props.jr}
                mid={this.props.mid}
                sr={this.props.sr}
                tech={this.props.tech}
                qa={this.props.qa}
                month={this.props.month}

                //DB Prices
                pricesInHouse={this.state.pricesInHouse}
                pricesNearShoreOffSite={this.state.pricesNearShoreOffSite}
                pricesNearShoreOnSite={this.state.pricesNearShoreOnSite}
                pricesOffShoreOnSite={this.state.pricesOffShoreOnSite}
                pricesOffShoreOffSite={this.state.pricesOffShoreOffSite}
            />
        )
    }
    state = {
        pricesInHouse: [],
        pricesNearShoreOffSite: [],
        pricesNearShoreOnSite: [],
        pricesOffShoreOffSite: [],
        pricesOffShoreOnSite: [],
       
    };
    
        componentDidMount() {
            fetch('http://valuemyteamapidev.scio.local/vmt/prices')
                .then(res => res.json())
                .then((data) => {
                    this.setState({ 
                        pricesInHouse: data.response[0],
                        pricesNearShoreOffSite: data.response[1],
                        pricesNearShoreOnSite: data.response[2],
                        pricesOffShoreOffSite: data.response[3], 
                        pricesOffShoreOnSite: data.response[4]
                        
                    })
                })
                .catch(console.log)
        }
}


export default CostOfEngagementComparisonComponent
 /*Data in the API 
    state = {
        pricesInHouse: {
            "type":"In-House",
            "jr": 65,
            "mid": 70,
            "sr": 75,
            "tech": 95,
            "engMan": 110,
            "qa": 70
        },
        pricesNearShoreOffSite: {
            "type":"NearshoreOffSite",
            "jr": 30,
            "mid": 38,
            "sr": 46,
            "tech": 55,
            "engMan": 75,
            "qa": 34
        },
        pricesNearShoreOnSite: {
            "type":"NearshoreOnSite",
            "jr": 70,
            "mid": 75,
            "sr": 85,
            "tech": 100,
            "engMan": 125,
            "qa": 70
        },
        pricesOffShoreOffSite: {
            "type":"OffShoreOffSite",
            "jr": 25,
            "mid": 28,
            "sr": 30,
            "tech": 40,
            "engMan": 55,
            "qa": 26
        },
        pricesOffShoreOnSite: {
            "type":"OffShoreOnSite",
            "jr": 70,
            "mid": 75,
            "sr": 85,
            "tech": 100,
            "engMan": 125,
            "qa": 70
        }
    }*/