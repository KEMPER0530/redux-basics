// reducer count
import { INCREMENT, DECREMENT, DINCREMENT } from '../actions';

const initialState = {
  value: 0
};
console.log('reducer count');
export default (state = initialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      console.log('reducer INCREMENT');
      return {
        value: state.value + 1
      };
    case DECREMENT:
      console.log('reducer DECREMENT');
      return {
        value: state.value - 1
      };
    case DINCREMENT:
      console.log('reducer DINCREMENT');
      return {
        value: state.value + 2
      };
    default:
      console.log('reducer default');
      return state;
  }
};
