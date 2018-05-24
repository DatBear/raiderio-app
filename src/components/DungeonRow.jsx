import React from 'react';

export default class DungeonRow extends React.Component {
    componentDidMount(){
        
    }

    render(){
        const stars = this.props.dungeon.num_keystone_upgrades;
        return(
            <tr className="dungeon">
                <td><img src={`/img/dungeon/${this.props.dungeon.short_name}.jpg`} alt="" className="img-dungeon"/>{this.props.dungeon.dungeon}</td>
                {this.props.children}
            </tr>
        );
    }
}