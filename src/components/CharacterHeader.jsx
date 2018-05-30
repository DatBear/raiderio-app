import React from 'react';

export default class CharacterHeader extends React.Component {
    componentDidMount(){
        
    }

    sortByCharacter(){
        var {region, realm, name} = this.props.profile.character;
        this.props.sortByChar(region, realm, name);
    }

    render(){
        return(
                <th className={'color-'+this.props.profile.class.toLowerCase().replace(' ', '')} 
                    onClick={this.sortByCharacter.bind(this)}>{this.props.profile.name} {this.props.profile.server}</th>
        );
    }
}