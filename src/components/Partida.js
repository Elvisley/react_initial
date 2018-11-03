import React from 'react';


export default class Time extends React.Component {
    
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <h2>{this.props.estadio}</h2>
                <div>{this.props.data} - {this.props.hora}</div>
            </div>
        );
    }

}