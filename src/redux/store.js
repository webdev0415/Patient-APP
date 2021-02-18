import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./rootreducer";
import logger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore } from "redux-persist"

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
export const persistor = persistStore(store)
export default { store, persistor }