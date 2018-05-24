import React from 'react';

import DungeonRow from './DungeonRow';

export default class DungeonList extends React.Component {

    render(){
        return(
            <div className="col-sm-6 dungeon-list-container">
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <thead>
                        <tr>
                            <th>Dungeon</th>
                            <th>Level</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dungeons && this.props.dungeons.map((dungeon, i) => <DungeonRow key={i} dungeon={dungeon} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}