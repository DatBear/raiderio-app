import { call, put, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import RaiderIoService from '../services/RaiderIoService';

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms))
} 

function* getProfile(payload) {
    const { region, realm, name } = payload;
    try {
        const res = yield RaiderIoService.GetProfile(region, realm, name);
        yield put(actions.profileDone(region,realm,name, res.data));
    } catch(e){
        yield put(actions.profileError(region,realm,name, e.message));
    }
}

function* getProfiles(payload) {
    const characters = payload;
    try{
        const res = yield RaiderIoService.GetProfiles(characters);
        console.log('getprofiles', res.data.profiles);
        yield put(actions.profilesDone(res.data.profiles));
    } catch(e){
        yield put(actions.profilesError(characters, e.message));
    }
}

function* loadCharacters() {
    var characters = JSON.parse(localStorage.getItem('characters')) || [];
    yield put(actions.loadedCharacters(characters));
}

function* actionFilter(action) {
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

export default function* root() {
    yield takeEvery(Object.keys(actions).map(key => actions[key]), actionFilter);
}