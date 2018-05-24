import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';
import DungeonList from './DungeonList';

import actions from '../actions';

class Home extends React.Component{
    componentDidMount(){
        this.props.loadCharacters();
        console.log(this.props.raiderIo);
        //this.props.fetchProfile('us','kirintor','dennycrane');
    }

    // {this.props.raiderIo.profiles && this.props.raiderIo.profiles.map((profile, i) => 
    //     <DungeonList key={i} dungeons={profile.data.mythic_plus_best_runs}
    //         dungeonOrder={this.props.raiderIo.dungeonOrder} 
    //         characters={this.props.raiderIo.characters} />)}
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <CharacterList
                        characters={this.props.raiderIo.characters}
                        addCharacter={this.props.addCharacter}
                        removeCharacter={this.props.removeCharacter}
                        saveCharacters={this.props.saveCharacters}
                        loadCharacters={this.props.loadCharacters}
                        refreshCharacters={this.props.loadCharacters}
                        deleteAllCharacters={this.props.deleteAllCharacters}
                    />
                </div>
                <div className="row">
                    <DungeonList
                        profiles={this.props.raiderIo.profiles}
                        getDungeons={(profile) => profile.mythic_plus_best_runs}
                        dungeonOrder={this.props.raiderIo.dungeonOrder}
                        characters={this.props.raiderIo.characters}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    ...actions
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);