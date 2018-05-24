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
        this.props.fetchProfile('us','kirintor','dennycrane');
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <CharacterList
                        characters={this.props.characters}
                        addCharacter={this.props.addCharacter}
                        removeCharacter={this.props.removeCharacter}
                        saveCharacters={this.props.saveCharacters}
                        loadCharacters={this.props.loadCharacters}
                        refreshCharacters={this.props.loadCharacters}
                    />
                </div>
                <div className="row">
                    {this.props.raiderIo.profiles && this.props.raiderIo.profiles.map((profile, i) => <DungeonList key={i} dungeons={profile.data.mythic_plus_best_runs} />)}
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