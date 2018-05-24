import { combineReducers } from 'redux';

import RaiderIoReducer from './RaiderIoReducer';
import CharacterReducer from './CharacterReducer';

export default combineReducers({
    raiderIo: RaiderIoReducer,
});