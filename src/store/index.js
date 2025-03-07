import storiesSlice from "../features/stories/storiesSlice";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {singleStory} from "./singleStory";

const reducer = combineReducers({
  stories: storiesSlice,
  singleStory: singleStory
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
