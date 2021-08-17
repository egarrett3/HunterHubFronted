import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (preloadedState = {}) => {
    
    let store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,logger),
    )
    // let persistor = persistStore(store);
    return {store};
}

export default configureStore;