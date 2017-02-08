import { combineReducers } from 'redux';
import { client } from '../utils/initClient';

const apollo: any = client.reducer()

export default combineReducers({
  apollo
});
