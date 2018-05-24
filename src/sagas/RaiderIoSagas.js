import { call, put, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import RaiderIoService from '../services/RaiderIoService';

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms))
} 

function* getProfile(payload){
    const { region, realm, character } = payload;
    try {
        const res = yield RaiderIoService.GetProfile(region, realm, character);
        yield put(actions.profileDone(region,realm,character, res.data));
    } catch(e){
        yield put(actions.profileError(region,realm,character, e.message));
    }
}

function* getProfiles(payload){
    const characters = payload;
    try{
        const res = RaiderIoService.GetProfiles(characters);
        yield put(actions.profilesDone(res.data));
    } catch(e){
        yield put(actions.profilesError(characters, e.message));
    }
}

function* loadCharacters(){
    var characters = JSON.parse(localStorage.getItem('characters')) || [];
    yield put(actions.loadedCharacters(characters));
}

function* actionFilter(action){
    switch(action.type){
        case actions.RAIDERIO_PROFILE_FETCH:
        case actions.CHARACTER_ADD:
            yield call(getProfile, action.payload);
            break;
        case actions.CHARACTERS_LOADED:
            yield call(getProfiles, action.payload);
            break;
        case actions.CHARACTERS_LOAD:
            yield call(loadCharacters);
            break;
    }
}

export default function* root(){
    console.log('root');
    yield takeEvery(Object.keys(actions).map(key => actions[key]), actionFilter);
}