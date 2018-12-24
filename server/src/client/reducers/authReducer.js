import { FETCH_CURRENT_USER } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      // If user not authenticated then payload is undefined
      return action.payload.data || false;
    default:
      return state;
  }
}
