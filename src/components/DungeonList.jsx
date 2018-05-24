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
        //ugh.. pretty sure I want to change dungeonOrder to be complex objects with just short_name and name, then use that to loop through and find dungeons for each column from there
        //gotta go to work tho...
        var dungeonOrder = this.props.dungeonOrder;
        var dungeons = this.props.profiles && this.props.profiles.map(this.props.getDungeons);
        var dungeonSort = (a, b) => {
            return dungeonOrder.indexOf(a.short_name) < dungeonOrder.indexOf(b.short_name) ? -1 : 1;
        };
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
                        {dungeons && dungeons.map((dungeonList, i) => dungeonList.map((dungeon, j) => <DungeonRow key={j} dungeon={dungeon}>
                            {<DungeonScore dungeon={dungeons[i][j]} />}
                        </DungeonRow>))}
                    </tbody>
                </table>
            </div>
        );
    }
}