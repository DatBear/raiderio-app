import * as raiderIoActions from './raiderIoActions';
import * as characterActions from './characterActions';

const actions = {
    ...raiderIoActions,
    ...characterActions
};

export default actions;

