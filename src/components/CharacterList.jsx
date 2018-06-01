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
        this.props.addCharacter(this.state.newRegion, this.state.newRealm, this.state.newName);
        this.setState({newRealm: '', newName: ''})
    }

    onEnterKey(e){
        this.props.addCharacter(this.state.newRegion, this.state.newRealm, this.state.newName);
        this.setState({newRealm: '', newName: ''})
    }

    _handleKeyPress(e) {
        if(e.key === 'Enter'){
            this.onEnterKey(e);
        }
    }

    

    render(){
        return(
            <div className="col-sm-12">
                <h4>Characters</h4>
                <div className="row">
                <div className="col-sm-12" style={{marginBottom:10}}>
                    <button className="btn btn-sm btn-success" onClick={this.props.saveCharacters.bind(this)}><i className="far fa-save"></i></button>
                    <button className="btn btn-sm btn-info" style={{marginLeft:10}} onClick={this.props.loadCharacters.bind(this)}><i className="fas fa-spinner"></i></button>
                    <button className="btn btn-sm btn-danger" style={{marginLeft:10}} onClick={this.props.deleteAllCharacters.bind(this)}><i className="fas fa-user-minus"></i> All</button>
                </div>
                </div>
                <div className="row characters-header">
                    <div className="col-sm-2 col-2">Region</div>
                    <div className="col-sm-4 col-4">Name</div>
                    <div className="col-sm-4 col-4">Realm</div>
                    <div className="col-sm-2 col-2"></div>
                </div>
                {this.props.characters && this.props.characters.map((char, i) => (
                    <Character key={i} region={char.region} realm={char.realm} name={char.name}
                    removeCharacter={this.props.removeCharacter} />
                ))}
                <div className="row new-character">
                    <div className="col-sm-2 col-3">
                        <select className="form-control form-control-sm" value={this.state.newRegion} onChange={this.handleInputChange('newRegion')}>
                            <option value="us">US</option>
                            <option value="eu">EU</option>
                        </select>
                    </div>
                    <div className="col-sm-4 col-9">
                        <input className="form-control form-control-sm" placeholder="Name" value={this.state.newName} onChange={this.handleInputChange('newName')} />
                    </div>
                    <div className="col-sm-4 col-10">
                        <input className="form-control form-control-sm" placeholder="Realm" value={this.state.newRealm} onChange={this.handleInputChange('newRealm')} onKeyPress={this._handleKeyPress.bind(this)} />
                    </div>
                    <div className="col-sm-1 col-1">
                        <button className="btn btn-sm btn-success" onClick={this.addCharacter.bind(this)}><i className="fas fa-user-plus"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}