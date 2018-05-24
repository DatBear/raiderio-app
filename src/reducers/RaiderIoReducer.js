import * as raiderIo from '../actions/raiderIoActions';
import CharacterReducer from './CharacterReducer';

const defaultState = {
    profiles: [],
    characters: [],
}

export default (state = defaultState, action) => {
    let { type, payload } = action;
    var characters = CharacterReducer(state.characters, action);

    switch(type){
        case raiderIo.RAIDERIO_PROFILE_DONE:{
            const {region, realm, character, data} = action.payload;
            console.log('RAIDERIO_PROFILE_DONE payload:', action.payload);
            state = {
                ...state, 
                profiles: state.profiles.filter(p => !(p.region === region && p.realm === realm && p.character === character)).concat(action.payload)
            };
            return state;
            break;
        }
        case raiderIo.RAIDERIO_PROFILES_DONE:{
            
        }
        default:
            break;
    }
    return {...state, characters};
}