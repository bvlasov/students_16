import * as constants from '../constants';

export const add = number => ({ type: constants.INCREMENT, number });

export const deduct = number => ({ type: constants.DECREMENT, number });

export const set = step => ({ type: constants.SET_STEP, step });