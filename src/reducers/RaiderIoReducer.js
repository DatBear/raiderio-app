import * as raiderIo from '../actions/raiderIoActions';
import CharacterReducer from './CharacterReducer';

const defaultState = {
    profiles: [],
    characters: [],
    dungeonOrder: [
        'ARC',
        'BRH',
        'COEN',
        'COS',
        'DHT',
        'EOA',
        'HOV',
        'LOWR',
        'MOS',
        'NL',
        'SEAT',
        'UPPR',
        'VOTW'
    ]
}

export default (state = defaultState, action) => {
    let { type, payload } = action;
    var characters = CharacterReducer(state.characters, action);

    switch(type){
        case raiderIo.RAIDERIO_PROFILE_DONE: {
            const {region, realm, character, data} = action.payload;
            console.log('RAIDERIO_PROFILE_DONE payload:', action.payload);
            state = {
                ...state, 
                profiles: state.profiles.filter(p => !(p.region === region && p.realm === realm && p.character === character)).concat(action.payload)
            };
            return state;
            break;
        }
        case raiderIo.RAIDERIO_PROFILES_DONE: {
            console.log('PROFILES_DONE', action.payload);
            state.profiles = action.payload;
        }
        default:
            break;
    }
    return {...state, characters};
}