import React from 'react';

import CharacterHeader from './CharacterHeader';
import DungeonRow from './DungeonRow';
import DungeonScore from './DungeonScore';


export default class DungeonList extends React.Component {
    characterSortOrder(region, realm, name){
        var filtered = this.props.characters && this.props.characters.filter(char => char.region === region && char.realm === realm && char.name === name);
        if(filtered.length === 1) return filtered[0].sortOrder;
        return 0;
    }

    characterSort(a, b){
        return this.characterSortOrder(a.character.region, a.character.realm, a.character.name) < this.characterSortOrder(b.character.region, b.character.realm, b.character.name) ? -1 : 1;
    }

    sortByCharacter(char){
        this.props.sortByChar(char.region, char.realm, char.name);
    }

    render(){
        var dungeonOrder = this.props.dungeonOrder;
        var dungeons = this.props.profiles && this.props.profiles.sort(this.characterSort.bind(this)).map(this.props.getDungeons);
        var sortedProfiles = this.props.profiles && this.props.profiles.sort(this.characterSort.bind(this))
        //console.log('dungeonOrder', dungeonOrder);
        //console.log('profiles', sortedProfiles);
        //console.log('dungeons', dungeons);
        return(
            <div className="col-sm-6 dungeon-list-container">
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <thead>
                        <tr>
                            <th>Dungeon</th>
                            {sortedProfiles.map((profile, i) => <CharacterHeader key={i} profile={profile} sortByChar={this.props.sortByChar} />)}
                        </tr>
                    </thead>
                    <tbody>
                        {dungeons && dungeonOrder.map((dungeon, dIdx) => (
                            <DungeonRow key={dIdx} dungeon={dungeon} sortByDungeon={this.props.sortByDungeon}>
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