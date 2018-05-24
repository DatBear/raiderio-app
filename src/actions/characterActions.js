export const CHARACTER_ADD = 'CHARACTER_ADD';
export const CHARACTER_REMOVE = 'CHARACTER_REMOVE';
export const CHARACTER_REFRESH = 'CHARACTER_REFRESH';
export const CHARACTERS_SAVE = 'CHARACTERS_SAVE';
export const CHARACTERS_LOAD = 'CHARACTERS_LOAD';
export const CHARACTERS_LOADED = 'CHARACTERS_LOADED';
export const CHARACTERS_REFRESH = 'CHARACTERS_REFRESH';
export const CHARACTERS_DELETE_ALL = 'CHARACTERS_DELETE_ALL';

export const refreshCharacter = (region, realm, name) => ({type: CHARACTER_REFRESH, payload: {region, realm, name}});
export const addCharacter = (region, realm, name) => ({type: CHARACTER_ADD, payload: {region, realm, name}});
export const removeCharacter = (region, realm, name) => ({type: CHARACTER_REMOVE, payload: {region, realm, name}});
export const saveCharacters = () => ({type: CHARACTERS_SAVE});
export const loadCharacters = () => ({type: CHARACTERS_LOAD});
export const loadedCharacters = (characters) => ({type: CHARACTERS_LOADED, payload: characters});
export const refreshCharacters = () => ({type: CHARACTERS_REFRESH});
export const deleteAllCharacters = () => ({type: CHARACTERS_DELETE_ALL});