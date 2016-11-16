import { SET_STEP }  from '../constants';

export default {
  
  name: 'step',

  initialState: 0,

  [SET_STEP]: (state, { step }) => step,

 };
