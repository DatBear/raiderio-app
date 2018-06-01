import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { HashRouter as Router, NavLink, Switch, Route, withRouter } from 'react-router-dom'

import CharacterList from './CharacterList';
import DungeonList from './DungeonList';

import actions from '../actions';

class Home extends React.Component{
    componentDidMount(){
        this.props.loadCharacters();
        console.log(this.props.raiderIo);
        //this.props.fetchProfile('us','kirintor','dennycrane');
    }

  render(){
    const renderCharacterList = (props) => {
      return (
        <CharacterList
              characters={this.props.raiderIo.characters}
              addCharacter={this.props.addCharacter}
              removeCharacter={this.props.removeCharacter}
              saveCharacters={this.props.saveCharacters}
              loadCharacters={this.props.loadCharacters}
              refreshCharacters={this.props.loadCharacters}
              deleteAllCharacters={this.props.deleteAllCharacters}
            />
      );
    };

    const renderDungeonList = (props) => {
      return (
        <DungeonList
              profiles={this.props.raiderIo.profiles}
              getDungeons={(profile) => profile.mythic_plus_best_runs}
              dungeonOrder={this.props.raiderIo.dungeonOrder}
              characters={this.props.raiderIo.characters}
              sortByDungeon={this.props.sortByDungeon}
              sortByChar={this.props.sortByChar}
            />
      );
    };
    return(
      <div>
        <div className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="http://datbear.com" className="navbar-brand">DatBear</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/characters" className="nav-link" >Edit Characters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dungeons" className="nav-link">Dungeons</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </div>
        <div className="container-fluid">
          <div className="row">
            <Switch>
              <Route path="/characters" render={renderCharacterList} />
              <Route path="/dungeons" render={renderDungeonList} />
            </Switch>
          </div>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));