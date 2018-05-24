import React from 'react';

import Character from './Character';

export default class CharacterList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newRegion: 'US', 
            newRealm: '', 
            newName: ''
        };
    }

    componentDidMount(){
        
    }

    handleInputChange(property) {
        return e => {
            this.setState({
            [property]: e.target.value
            });
        };
    }

    addCharacter(e){
        this.setState({newRealm: '', newName: ''})
        this.props.addCharacter(this.state.newRegion, this.state.newRealm, this.state.newName);
    }

    render(){
        return(
            <div className="col-sm-4">
                <h3>Characters</h3>
                <div className="row">
                <div className="col-sm-12" style={{marginBottom:10}}>
                    <button className="btn btn-sm btn-success" onClick={this.props.saveCharacters.bind(this)}>Save</button>
                    <button className="btn btn-sm btn-info" style={{marginLeft:10}} onClick={this.props.loadCharacters.bind(this)}>Load</button>
                </div>
                </div>
                <div className="row characters-header">
                    <div className="col-sm-3">Region</div>
                    <div className="col-sm-4">Name</div>
                    <div className="col-sm-4">Realm</div>
                    <div className="col-sm-1"></div>
                </div>
                {this.props.characters.map((char, i) => (
                    <Character key={i} region={char.region} realm={char.realm} name={char.name}
                    removeCharacter={this.props.removeCharacter} />
                ))}
                <div className="row new-character">
                    <div className="col-sm-3">
                        <select className="custom-select custom-select-sm" value={this.state.newRegion} onChange={this.handleInputChange('newRegion')}>
                            <option value="us">US</option>
                            <option value="eu">EU</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm" placeholder="Name" value={this.state.newName} onChange={this.handleInputChange('newName')} />
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm" placeholder="Realm" value={this.state.newRealm} onChange={this.handleInputChange('newRealm')} />
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-sm btn-success" onClick={this.addCharacter.bind(this)}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}