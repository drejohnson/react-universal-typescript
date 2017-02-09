import { combineReducers } from 'redux';
import { client } from 'ui/utils/initClient';

const apollo: any = client.reducer()

export default combineReducers({
  apollo
});
