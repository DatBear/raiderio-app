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
        var dungeonOrders = this.props.dungeonOrder;
        var profileDungeons = this.props.profiles && this.props.profiles.sort(this.characterSort.bind(this)).map(this.props.getDungeons);
        var sortedProfiles = this.props.profiles && this.props.profiles.sort(this.characterSort.bind(this))
        return(
            <div className="col-sm-12 dungeon-list-container">
                <h4>Dungeons</h4>
                <table className="table table-striped table-hover table-condensed table-bordered">
                    <thead>
                        <tr>
                            <th>Dungeon</th>
                            {sortedProfiles.map((profile, i) => <CharacterHeader key={i} profile={profile} sortByChar={this.props.sortByChar} />)}
                        </tr>
                    </thead>
                    <tbody>
                        {profileDungeons && dungeonOrders.map((dungeonOrder, dIdx) => (
                            <DungeonRow key={dIdx} dungeon={dungeonOrder} sortByDungeon={this.props.sortByDungeon}>
                                {profileDungeons.map((profileDungeonList, dlIdx) => {
                                    let dungeonScore = profileDungeonList.find(d => d.short_name == dungeonOrder.short_name);
                                    return dungeonScore && <DungeonScore key={dlIdx} dungeon={dungeonScore}/> || <td key={dlIdx}></td>;
                            })}
                            </DungeonRow>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}