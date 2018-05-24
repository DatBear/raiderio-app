import React from 'react';

export default class DungeonScore extends React.Component {
    componentDidMount(){
        
    }

    render(){
        const stars = this.props.dungeon.num_keystone_upgrades;
        return(
                <td>+{this.props.dungeon.mythic_level}<span className="stars">{[...Array(stars)].map((e, i) => <i className="fa fa-star text-gold" key={i}></i>)}</span>:{this.props.dungeon.score}</td>
        );
    }
}