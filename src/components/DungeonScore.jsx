import React from 'react';

export default class DungeonScore extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            dungeonTime: this.msToTime(props.dungeon.clear_time_ms)
        };
    }
    
    componentDidMount(){
        
    }

    msToTime(s) {
        // Pad to 2 or 3 digits, default is 2
      var pad = (n, z = 2) => ('00' + n).slice(-z);
      var h = s/3.6e6|0;
      return (h > 0 ? pad(s/3.6e6|0) + ':' : '') + pad((s%3.6e6)/6e4 | 0) + ':' + pad((s%6e4)/1000|0);
    }

    dungeonTime(){
        return this.msToTime(this.props.dungeon.clear_time_ms);
    }

    render(){
        const stars = this.props.dungeon.num_keystone_upgrades;
        return(
                <td>
                    <span title={this.state.dungeonTime}>
                        {this.props.dungeon.score},&nbsp;+{this.props.dungeon.mythic_level}
                        <span className="stars">{[...Array(stars)].map((e, i) => 
                            <i className="fa fa-star text-gold" key={i}></i>
                            )}
                        </span>
                    </span>
                </td>
        );
    }
}