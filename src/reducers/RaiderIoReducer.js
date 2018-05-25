import * as raiderIo from '../actions/raiderIoActions';
import CharacterReducer from './CharacterReducer';

const defaultState = {
    profiles: [],
    characters: [],
    dungeonOrder: [
        { short_name:'ARC',  dungeon: 'The Arcway'},
        { short_name:'BRH',  dungeon: 'Black Rook Hold'},
        { short_name:'COEN', dungeon: 'Cathedral of Eternal Night'},
        { short_name:'COS',  dungeon: 'Court of Stars'},
        { short_name:'DHT',  dungeon: 'Darkheart Thicket'},
        { short_name:'EOA',  dungeon: 'Eye of Azshara'},
        { short_name:'HOV',  dungeon: 'Halls of Valor'},
        { short_name:'LOWR', dungeon: 'Return to Karazhan: Lower'},
        { short_name:'MOS',  dungeon: 'Maw of Souls'},
        { short_name:'NL',   dungeon: 'Neltharion\'s Lair'},
        { short_name:'SEAT', dungeon: 'Seat of the Triumvirate'},
        { short_name:'UPPR', dungeon: 'Return to Karazhan: Upper'},
        { short_name:'VOTW', dungeon: 'Vault of the Wardens'},
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