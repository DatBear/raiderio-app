import  actions from '../actions';



export default (state = [], action) => {
    switch(action.type){
        case actions.CHARACTER_ADD: {
            if(!action.payload.region || !action.payload.realm || !action.payload.name) break;
            return state.concat({...action.payload, sortOrder: Math.max(...state.map(x => x.sortOrder),0)+1 } );
        }
        case actions.CHARACTER_REMOVE: {
            const {region, realm, name} = action.payload;
            return state.filter(c => !(c.name === action.payload.name && c.region === action.payload.region && c.realm === action.payload.realm));
        }
        case actions.CHARACTER_REFRESH: {
            break;
        }
        case actions.CHARACTERS_SAVE: {
            localStorage.setItem('characters', JSON.stringify(state));
            return state;
        }
        case actions.CHARACTERS_DELETE_ALL:{
            return [];
        }
        case actions.CHARACTERS_LOADED:{
            return action.payload;
        }
        case actions.CHARACTERS_REFRESH: {
            break;
        }
        
        default:
            break;

    }
    return state;
}