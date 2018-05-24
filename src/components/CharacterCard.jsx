import React from 'react';

export default class CharacterCard extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div className="row character">
                <div className="col-sm-3 text-center">
                    {this.props.region}
                </div>
                <div className="col-sm-4">
                    {this.props.name}
                </div>
                <div className="col-sm-4">
                    {this.props.realm}
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-sm btn-danger" onClick={this.removeCharacter.bind(this)} >-</button>
                </div>
            </div>
        );
    }
}