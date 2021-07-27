import { applyMiddleware, createStore } from 'redux';
import { persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import RootReducer from '../redux/RootReducer';

export const store = createStore(RootReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);