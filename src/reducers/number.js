import { INCREMENT, DECREMENT } from '../constants';

export default {
  
  name: 'number',

  initialState: 0,

  [INCREMENT]: (state, { number }) => (state + number),

  [DECREMENT]: (state, { number }) => (state - number),

 };
