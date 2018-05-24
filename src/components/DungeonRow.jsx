import React from 'react';

export default class DungeonRow extends React.Component {
    componentDidMount(){
        
    }

    render(){
        const stars = this.props.dungeon.num_keystone_upgrades;
        return(
            <tr className="dungeon">
                <td><img src={`/img/dungeon/${this.props.dungeon.short_name}.jpg`} alt="" className="img-dungeon"/>{this.props.dungeon.dungeon}</td>
                <td>+{this.props.dungeon.mythic_level}<span className="stars">{[...Array(stars)].map((e, i) => <i className="fa fa-star text-gold" key={i}></i>)}</span></td>
                <td>{this.props.dungeon.score}</td>
            </tr>
        );
    }
}