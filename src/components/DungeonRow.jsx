import React from 'react';

export default class DungeonRow extends React.Component {
    componentDidMount(){
        
    }

    sortByDungeon(){
        this.props.sortByDungeon(this.props.dungeon);
    }

    render(){
        const stars = this.props.dungeon.num_keystone_upgrades;
        return(
            <tr className="dungeon">
                <td onClick={this.sortByDungeon.bind(this)}><img src={`/img/dungeon/${this.props.dungeon.short_name}.jpg`} alt="" className="img-dungeon"/>{this.props.dungeon.dungeon}</td>
                {this.props.children}
            </tr>
        );
    }
}