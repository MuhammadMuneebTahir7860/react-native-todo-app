import { combineReducers} from 'redux';
import TaskReducer from '../redux/reducers/TaskReducer';
import AuthReducer from './reducers/AuthReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
};
const RootReducer=combineReducers({
  TaskReducer,
  AuthReducer:persistReducer(persistConfig, AuthReducer),
})

export default RootReducer;