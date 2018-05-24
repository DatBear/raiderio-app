
export const RAIDERIO_PROFILE_FETCH = 'RAIDERIO_PROFILE_FETCH';
export const RAIDERIO_PROFILE_DONE = 'RAIDERIO_PROFILE_DONE';
export const RAIDERIO_PROFILE_ERROR = 'RAIDERIO_PROFILE_ERROR';

export const RAIDERIO_PROFILES_FETCH = 'RAIDERIO_PROFILES_FETCH';
export const RAIDERIO_PROFILES_DONE = 'RAIDERIO_PROFILES_DONE';
export const RAIDERIO_PROFILES_ERROR = 'RAIDERIO_PROFILES_ERROR';

export const fetchProfile = (region, realm, character) => ({type: RAIDERIO_PROFILE_FETCH, payload: {region, realm, character} });
export const profileDone = (region, realm, character, data) => ({type: RAIDERIO_PROFILE_DONE, payload: { region, realm, character, data }});
export const profileError = (region, realm, character, error) => ({type: RAIDERIO_PROFILE_ERROR, payload: { region, realm, character, error }});

export const fetchProfiles = (characters) => ({type: RAIDERIO_PROFILES_FETCH, payload: {characters} });
export const profilesDone = (data) => ({type: RAIDERIO_PROFILES_DONE, payload: data });
export const profilesError = (characters, error) => ({type: RAIDERIO_PROFILES_ERROR, payload: { characters, error }});
