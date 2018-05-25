import React from 'react';

import DungeonRow from './DungeonRow';
import DungeonScore from './DungeonScore';

export default class DungeonList extends React.Component {
    characterSortOrder(region, realm, name){
        var filtered = this.props.characters.filter(char => char.region === region && char.realm === realm && char.name === name);
        if(filtered.length === 1) return filtered[0].sortOrder;
        return 0;
    }

    render(){
        var dungeonOrder = this.props.dungeonOrder;
        var dungeons = this.props.profiles && this.props.profiles.map(this.props.getDungeons);
        var sortedProfiles = this.props.profiles && this.props.profiles.sort((a, b) => {
            return this.characterSortOrder(...a.character) < this.characterSortOrder(...b.character) ? -1 : 1;
        })
        console.log('dungeonOrder', dungeonOrder);
        console.log('profiles', sortedProfiles);
        console.log('dungeons', dungeons);
        return(
            <div className="col-sm-6 dungeon-list-container">
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <thead>
                        <tr>
                            <th>Dungeon</th>
                            {sortedProfiles.map((profile, i) => <th key={i}>{profile.name}<br/>{profile.realm}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {dungeonOrder.map((dungeon, dIdx) => (
                            <DungeonRow key={dIdx} dungeon={dungeon}>
                                {dungeons.map((dungeonList, dlIdx) => (
                                    dungeonList.filter(d => d.short_name == dungeon.short_name).map((dungeonScore, dSIdx) => (
                                        <DungeonScore key={dSIdx} dungeon={dungeonScore}/>
                                    ))
                                ))}
                            </DungeonRow>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}