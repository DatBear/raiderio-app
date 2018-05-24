import axios from 'axios';

const apiBase = "http://localhost/raiderio/api";

export class RaiderIoService {
    GetProfile(region, realm, character){
        return axios.get(`${apiBase}/characters/profile/${region}/${realm}/${character}`);
    }

    GetProfiles(characters){
        console.log('characters', characters);
        return axios.post(`${apiBase}/characters/profiles`, {characters});
    }

    GetProfileExample(){
        return axios.get(`${apiBase}/characters/profile/example`);
    }
}

export default new RaiderIoService();